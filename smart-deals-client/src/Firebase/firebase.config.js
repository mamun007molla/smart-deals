// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDeP0kKcQJrVoh2SlrkWLPJO93JAEFFudM",
  authDomain: "smart-deals-a3e6c.firebaseapp.com",
  projectId: "smart-deals-a3e6c",
  storageBucket: "smart-deals-a3e6c.firebasestorage.app",
  messagingSenderId: "45433064368",
  appId: "1:45433064368:web:85991c386868b45998e475"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);