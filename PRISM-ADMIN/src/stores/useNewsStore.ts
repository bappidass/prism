import { create } from "zustand";
import {
  collection, getDocs, addDoc, deleteDoc, updateDoc, doc, query, orderBy, serverTimestamp,
} from "firebase/firestore";
import { db } from "@/lib/firebase";

export interface NewsArticle {
  id: string;
  img: string;
  date: string;
  title: string;
  author: string;
  published: string;
  body: string[];
  gallery: string[];
  createdAt: Date;
}

export type NewsInput = {
  img: string;
  date: string;
  title: string;
  author: string;
  published: string;
  body: string[];
  gallery: string[];
};

interface NewsStore {
  news: NewsArticle[];
  loading: boolean;
  error: string | null;
  fetchNews: () => Promise<void>;
  createNews: (data: NewsInput) => Promise<void>;
  deleteNews: (id: string) => Promise<void>;
  updateNews: (id: string, data: Partial<NewsInput>) => Promise<void>;
}

const useNewsStore = create<NewsStore>((set, get) => ({
  news: [],
  loading: false,
  error: null,

  fetchNews: async () => {
    if (get().news.length > 0) return;
    set({ loading: true, error: null });
    try {
      const q = query(collection(db, "news"), orderBy("createdAt", "desc"));
      const snap = await getDocs(q);
      const news: NewsArticle[] = snap.docs.map((d) => ({
        id: d.id,
        ...(d.data() as Omit<NewsArticle, "id" | "createdAt">),
        createdAt: d.data().createdAt?.toDate?.() || new Date(),
      }));
      set({ news, loading: false });
    } catch {
      set({ error: "Failed to fetch news", loading: false });
    }
  },

  createNews: async (data) => {
    set({ loading: true, error: null });
    try {
      const docRef = await addDoc(collection(db, "news"), { ...data, createdAt: serverTimestamp() });
      set((state) => ({
        news: [{ id: docRef.id, ...data, createdAt: new Date() }, ...state.news],
        loading: false,
      }));
    } catch {
      set({ error: "Failed to create news", loading: false });
    }
  },

  deleteNews: async (id) => {
    set({ loading: true });
    try {
      await deleteDoc(doc(db, "news", id));
      set((state) => ({ news: state.news.filter((n) => n.id !== id), loading: false }));
    } catch {
      set({ error: "Failed to delete news", loading: false });
    }
  },

  updateNews: async (id, data) => {
    set({ loading: true });
    try {
      await updateDoc(doc(db, "news", id), data);
      set((state) => ({
        news: state.news.map((n) => (n.id === id ? { ...n, ...data } : n)),
        loading: false,
      }));
    } catch {
      set({ error: "Failed to update news", loading: false });
    }
  },
}));

export default useNewsStore;
