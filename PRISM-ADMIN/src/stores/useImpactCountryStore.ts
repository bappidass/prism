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
  addCountry: (data: { name: string }) => Promise<void>;
  deleteCountry: (id: string) => Promise<void>;
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
  },

  addCountry: async ({ name }) => {
    set({ loading: true, error: null });

    try {
      const newCountry: ImpactCountry = {
        id: Date.now().toString(),
        name,
        createdAt: new Date(),
      };

      const docRef = doc(db, "impactCountries", "impactCountries");

      await updateDoc(docRef, {
        countries: arrayUnion(newCountry),
      });

      set((state) => ({
        countries: [newCountry, ...state.countries], // latest first
        loading: false,
      }));
    } catch (err) {
      console.error(err);
      set({ error: "Failed to add country", loading: false });
    }
  },

  deleteCountry: async (id) => {
    set({ loading: true, error: null });

    try {
      const docRef = doc(db, "impactCountries", "impactCountries");
      const toDelete = get().countries.find((c) => c.id === id);

      if (!toDelete) {
        set({ loading: false });
        return;
      }

      await updateDoc(docRef, {
        countries: arrayRemove(toDelete),
      });

      set((state) => ({
        countries: state.countries.filter((c) => c.id !== id),
        loading: false,
      }));
    } catch (err) {
      console.error(err);
      set({ error: "Failed to delete country", loading: false });
    }
  },
}));

export default useImpactCountryStore;