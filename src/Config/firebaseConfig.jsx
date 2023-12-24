
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA_HKhXn0txT6qfMIzkvPPBjRpY6DvNzh8",
  authDomain: "car-heaven-350ee.firebaseapp.com",
  projectId: "car-heaven-350ee",
  storageBucket: "car-heaven-350ee.appspot.com",
  messagingSenderId: "153932566138",
  appId: "1:153932566138:web:44421ce54d1d8cea03f5c3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export  const auth = getAuth(app);
