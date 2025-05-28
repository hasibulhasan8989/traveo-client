import {
  createUserWithEmailAndPassword,
  GithubAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";

import { createContext, useEffect, useState } from "react";
import { auth } from "../Firebase/firebase.config";

const AuthContext = createContext(null);

const AuthProviders = ({ children }) => {
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const [user,setUser]=useState(null)
  const [loading,setLoading]=useState(true)

  const registerWithEmail = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const googleRegister = () => {
    setLoading(true)
    return signInWithPopup(auth, googleProvider);
  };

  const githubRegister = () => {
    setLoading(true)
    return signInWithPopup(auth, githubProvider);
  };

  const logIn = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password);
  };

   const logout=()=>{
    setLoading(true)
    return signOut(auth)
   }
  



  useEffect(() => {
  const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
    setLoading(false);
  });

 
  return () => unsubscribe();
}, []);



  const authCollection = {
    registerWithEmail,
    googleRegister,
    logIn,
    githubRegister,
    user,
    setUser,
    logout,
    loading
  };

  return (
    <AuthContext.Provider value={authCollection}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProviders };
