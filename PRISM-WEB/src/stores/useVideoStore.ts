import { create } from "zustand";
import {
  doc,
  getDoc,
  setDoc,
} from "firebase/firestore";
import { db } from "@/lib/firebase";

export interface Video {
  id: string;
  title: string;
  thumbnail: string;
  youtubeLink: string;
  createdAt: Date;
}

export type VideoInput = {
  title: string;
  thumbnail: string;
  youtubeLink: string;
};

interface VideoStore {
  videos: Video[];
  loading: boolean;
  error: string | null;

  fetchVideos: () => Promise<void>;
}

const useVideoStore = create<VideoStore>((set, get) => ({
  videos: [],
  loading: false,
  error: null,

  fetchVideos: async () => {
    if (get().videos.length > 0) return;

    set({ loading: true, error: null });

    try {
      const docRef = doc(db, "videos", "videos");
      const snap = await getDoc(docRef);

      if (snap.exists()) {
        set({
          videos: (snap.data().videos as Video[]) || [],
          loading: false,
        });
      } else {
        await setDoc(docRef, { videos: [] });
        set({ videos: [], loading: false });
      }
    } catch (err) {
      console.error(err);
      set({ error: "Failed to fetch videos", loading: false });
    }
  }
}));

export default useVideoStore;