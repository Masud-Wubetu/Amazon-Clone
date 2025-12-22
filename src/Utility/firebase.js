// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBMCn58vwhLXphj14gmBoBqGY36FW4NNKg",
  authDomain: "clone-92bf6.firebaseapp.com",
  projectId: "clone-92bf6",
  storageBucket: "clone-92bf6.firebasestorage.app",
  messagingSenderId: "124192861650",
  appId: "1:124192861650:web:04c792d1b171d76139ac0b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);