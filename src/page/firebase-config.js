import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBjciXDWdVrC6RfiTyOkLqSxJZInyay5Fo",
  authDomain: "employee-management-syst-c4d72.firebaseapp.com",
  projectId: "employee-management-syst-c4d72",
  storageBucket: "employee-management-syst-c4d72.appspot.com",
  messagingSenderId: "110709411932",
  appId: "1:110709411932:web:1a84d567ad63163bd79699",
  measurementId: "G-PZ84XZZKN8"
};
const app=initializeApp(firebaseConfig);
export const db = getFirestore(app);
