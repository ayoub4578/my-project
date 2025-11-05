// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-d84ca.firebaseapp.com",
  projectId: "mern-d84ca",
  storageBucket: "mern-d84ca.firebasestorage.app",
  messagingSenderId: "385687409263",
  appId: "1:385687409263:web:a4c520d7056ff880d9f39a",
  measurementId: "G-VZHH3QVZ1B"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);