// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBHeToVeNaikiGKLl9oDFA7xtzmJF5OKq0",
    authDomain: "tour-voucher.firebaseapp.com",
    databaseURL: "https://tour-voucher-default-rtdb.firebaseio.com",
    projectId: "tour-voucher",
    storageBucket: "tour-voucher.firebasestorage.app",
    messagingSenderId: "794126644925",
    appId: "1:794126644925:web:26ca45a55297c76934a9d4",
    measurementId: "G-HTLKY7S0SZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;