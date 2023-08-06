// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB-iuOD_21EUDf6gBAWRn2qXlr8dTdoy2Y",
  authDomain: "portfolio-e5cbc.firebaseapp.com",
  projectId: "portfolio-e5cbc",
  storageBucket: "portfolio-e5cbc.appspot.com",
  messagingSenderId: "842404027571",
  appId: "1:842404027571:web:893c9badce5c6cb9a4e4c6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)