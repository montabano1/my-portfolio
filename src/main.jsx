import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyBoyReWueRMTIIbijTbsRBrqbb5t2uaa3I",
  authDomain: "my-portfolio-4ace3.firebaseapp.com",
  projectId: "my-portfolio-4ace3",
  storageBucket: "my-portfolio-4ace3.firebasestorage.app",
  messagingSenderId: "474958339655",
  appId: "1:474958339655:web:2a2c56a69ea4d682eddb62",
  measurementId: "G-QX3J7BJKWZ"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
