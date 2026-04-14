import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCQD-LkEyFcPpGjOwcRL9MTG1O22zVAvlQ",
  authDomain: "prism-a55fa.firebaseapp.com",
  projectId: "prism-a55fa",
  storageBucket: "prism-a55fa.firebasestorage.app",
  messagingSenderId: "180771970720",
  appId: "1:180771970720:web:43d98a61ebcf9bed4ab3c5",
  measurementId: "G-S6K2GYMV4F",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export default app;
