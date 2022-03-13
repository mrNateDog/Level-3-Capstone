// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDut7r2I4eV5cpjGYaTvwcQwv9OxhCzXVE",
  authDomain: "lvl3capstone.firebaseapp.com",
  projectId: "lvl3capstone",
  storageBucket: "lvl3capstone.appspot.com",
  messagingSenderId: "1878820562",
  appId: "1:1878820562:web:d7f6c2def5be9bf6308f0b",
};

// init Firebase
export const app = initializeApp(firebaseConfig);

//init services
export const db = getFirestore(app);
export const auth = getAuth();
