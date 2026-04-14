import { create } from "zustand";
import {
  collection,
  getDocs,
  deleteDoc,
  updateDoc,
  doc,
  query,
  orderBy,
  limit,
  startAfter,
  QueryDocumentSnapshot,
  DocumentData,
  where,
} from "firebase/firestore";
import { db } from "@/lib/firebase";

export interface Inquiry {
  id: string;
  name: string;
  phone: string;
  email: string;
  message: string;
  status: "pending" | "resolved" | "rejected";
  createdAt: Date;
}

export type StatusFilter = "all" | "pending" | "resolved" | "rejected";

const PAGE_SIZE = 10;

interface InquiryStore {
  inquiries: Inquiry[];
  loading: boolean;
  loadingMore: boolean;
  error: string | null;
  filter: StatusFilter;
  hasMore: boolean;
  lastDoc: QueryDocumentSnapshot<DocumentData> | null;

  setFilter: (filter: StatusFilter) => void;
  fetchInquiries: () => Promise<void>;
  loadMore: () => Promise<void>;
  deleteInquiry: (id: string) => Promise<void>;
  updateStatus: (id: string, status: Inquiry["status"]) => Promise<void>;
}

const useInquiryStore = create<InquiryStore>((set, get) => ({
  inquiries: [],
  loading: false,
  loadingMore: false,
  error: null,
  filter: "all",
  hasMore: false,
  lastDoc: null,

  setFilter: (filter) => {
    set({ filter, inquiries: [], lastDoc: null, hasMore: false });
    get().fetchInquiries();
  },

  fetchInquiries: async () => {
    set({ loading: true, error: null, inquiries: [], lastDoc: null });
    try {
      const { filter } = get();
      const constraints: any[] = [orderBy("createdAt", "desc"), limit(PAGE_SIZE)];
      if (filter !== "all") constraints.unshift(where("status", "==", filter));

      const q = query(collection(db, "inquiries"), ...constraints);
      const snap = await getDocs(q);

      const inquiries: Inquiry[] = snap.docs.map((d) => ({
        id: d.id,
        ...(d.data() as Omit<Inquiry, "id" | "createdAt">),
        createdAt: d.data().createdAt?.toDate?.() || new Date(),
      }));

      set({
        inquiries,
        loading: false,
        lastDoc: snap.docs[snap.docs.length - 1] ?? null,
        hasMore: snap.docs.length === PAGE_SIZE,
      });
    } catch(e) {
   
      set({ error: "Failed to fetch inquiries", loading: false });
    }
  },

  loadMore: async () => {
    const { lastDoc, filter, inquiries, loadingMore } = get();
    if (!lastDoc || loadingMore) return;

    set({ loadingMore: true });
    try {
      const constraints: any[] = [
        orderBy("createdAt", "desc"),
        startAfter(lastDoc),
        limit(PAGE_SIZE),
      ];
      if (filter !== "all") constraints.unshift(where("status", "==", filter));

      const q = query(collection(db, "inquiries"), ...constraints);
      const snap = await getDocs(q);

      const newInquiries: Inquiry[] = snap.docs.map((d) => ({
        id: d.id,
        ...(d.data() as Omit<Inquiry, "id" | "createdAt">),
        createdAt: d.data().createdAt?.toDate?.() || new Date(),
      }));

      set({
        inquiries: [...inquiries, ...newInquiries],
        loadingMore: false,
        lastDoc: snap.docs[snap.docs.length - 1] ?? lastDoc,
        hasMore: snap.docs.length === PAGE_SIZE,
      });
    } catch {
      set({ error: "Failed to load more inquiries", loadingMore: false });
    }
  },

  deleteInquiry: async (id) => {
    try {
      await deleteDoc(doc(db, "inquiries", id));
      set((state) => ({
        inquiries: state.inquiries.filter((i) => i.id !== id),
      }));
    } catch {
      set({ error: "Failed to delete inquiry" });
    }
  },

  updateStatus: async (id, status) => {
    try {
      await updateDoc(doc(db, "inquiries", id), { status });
      set((state) => ({
        inquiries: state.inquiries.map((i) =>
          i.id === id ? { ...i, status } : i
        ),
      }));
    } catch {
      set({ error: "Failed to update status" });
    }
  },
}));

export default useInquiryStore;