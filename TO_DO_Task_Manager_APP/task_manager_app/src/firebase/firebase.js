import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDh-vqALEHaU4vV78rO7IOtdTLFnz3we8k",
  authDomain: "task-manager-app-bf291.firebaseapp.com",
  projectId: "task-manager-app-bf291",
  storageBucket: "task-manager-app-bf291.firebasestorage.app",
  messagingSenderId: "1043603679741",
  appId: "1:1043603679741:web:2a5778013871a6651e9194",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const googleProvider = new GoogleAuthProvider();

export default app;