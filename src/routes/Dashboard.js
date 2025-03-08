// src/routes/Dashboard.js
import React, { useContext, useState } from 'react';
import ExerciseCard from '../components/ExerciseCard';
import { WorkoutContext } from '../context/WorkoutContext';
import './Dashboard.css';

function Dashboard() {
  const { addWorkout } = useContext(WorkoutContext);
  const [todaysWorkout, setTodaysWorkout] = useState({
    date: new Date().toISOString().split('T')[0],
    exercises: [] // No exercises initially
  });

  const handleAddWorkout = () => {
    addWorkout(todaysWorkout);
    alert('Workout added to logs!');
  };

  return (
    <div className="dashboard">
      <h1>Today's Workout - {todaysWorkout.date}</h1>
      {todaysWorkout.exercises.length === 0 ? (
        <p>No exercises logged for today yet.</p>
      ) : (
        todaysWorkout.exercises.map((exercise, idx) => (
          <ExerciseCard key={idx} exercise={exercise} />
        ))
      )}
    </div>
  );
}

export default Dashboard;