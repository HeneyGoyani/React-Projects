// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBJL14YNi32CHuQfmR5FczFljAvEl1haQU",
  authDomain: "blinkit-api-11-5a8fc.firebaseapp.com",
  projectId: "blinkit-api-11-5a8fc",
  storageBucket: "blinkit-api-11-5a8fc.firebasestorage.app",
  messagingSenderId: "237415737370",
  appId: "1:237415737370:web:c77242cadeb45e12d209a3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);