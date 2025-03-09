// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, FacebookAuthProvider } from "firebase/auth";
import { getFirestore, collection, addDoc, getDocs, query, where } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAMGeHQ5dyRmYPrP8N2Ddh4cDRnrmHMKtE",
  authDomain: "workout-tracker-13140.firebaseapp.com",
  projectId: "workout-tracker-13140",
  storageBucket: "workout-tracker-13140.firebasestorage.app",
  messagingSenderId: "800068857292",
  appId: "1:800068857292:web:4d1706a95d7cc527b78169"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();

// Firestore Workout Collection Reference
const workoutsCollection = collection(db, "workouts");

// Function to Save Workouts to Firestore
const saveWorkout = async (userId, date, exercises) => {
  try {
    await addDoc(workoutsCollection, {
      userId,
      date,
      exercises,
      createdAt: new Date()
    });
  } catch (error) {
    console.error("Error saving workout:", error);
  }
};

// Function to Fetch Workouts for a User
const getUserWorkouts = async (userId) => {
  try {
    const q = query(workoutsCollection, where("userId", "==", userId));
    const snapshot = await getDocs(q);
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    console.error("Error fetching workouts:", error);
    return [];
  }
};

export { auth, googleProvider, facebookProvider, db, saveWorkout, getUserWorkouts };
