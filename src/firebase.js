import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDXGDWH5fxujsJCflNAPyIRBieSXERMVNI",
  authDomain: "smart-82775.firebaseapp.com",
  projectId: "smart-82775",
  storageBucket: "smart-82775.appspot.com",
  messagingSenderId: "303706293370",
  appId: "1:303706293370:web:a642efea6d384b566827c3",
  measurementId: "G-QZ5K7111PP",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { db };
