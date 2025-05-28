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

  const registerWithEmail = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const googleRegister = () => {
    return signInWithPopup(auth, googleProvider);
  };

  const githubRegister = () => {
    return signInWithPopup(auth, githubProvider);
  };

  const logIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

   const logout=()=>{
    return signOut(auth)
   }
  

  useEffect(() => {
   const unsubscribe= onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser)
      }
      return ()=> unsubscribe()
    });
  }, []);


  const authCollection = {
    registerWithEmail,
    googleRegister,
    logIn,
    githubRegister,
    user,
    setUser,
    logout
  };

  return (
    <AuthContext.Provider value={authCollection}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProviders };
