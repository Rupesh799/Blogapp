// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "blog-4e51b.firebaseapp.com",
  projectId: "blog-4e51b",
  storageBucket: "blog-4e51b.appspot.com",
  messagingSenderId: "995762297518",
  appId: "1:995762297518:web:6e45ca408d79c77463eb3f"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);