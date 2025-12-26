// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBp31TK4O9KzBluHPHo0LjHWX6vSJPoFv8",
  authDomain: "netfixgpt-c6b20.firebaseapp.com",
  projectId: "netfixgpt-c6b20",
  storageBucket: "netfixgpt-c6b20.firebasestorage.app",
  messagingSenderId: "343738080910",
  appId: "1:343738080910:web:3901308344c5971a4773df",
  measurementId: "G-00ZQYRXK8K",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
