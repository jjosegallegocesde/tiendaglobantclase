// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.6/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBNJk1N9E7E3Kcpzht--0VtacPbLZiIXZQ",
  authDomain: "tiendaglobantokydoky.firebaseapp.com",
  projectId: "tiendaglobantokydoky",
  storageBucket: "tiendaglobantokydoky.appspot.com",
  messagingSenderId: "915289563542",
  appId: "1:915289563542:web:5125645a7023540c747db7",
  measurementId: "G-V8R6MHCRYM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);