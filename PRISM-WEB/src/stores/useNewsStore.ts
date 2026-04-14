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



interface NewsStore {
  news: NewsArticle[];
  loading: boolean;
  error: string | null;
  fetchNews: () => Promise<void>;
  
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
}));

export default useNewsStore;
