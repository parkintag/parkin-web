// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
import { getAnalytics, logEvent } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-analytics.js";

document.addEventListener('DOMContentLoaded', async function () {

    const firebaseConfig = {
        apiKey: "AIzaSyDo2JPDgTJzhG7CgI85-axV0VU16Q1YVV4",
        authDomain: "parkin-414214.firebaseapp.com",
        projectId: "parkin-414214",
        storageBucket: "parkin-414214.appspot.com",
        messagingSenderId: "550761066079",
        appId: "1:550761066079:web:d01faf40b1e295948e75ea",
        measurementId: "G-3SFQ0YNDYV"
    };
    
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);
    logEvent(analytics, 'index_page_opened');
});
