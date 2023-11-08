import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAuhNLpbeusNyNUKXNWI0iM43cF1YoDtI0",
  authDomain: "teendencia-c3515.firebaseapp.com",
  projectId: "teendencia-c3515",
  storageBucket: "teendencia-c3515.appspot.com",
  messagingSenderId: "375011366941",
  appId: "1:375011366941:web:4136b370158b0dd7dc8ef4",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
