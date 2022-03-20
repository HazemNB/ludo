// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCgpi7TvdFB54--hvLEAqX_tTK63f-2mLs",
  authDomain: "ludoscoin.firebaseapp.com",
  projectId: "ludoscoin",
  storageBucket: "ludoscoin.appspot.com",
  messagingSenderId: "182834059403",
  appId: "1:182834059403:web:20a3424ff05cba06595c8e",
  measurementId: "G-R433BMBME4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);