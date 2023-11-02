// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDQT3XXZkaTj6WtYhAuw4N_M9dX1v2ujE4",
  authDomain: "fir-course-5679b.firebaseapp.com",
  projectId: "fir-course-5679b",
  storageBucket: "fir-course-5679b.appspot.com",
  messagingSenderId: "206247756953",
  appId: "1:206247756953:web:71badbfb75a16b1760a408",
  measurementId: "G-EQJDE8M9Q5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

export const db = getFirestore(app);
export const storage = getStorage(app);