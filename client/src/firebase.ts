import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDuaZCAvtiBjQuijZ-se28jV3hTSujrFgk",
  authDomain: "dao-governance.firebaseapp.com",
  projectId: "dao-governance",
  storageBucket: "dao-governance.firebasestorage.app",
  messagingSenderId: "207107453959",
  appId: "1:207107453959:web:eb48f2b5f1d2eb7321a6a2",
  measurementId: "G-9ZS1R743SR"
};

const app = initializeApp(firebaseConfig);
const analytics = typeof window !== 'undefined' ? getAnalytics(app) : null;
const auth = getAuth(app);
const db = getFirestore(app);

export { app, analytics, auth, db };
