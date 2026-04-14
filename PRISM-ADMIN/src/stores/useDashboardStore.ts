import { create } from "zustand";
import { doc, getDoc, collection, getCountFromServer } from "firebase/firestore";
import { db } from "@/lib/firebase";

interface DashboardStore {
  counts: {
    news: number;
    directors: number;
    advisors: number;
    partnerships: number;
    clients: number;
    inquiries: number;
  };
  loading: boolean;
  error: string | null;
  fetchCounts: () => Promise<void>;
}

const useDashboardStore = create<DashboardStore>((set) => ({
  counts: {
    news: 0,
    directors: 0,
    advisors: 0,
    partnerships: 0,
    clients: 0,
    inquiries: 0,
  },
  loading: false,
  error: null,

  fetchCounts: async () => {
    set({ loading: true, error: null });

    try {
      const teamRef = doc(db, "team", "team");

      const [teamSnap, newsSnap, inquiriesSnap] = await Promise.all([
        getDoc(teamRef),
        getCountFromServer(collection(db, "news")),        // ✅ collection
        getCountFromServer(collection(db, "inquiries")),   // ✅ collection
      ]);

      const teamData = teamSnap.data() || {};

      set({
        counts: {
          news: newsSnap.data().count, 
          directors: (teamData.directors || []).length,
          advisors: (teamData.advisors || []).length,
          partnerships: (teamData.partnerships || []).length,
          clients: (teamData.clients || []).length,
          inquiries: inquiriesSnap.data().count,
        },
        loading: false,
      });
    } catch (err) {
      console.error(err);
      set({ error: "Failed to fetch dashboard data", loading: false });
    }
  },
}));

export default useDashboardStore;