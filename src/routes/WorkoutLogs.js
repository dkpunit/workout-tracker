import React, { useState } from 'react';
import './WorkoutLogs.css';

const WorkoutLogs = () => {
  const [workoutData, setWorkoutData] = useState([
    { date: '2024-11-15', exercise: 'Squat', sets: 4, reps: 10, weight: 100 },
    { date: '2024-11-14', exercise: 'Deadlift', sets: 3, reps: 8, weight: 120 },
  ]);

  const [newWorkout, setNewWorkout] = useState({
    date: '',
    exercise: '',
    sets: '',
    reps: '',
    weight: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewWorkout({ ...newWorkout, [name]: value });
  };

  const handleAddWorkout = () => {
    setWorkoutData([...workoutData, newWorkout]);
    setNewWorkout({ date: '', exercise: '', sets: '', reps: '', weight: '' });
  };

  return (
    <div>
      <h1>Workout Logs</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleAddWorkout();
        }}
      >
        <input
          type="date"
          name="date"
          value={newWorkout.date}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="exercise"
          placeholder="Exercise"
          value={newWorkout.exercise}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="sets"
          placeholder="Sets"
          value={newWorkout.sets}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="reps"
          placeholder="Reps"
          value={newWorkout.reps}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="weight"
          placeholder="Weight (kg)"
          value={newWorkout.weight}
          onChange={handleChange}
          required
        />
        <button type="submit">Add Workout</button>
      </form>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Exercise</th>
            <th>Sets</th>
            <th>Reps</th>
            <th>Weight (kg)</th>
          </tr>
        </thead>
        <tbody>
          {workoutData.map((log, index) => (
            <tr key={index}>
              <td>{log.date}</td>
              <td>{log.exercise}</td>
              <td>{log.sets}</td>
              <td>{log.reps}</td>
              <td>{log.weight}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default WorkoutLogs;
