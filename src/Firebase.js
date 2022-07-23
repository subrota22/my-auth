// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBs91wQWakC2ZXeNfOTpt2BdAzeStymNiU",
  authDomain: "user-auth-54a82.firebaseapp.com",
  projectId: "user-auth-54a82",
  storageBucket: "user-auth-54a82.appspot.com",
  messagingSenderId: "879415786365",
  appId: "1:879415786365:web:b58fc81ca763b641c96a14",
  measurementId: "G-601RSZ5MJ1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);