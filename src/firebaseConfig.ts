import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCLRnk-4MMIdvRDxdGg6EqMXvyTuG0bC-c",
  authDomain: "gym-tracker-app-ddafd.firebaseapp.com",
  projectId: "gym-tracker-app-ddafd",
  storageBucket: "gym-tracker-app-ddafd.firebasestorage.app",
  messagingSenderId: "580155009476",
  appId: "1:580155009476:web:e3e6c5ebcfc4f37f44dc91"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const firebaseApp = initializeApp(firebaseConfig);
export const auth = getAuth(firebaseApp);

export default firebaseApp;