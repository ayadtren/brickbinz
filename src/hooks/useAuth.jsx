import { useState, useEffect } from "react";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import firebaseApp from "../firebase/firebase";

const useAuth = () => {
  const [authUser, setAuthUser] = useState(null);

  useEffect(() => {
    const auth = getAuth(firebaseApp);
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(null);
      }
    });

    return unsubscribe;
  }, []);

  const fSignInWithEmailAndPassword = (email, password) => {
    const auth = getAuth(firebaseApp);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const fCreateUserWithEmailAndPassword = (email, password) => {
    const auth = getAuth(firebaseApp);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const fSignOut = () => {
    const auth = getAuth(firebaseApp);
    return signOut(auth);
  };

  return {
    authUser,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    signOut,
  };
};

export default useAuth;
