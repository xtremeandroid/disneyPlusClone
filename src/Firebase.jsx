import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.VITE_APP_APIKEY,
  authDomain: process.env.VITE_APP_AUTH,
  projectId: process.env.VITE_APP_PROJID,
  storageBucket: process.env.VITE_APP_STORAGE,
  messagingSenderId: process.env.VITE_APP_SENDERID,
  appId: process.env.VITE_APP_APPID,
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth();
const provider = new GoogleAuthProvider();
const storage = getStorage();

export { auth, provider, storage };
export default db;
