import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCLRnk-4MMIdvRDxdGg6EqMXvyTuG0bC-c",
  authDomain: "gym-tracker-app-ddafd.firebaseapp.com",
  projectId: "gym-tracker-app-ddafd",
  storageBucket: "gym-tracker-app-ddafd.firebasestorage.app",
  messagingSenderId: "580155009476",
  appId: "1:580155009476:web:e3e6c5ebcfc4f37f44dc91"
};

const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;