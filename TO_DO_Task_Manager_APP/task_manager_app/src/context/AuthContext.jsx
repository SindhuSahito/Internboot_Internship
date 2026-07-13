import {
  createContext,
  useEffect,
  useState,
} from "react";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
  onAuthStateChanged,
} from "firebase/auth";

import { auth, googleProvider } from "../firebase/firebase";

export const AuthContext = createContext();

export function AuthProvider({ children }) {

  const [currentUser, setCurrentUser] = useState(null);

  const [loading, setLoading] = useState(true);

  // Register

  async function register(name, email, password) {

    const result = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    await updateProfile(result.user, {
      displayName: name,
    });

    return result;
  }

  // Login

  function login(email, password) {
    return signInWithEmailAndPassword(
      auth,
      email,
      password
    );
  }

  // Google Login

  function googleLogin() {
    return signInWithPopup(
      auth,
      googleProvider
    );
  }

  // Logout

  function logout() {
    return signOut(auth);
  }

  useEffect(() => {

    const unsubscribe = onAuthStateChanged(
      auth,
      (user) => {
        setCurrentUser(user);
        setLoading(false);
      }
    );

    return unsubscribe;

  }, []);

  const value = {

    currentUser,

    register,

    login,

    googleLogin,

    logout,

  };

  return (

    <AuthContext.Provider value={value}>

      {!loading && children}

    </AuthContext.Provider>

  );

}