// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Replace with your Firebase config
const firebaseConfig = {
    apiKey: "AIzaSyCZ3pgZnMfw_ob_8dWR0huFgIPOkooTNao",
    authDomain: "library-management-syste-effb6.firebaseapp.com",
    projectId: "library-management-syste-effb6",
    storageBucket: "library-management-syste-effb6.firebasestorage.app",
    messagingSenderId: "194554428811",
    appId: "1:194554428811:web:222e39e094d3b08b5fc38e",
    measurementId: "G-8SJZ13JECL"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
