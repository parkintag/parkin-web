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

    const faqList = ['collapse_faq_1', 'collapse_faq_2', 'collapse_faq_3', 'collapse_faq_4', 'collapse_faq_5', 'collapse_faq_6', 'collapse_faq_7']
    faqList.forEach(function (value, i) {
        const selector = "#" + value
        const faq = document.body.querySelector(selector);
        faq.addEventListener("shown.bs.collapse", () => {
            const event = 'clicked_show_faq_' + (i +1)
            logEvent(analytics, event);
        });
    });

    const policy = document.body.querySelector('#policy');
    policy.addEventListener("click", () => {
        logEvent(analytics, 'clicked_show_policy');
    });

    const terms = document.body.querySelector('#terms');
    terms.addEventListener("click", () => {
        logEvent(analytics, 'clicked_show_terms');
    });

    const sendEmail = document.body.querySelector('#sendEmail');
    sendEmail.addEventListener("click", () => {
        logEvent(analytics, 'clicked_send_email');
    });


    // logEvent(analytics, 'index_page_opened');
});
