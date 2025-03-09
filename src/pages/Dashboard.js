// src/pages/Dashboard.js
import React, { useContext, useState } from "react";
import { auth, saveWorkout } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import "./Dashboard.css";

function Dashboard() {
  const [user] = useAuthState(auth);
  const [date, setDate] = useState(new Date().toISOString().split("T")[0]);
  const [exercises, setExercises] = useState([]);

  // Add a new exercise entry
  const addExercise = () => {
    setExercises([...exercises, { name: "", sets: [{ reps: "", weight: "", notes: "" }] }]);
  };

  // Handle Exercise Name Change
  const handleExerciseChange = (index, field, value) => {
    const updatedExercises = exercises.map((exercise, idx) =>
      idx === index ? { ...exercise, [field]: value } : exercise
    );
    setExercises(updatedExercises);
  };

  // Handle Set Data Change
  const handleSetChange = (exerciseIdx, setIdx, field, value) => {
    const updatedExercises = exercises.map((exercise, idx) => {
      if (idx === exerciseIdx) {
        const updatedSets = exercise.sets.map((set, sIdx) =>
          sIdx === setIdx ? { ...set, [field]: value } : set
        );
        return { ...exercise, sets: updatedSets };
      }
      return exercise;
    });
    setExercises(updatedExercises);
  };

  // Add a new set to an exercise
  const addSet = (exerciseIdx) => {
    const updatedExercises = exercises.map((exercise, idx) =>
      idx === exerciseIdx ? { ...exercise, sets: [...exercise.sets, { reps: "", weight: "", notes: "" }] } : exercise
    );
    setExercises(updatedExercises);
  };

  // Save workout to Firestore
  const handleCompleteWorkout = async () => {
    if (!user) {
      alert("You need to be logged in to save workouts.");
      return;
    }
    if (exercises.length === 0) {
      alert("Please add at least one exercise before completing the workout.");
      return;
    }

    try {
      await saveWorkout(user.uid, date, exercises);
      alert("Workout saved successfully!");
      setExercises([]); // Clear input fields after saving
    } catch (error) {
      console.error("Error saving workout:", error);
      alert("Failed to save workout. Please try again.");
    }
  };

  return (
    <div className="dashboard">
      <h1>Today's Workout</h1>
      <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />

      {exercises.map((exercise, idx) => (
        <div key={idx} className="exercise-entry">
          <input
            type="text"
            placeholder="Exercise Name"
            value={exercise.name}
            onChange={(e) => handleExerciseChange(idx, "name", e.target.value)}
          />
          {exercise.sets.map((set, sIdx) => (
            <div key={sIdx} className="set-entry">
              <input
                type="number"
                placeholder="Reps"
                value={set.reps}
                onChange={(e) => handleSetChange(idx, sIdx, "reps", e.target.value)}
              />
              <input
                type="number"
                placeholder="Weight (lbs)"
                value={set.weight}
                onChange={(e) => handleSetChange(idx, sIdx, "weight", e.target.value)}
              />
              <input
                type="text"
                placeholder="Notes"
                value={set.notes}
                onChange={(e) => handleSetChange(idx, sIdx, "notes", e.target.value)}
              />
            </div>
          ))}
          <button onClick={() => addSet(idx)}>Add Set</button>
        </div>
      ))}

      <button className="add-exercise-btn" onClick={addExercise}>Add Exercise</button>

      {exercises.length > 0 && (
        <button className="complete-workout-btn" onClick={handleCompleteWorkout}>
          Complete Workout
        </button>
      )}
    </div>
  );
}

export default Dashboard;
