import { getAuth, signInWithCredential, GoogleAuthProvider, signOut } from "firebase/auth";
import * as Google from "expo-auth-session/providers/google";
import * as SecureStore from "expo-secure-store";

const auth = getAuth();

export const signInWithGoogle = async () => {
  try {
    console.log("Initiate google signin")

    const [request, response, promptAsync] = Google.useIdTokenAuthRequest({
      clientId: "210636612196-0ogbfe580ehllnipcoqbn1mc4rh9s03e.apps.googleusercontent.com",
    });

    if (response?.type === "success") {
      const credential = GoogleAuthProvider.credential(response.params.id_token);
      await signInWithCredential(auth, credential);
      await SecureStore.setItemAsync("user", JSON.stringify(auth.currentUser));
      return auth.currentUser;
    }
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error("Google Sign-In Error:", error.message);
    } else {
      console.error("Google Sign-In Error:", error);
    }
    return null;
  }
};

export const signOutGoogle = async () => {
  try {
    await signOut(auth);
    await SecureStore.deleteItemAsync("user");
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error("Google Sign-Out Error:", error.message);
    } else {
      console.error("Google Sign-Out Error:", error);
    }
  }
};
