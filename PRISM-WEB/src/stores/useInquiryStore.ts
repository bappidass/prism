import { create } from "zustand";
import { collection, addDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";

export interface Inquiry {
  name: string;
  phone: string;
  email: string;
  message: string;
  status?: "pending" | "resolved" | "rejected";
  createdAt?: Date;
}

interface InquiryStore {
  loading: boolean;
  error: string | null;
  createInquiry: (data: Inquiry) => Promise<void>;
}

const useInquiryStore = create<InquiryStore>((set) => ({
  loading: false,
  error: null,

  createInquiry: async (data) => {
    set({ loading: true, error: null });
    try {
      await addDoc(collection(db, "inquiries"), {
        ...data,
        status: data.status || "pending",
        createdAt: new Date(),
      });

      set({ loading: false });
    } catch (error) {
      set({ error: "Failed to create inquiry", loading: false });
    }
  },
}));

export default useInquiryStore;