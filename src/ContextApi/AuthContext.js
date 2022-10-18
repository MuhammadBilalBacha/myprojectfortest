import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../firebase";

const AuthContext = createContext();

export const StateAuth = ({ children }) => {
  const [user, setUser] = useState({});
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const logout = () => {
    return signOut(auth);
  };
  const SignIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentuser) => {
      console.log(currentuser);
      setUser(currentuser);
    });
    return () => {
      unSubscribe();
    };
  });

  return (
    <AuthContext.Provider value={{ createUser, user, logout, SignIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
