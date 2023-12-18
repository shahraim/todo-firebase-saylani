import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import {
  getAuth,
  signOut,
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyCwnlx7qnFkD63vaVnY4OI9b3Tb1Z3clA8",
  authDomain: "fir-auth-5737b.firebaseapp.com",
  projectId: "fir-auth-5737b",
  storageBucket: "fir-auth-5737b.appspot.com",
  messagingSenderId: "444930612178",
  appId: "1:444930612178:web:a5c36a1bac7e4b4ba5060b",
  measurementId: "G-GZEDH7MG00",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
