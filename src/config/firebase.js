
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getDatabase} from "firebase/database"
import {getAuth} from "firebase/auth"
 
const firebaseConfig = {
  apiKey: "AIzaSyCtVo_MuWUpIMaxglfB2QD_0v_ljT_22dQ",
  authDomain: "todolist-app-44636.firebaseapp.com",
  databaseURL: "https://todolist-app-44636-default-rtdb.firebaseio.com",
  projectId: "todolist-app-44636",
  storageBucket: "todolist-app-44636.appspot.com",
  messagingSenderId: "443363302804",
  appId: "1:443363302804:web:8413f26b8d769131730381",
  measurementId: "G-S32T4K0VYJ"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getDatabase(app);
export const auth = getAuth();