// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCr2lpgmUXVcEE-ela5UxCteu9CKd7vXlk",
  authDomain: "tokonyadia-staging.firebaseapp.com",
  projectId: "tokonyadia-staging",
  storageBucket: "tokonyadia-staging.firebasestorage.app",
  messagingSenderId: "588376080625",
  appId: "1:588376080625:web:b061d9b665efe4e0702950",
  measurementId: "G-4XN6LKQVSF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);