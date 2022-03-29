// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore}  from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA4z4lRG4Kwz4Qt9nN9k-j6kuMOrFCGRTM",
  authDomain: "ga-app-3ec33.firebaseapp.com",
  projectId: "ga-app-3ec33",
  storageBucket: "ga-app-3ec33.appspot.com",
  messagingSenderId: "157475783345",
  appId: "1:157475783345:web:ecd9800a78b169cb085890"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export {app, db};