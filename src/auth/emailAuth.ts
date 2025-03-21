import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../firebaseConfig";

// ✅ Sign up with email and password
export const signUpWithEmail = async (email: string, password: string) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    return userCredential.user;
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error("Sign up error:", error.message);
    } else {
      console.error("Sign up error:", error);
    }
    return null;
  }
};

// ✅ Sign in with email and password
export const signInWithEmail = async (email: string, password: string) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return userCredential.user;
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error("Sign in error:", error.message);
    } else {
      console.error("Sign in error:", error);
    }
    return null;
  }
};

// ✅ Sign out function
export const logoutEmail = async () => {
  try {
    await signOut(auth);
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error("Logout error:", error.message);
    } else {
      console.error("Logout error:", error);
    }
  }
};
