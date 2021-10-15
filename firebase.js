// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCPFl62Tgor15V-qM39Hizhuuo8Ym7lS2w",
  authDomain: "insta-clone-8e549.firebaseapp.com",
  projectId: "insta-clone-8e549",
  storageBucket: "insta-clone-8e549.appspot.com",
  messagingSenderId: "991544495282",
  appId: "1:991544495282:web:3e44358d27ddeccfe38dab",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };
