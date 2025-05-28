
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";




const firebaseConfig = {
  apiKey: "AIzaSyC-hpLDXqFvWYRGMGHOrmjFWjLqzvm3lOs",
  authDomain: "traveo-client.firebaseapp.com",
  projectId: "traveo-client",
  storageBucket: "traveo-client.firebasestorage.app",
  messagingSenderId: "683951597736",
  appId: "1:683951597736:web:19cb9d35b25826c4b83a9d",

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export  const auth = getAuth(app);

