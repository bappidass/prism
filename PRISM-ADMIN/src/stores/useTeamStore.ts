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

  addDirector: (data: PersonInput) => Promise<void>;
  addAdvisor: (data: PersonInput) => Promise<void>;
  addPartnership: (data: SimpleInput) => Promise<void>;
  addClient: (data: SimpleInput) => Promise<void>;

  deleteDirector: (id: string) => Promise<void>;
  deleteAdvisor: (id: string) => Promise<void>;
  deletePartnership: (id: string) => Promise<void>;
  deleteClient: (id: string) => Promise<void>;
}

const useTeamStore = create<TeamStore>((set, get) => ({
  directors: [],
  advisors: [],
  partnerships: [],
  clients: [],
  loading: false,
  error: null,

  // ✅ FETCH ALL (single doc)
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
  },

  // ✅ ADD
  addDirector: async (data) => {
    set({ loading: true, error: null });

    try {
      const newItem: Person = {
        id: Date.now().toString(),
        ...data,
        createdAt: new Date(),
      };

      const docRef = doc(db, "team", "team");

      await updateDoc(docRef, {
        directors: arrayUnion(newItem),
      });

      set((s) => ({
        directors: [newItem, ...s.directors],
        loading: false,
      }));
    } catch (err) {
      console.error(err);
      set({ error: "Failed to add director", loading: false });
    }
  },

  addAdvisor: async (data) => {
    set({ loading: true, error: null });

    try {
      const newItem: Person = {
        id: Date.now().toString(),
        ...data,
        createdAt: new Date(),
      };

      const docRef = doc(db, "team", "team");

      await updateDoc(docRef, {
        advisors: arrayUnion(newItem),
      });

      set((s) => ({
        advisors: [newItem, ...s.advisors],
        loading: false,
      }));
    } catch (err) {
      console.error(err);
      set({ error: "Failed to add advisor", loading: false });
    }
  },

  addPartnership: async (data) => {
    set({ loading: true, error: null });

    try {
      const newItem: SimpleItem = {
        id: Date.now().toString(),
        ...data,
        createdAt: new Date(),
      };

      const docRef = doc(db, "team", "team");

      await updateDoc(docRef, {
        partnerships: arrayUnion(newItem),
      });

      set((s) => ({
        partnerships: [newItem, ...s.partnerships],
        loading: false,
      }));
    } catch (err) {
      console.error(err);
      set({ error: "Failed to add partnership", loading: false });
    }
  },

  addClient: async (data) => {
    set({ loading: true, error: null });

    try {
      const newItem: SimpleItem = {
        id: Date.now().toString(),
        ...data,
        createdAt: new Date(),
      };

      const docRef = doc(db, "team", "team");

      await updateDoc(docRef, {
        clients: arrayUnion(newItem),
      });

      set((s) => ({
        clients: [newItem, ...s.clients],
        loading: false,
      }));
    } catch (err) {
      console.error(err);
      set({ error: "Failed to add client", loading: false });
    }
  },

  // ✅ DELETE
  deleteDirector: async (id) => {
    set({ loading: true });

    try {
      const docRef = doc(db, "team", "team");
      const item = get().directors.find((i) => i.id === id);

      if (!item) return set({ loading: false });

      await updateDoc(docRef, {
        directors: arrayRemove(item),
      });

      set((s) => ({
        directors: s.directors.filter((i) => i.id !== id),
        loading: false,
      }));
    } catch {
      set({ error: "Failed to delete director", loading: false });
    }
  },

  deleteAdvisor: async (id) => {
    set({ loading: true });

    try {
      const docRef = doc(db, "team", "team");
      const item = get().advisors.find((i) => i.id === id);

      if (!item) return set({ loading: false });

      await updateDoc(docRef, {
        advisors: arrayRemove(item),
      });

      set((s) => ({
        advisors: s.advisors.filter((i) => i.id !== id),
        loading: false,
      }));
    } catch {
      set({ error: "Failed to delete advisor", loading: false });
    }
  },

  deletePartnership: async (id) => {
    set({ loading: true });

    try {
      const docRef = doc(db, "team", "team");
      const item = get().partnerships.find((i) => i.id === id);

      if (!item) return set({ loading: false });

      await updateDoc(docRef, {
        partnerships: arrayRemove(item),
      });

      set((s) => ({
        partnerships: s.partnerships.filter((i) => i.id !== id),
        loading: false,
      }));
    } catch {
      set({ error: "Failed to delete partnership", loading: false });
    }
  },

  deleteClient: async (id) => {
    set({ loading: true });

    try {
      const docRef = doc(db, "team", "team");
      const item = get().clients.find((i) => i.id === id);

      if (!item) return set({ loading: false });

      await updateDoc(docRef, {
        clients: arrayRemove(item),
      });

      set((s) => ({
        clients: s.clients.filter((i) => i.id !== id),
        loading: false,
      }));
    } catch {
      set({ error: "Failed to delete client", loading: false });
    }
  },
}));

export default useTeamStore;