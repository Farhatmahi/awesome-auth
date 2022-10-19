import React, { createContext, useEffect, useState } from "react";
import app from "../Firebase/Firebase.init";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";

export const authContext = createContext(); //created a new context and exported it to use it in other components

const auth = getAuth(app);

//it will create user, take the auth from this component and email password from register
const UserContext = ({ children }) => {
  const [user, setUser] = useState({ displayName: "Sana" }); //the user will change

  
  const signInWithGoogle = () => {
    const googleProvider = new GoogleAuthProvider()
    return signInWithPopup(auth, googleProvider)
  };

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    return signOut(auth); //return na korle onno component pabena
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (loggedInUser) => {
      setUser(loggedInUser);
      console.log("auth state changed", loggedInUser);
    });
    return () => unsubscribe();
  }, []);

  const authInfo = { user, createUser, signIn, logOut, signInWithGoogle }; //ei destruction er karone onno component e useContext use kora jacche.

  const authValue = {};
  return (
    <authContext.Provider value={authInfo}>{children}</authContext.Provider>
  );
};

export default UserContext;
