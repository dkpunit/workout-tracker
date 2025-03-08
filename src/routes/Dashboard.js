// src/routes/Dashboard.js
import React, { useContext, useState } from 'react';
import ExerciseCard from '../components/ExerciseCard';
import { WorkoutContext } from '../context/WorkoutContext';
import './Dashboard.css';

function Dashboard() {
  const { addWorkout } = useContext(WorkoutContext);
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
  const [exercises, setExercises] = useState([]);

  const addExercise = () => {
    setExercises([...exercises, { name: '', sets: [{ reps: '', weight: '', notes: '' }] }]);
  };

  const handleExerciseChange = (index, field, value) => {
    const updatedExercises = exercises.map((exercise, idx) => 
      idx === index ? { ...exercise, [field]: value } : exercise
    );
    setExercises(updatedExercises);
  };

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

  const addSet = (exerciseIdx) => {
    const updatedExercises = exercises.map((exercise, idx) => 
      idx === exerciseIdx ? { ...exercise, sets: [...exercise.sets, { reps: '', weight: '', notes: '' }] } : exercise
    );
    setExercises(updatedExercises);
  };

  const handleCompleteWorkout = () => {
    addWorkout({ date, exercises });
    alert('Workout added to logs!');
    setExercises([]);
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
            onChange={(e) => handleExerciseChange(idx, 'name', e.target.value)}
          />
          {exercise.sets.map((set, sIdx) => (
            <div key={sIdx} className="set-entry">
              <input
                type="number"
                placeholder="Reps"
                value={set.reps}
                onChange={(e) => handleSetChange(idx, sIdx, 'reps', e.target.value)}
              />
              <input
                type="number"
                placeholder="Weight"
                value={set.weight}
                onChange={(e) => handleSetChange(idx, sIdx, 'weight', e.target.value)}
              />
              <input
                type="text"
                placeholder="Notes"
                value={set.notes}
                onChange={(e) => handleSetChange(idx, sIdx, 'notes', e.target.value)}
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
