// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, FacebookAuthProvider } from "firebase/auth";
import { getFirestore, collection, addDoc, getDocs, query, where } from "firebase/firestore";

// ✅ Debugging - Ensure environment variables are loaded correctly
console.log("Firebase API Key:", process.env.REACT_APP_FIREBASE_API_KEY ? "Loaded" : "NOT LOADED");
console.log("Firebase Auth Domain:", process.env.REACT_APP_FIREBASE_AUTH_DOMAIN ? "Loaded" : "NOT LOADED");

// ✅ Secure Firebase Configuration using Environment Variables
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY, 
  authDomain: "davepunit.com", // ✅ Ensure this matches your custom domain
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID
};

// ✅ Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// ✅ Configure Google & Facebook Authentication Providers
const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();

// ✅ Enforce pop-up authentication (Fixes redirect issues)
googleProvider.setCustomParameters({ prompt: "select_account" });
facebookProvider.setCustomParameters({ display: "popup" });

// ✅ Firestore Collection Reference
const workoutsCollection = collection(db, "workouts");

// ✅ Function to Save Workouts to Firestore
const saveWorkout = async (userId, date, exercises) => {
  try {
    await addDoc(workoutsCollection, {
      userId,
      date,
      exercises,
      createdAt: new Date(),
    });
    console.log("✅ Workout saved successfully!");
  } catch (error) {
    console.error("❌ Error saving workout:", error);
  }
};

// ✅ Function to Fetch Workouts for a User
const getUserWorkouts = async (userId) => {
  try {
    const q = query(workoutsCollection, where("userId", "==", userId));
    const snapshot = await getDocs(q);
    return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    console.error("❌ Error fetching workouts:", error);
    return [];
  }
};

// ✅ Export Firebase Functions
export { auth, googleProvider, facebookProvider, db, saveWorkout, getUserWorkouts };
