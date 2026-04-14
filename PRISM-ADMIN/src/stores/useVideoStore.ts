import { create } from "zustand";
import {
  doc,
  getDoc,
  updateDoc,
  setDoc,
  arrayUnion,
  arrayRemove,
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
  addVideo: (input: VideoInput) => Promise<void>;
  deleteVideo: (id: string) => Promise<void>;
}

const useVideoStore = create<VideoStore>((set, get) => ({
  videos: [],
  loading: false,
  error: null,

  // ✅ FETCH
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
  },

  // ✅ ADD
  addVideo: async (input) => {
    set({ loading: true, error: null });

    try {
      const newVideo: Video = {
        id: Date.now().toString(),
        ...input,
        createdAt: new Date(),
      };

      const docRef = doc(db, "videos", "videos");

      await updateDoc(docRef, {
        videos: arrayUnion(newVideo),
      });

      set((state) => ({
        videos: [...state.videos, newVideo],
        loading: false,
      }));
    } catch (err) {
      console.error(err);
      set({ error: "Failed to add video", loading: false });
    }
  },

  // ✅ DELETE
  deleteVideo: async (id) => {
    set({ loading: true, error: null });

    try {
      const docRef = doc(db, "videos", "videos");
      const toDelete = get().videos.find((v) => v.id === id);

      if (!toDelete) {
        set({ loading: false });
        return;
      }

      await updateDoc(docRef, {
        videos: arrayRemove(toDelete),
      });

      set((state) => ({
        videos: state.videos.filter((v) => v.id !== id),
        loading: false,
      }));
    } catch (err) {
      console.error(err);
      set({ error: "Failed to delete video", loading: false });
    }
  },
}));

export default useVideoStore;