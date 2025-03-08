// src/routes/Dashboard.js
import React, { useContext } from 'react';
import ExerciseCard from '../components/ExerciseCard';
import { WorkoutContext } from '../context/WorkoutContext';
import './Dashboard.css';

function Dashboard() {
  const { workouts } = useContext(WorkoutContext);

  // Example data structure for today's workout (you can fetch or context-manage this)
  const todaysWorkout = workouts[0] || {
    date: '2025-03-08',
    exercises: [
      {
        name: 'Bench Press',
        sets: [
          { reps: 10, weight: 135, notes: '' },
          { reps: 8, weight: 155, notes: '' },
          { reps: 6, weight: 175, notes: '' }
        ]
      },
      {
        name: 'Squats',
        sets: [
          { reps: 10, weight: 185, notes: '' },
          { reps: 8, weight: 205, notes: '' },
          { reps: 6, weight: 225, notes: '' }
        ]
      }
    ]
  };

  return (
    <div className="dashboard">
      <h1>Today's Workout - {todaysWorkout.date}</h1>
      {todaysWorkout.exercises.map((exercise, idx) => (
        <ExerciseCard key={idx} exercise={exercise} />
      ))}
    </div>
  );
}

export default Dashboard;
