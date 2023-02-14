import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCLV1wmEZdFONtEp8zaSOOZxifAA-WQjpo",
    authDomain: "n-digtal.firebaseapp.com",
    projectId: "n-digtal",
    storageBucket: "n-digtal.appspot.com",
    messagingSenderId: "197278313453",
    appId: "1:197278313453:web:e4eab7a96db94cc4f795e4",
    measurementId: "G-XPKSDJJRXL"
};

const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);