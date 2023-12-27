// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import {getAuth} from 'firebase/auth';


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCM5hKgQHSDXq7e0hA3xbyYJCS4vg2cchQ",
  authDomain: "e-commerce-final-project-32959.firebaseapp.com",
  projectId: "e-commerce-final-project-32959",
  storageBucket: "e-commerce-final-project-32959.appspot.com",
  messagingSenderId: "464686146620",
  appId: "1:464686146620:web:ef8c9a4d8da3ff634f8f39",
  measurementId: "G-7434VR3NE9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export {fireDB, auth}