// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyD9Gf4K7Ps_7--DbxoHhAKQ_0-ClOxR0yY",
  authDomain: "social-app-9ae74.firebaseapp.com",
  projectId: "social-app-9ae74",
  storageBucket: "social-app-9ae74.appspot.com",
  messagingSenderId: "364631065282",
  appId: "1:364631065282:web:477474e109e7891b31b15b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const google = new GoogleAuthProvider();

export const dataBase = getFirestore(app);