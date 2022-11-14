import { initializeApp } from "firebase/app";
import { collection, getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDLBWosyaOig8DT55-Ii7ElvjgFb1F5vLk",
  authDomain: "react-45060-monti-4a36e.firebaseapp.com",
  projectId: "react-45060-monti-4a36e",
  storageBucket: "react-45060-monti-4a36e.appspot.com",
  messagingSenderId: "1018916240087",
  appId: "1:1018916240087:web:27606c0cbef46928550e92"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const collectionProd = collection (db, 'productos');