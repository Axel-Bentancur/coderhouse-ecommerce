// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCzMfhqAATypvVKGokQukLyn_r8TK_M2lQ",
  authDomain: "coderhouse-ecommerce-a79b2.firebaseapp.com",
  projectId: "coderhouse-ecommerce-a79b2",
  storageBucket: "coderhouse-ecommerce-a79b2.appspot.com",
  messagingSenderId: "19174496232",
  appId: "1:19174496232:web:fd30ce8edca629da9cb65d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;