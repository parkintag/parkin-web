// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDo2JPDgTJzhG7CgI85-axV0VU16Q1YVV4",
  authDomain: "parkin-414214.firebaseapp.com",
  projectId: "parkin-414214",
  storageBucket: "parkin-414214.appspot.com",
  messagingSenderId: "550761066079",
  appId: "1:550761066079:web:d01faf40b1e295948e75ea",
  measurementId: "G-3SFQ0YNDYV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
