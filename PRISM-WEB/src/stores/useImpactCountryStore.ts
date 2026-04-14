import { create } from "zustand";
import {
  doc,
  getDoc,
  setDoc,
  updateDoc,
  arrayUnion,
  arrayRemove,
} from "firebase/firestore";
import { db } from "@/lib/firebase";

export interface ImpactCountry {
  id: string;
  name: string;
  createdAt: Date;
}

interface ImpactCountryStore {
  countries: ImpactCountry[];
  loading: boolean;
  error: string | null;

  fetchCountries: () => Promise<void>;

}

const useImpactCountryStore = create<ImpactCountryStore>((set, get) => ({
  countries: [],
  loading: false,
  error: null,

  fetchCountries: async () => {
    if (get().countries.length > 0) return;

    set({ loading: true, error: null });

    try {
      const docRef = doc(db, "impactCountries", "impactCountries");
      const snap = await getDoc(docRef);

      if (snap.exists()) {
        set({
          countries: (snap.data().countries as ImpactCountry[]) || [],
          loading: false,
        });
      } else {
        await setDoc(docRef, { countries: [] });
        set({ countries: [], loading: false });
      }
    } catch (err) {
      console.error(err);
      set({ error: "Failed to fetch countries", loading: false });
    }
  }
}));

export default useImpactCountryStore;