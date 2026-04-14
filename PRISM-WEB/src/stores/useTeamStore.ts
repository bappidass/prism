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

export interface Person {
  id: string;
  name: string;
  img: string;
  linkedin: string;
  createdAt: Date;
}

export interface SimpleItem {
  id: string;
  name: string;
  img: string;
  createdAt: Date;
}

export type PersonInput = { name: string; img: string; linkedin: string };
export type SimpleInput = { name: string; img: string };

interface TeamStore {
  directors: Person[];
  advisors: Person[];
  partnerships: SimpleItem[];
  clients: SimpleItem[];
  loading: boolean;
  error: string | null;

  fetchTeam: () => Promise<void>;
}

const useTeamStore = create<TeamStore>((set, get) => ({
  directors: [],
  advisors: [],
  partnerships: [],
  clients: [],
  loading: false,
  error: null,
  fetchTeam: async () => {
    if (
      get().directors.length ||
      get().advisors.length ||
      get().partnerships.length ||
      get().clients.length
    )
      return;

    set({ loading: true, error: null });

    try {
      const docRef = doc(db, "team", "team");
      const snap = await getDoc(docRef);

      if (snap.exists()) {
        const data = snap.data();

        set({
          directors: (data.directors as Person[]) || [],
          advisors: (data.advisors as Person[]) || [],
          partnerships: (data.partnerships as SimpleItem[]) || [],
          clients: (data.clients as SimpleItem[]) || [],
          loading: false,
        });
      } else {
        await setDoc(docRef, {
          directors: [],
          advisors: [],
          partnerships: [],
          clients: [],
        });

        set({
          directors: [],
          advisors: [],
          partnerships: [],
          clients: [],
          loading: false,
        });
      }
    } catch (err) {
      console.error(err);
      set({ error: "Failed to fetch team data", loading: false });
    }
  }
}));

export default useTeamStore;