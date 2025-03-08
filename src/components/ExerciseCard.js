
import React from 'react';
import './ExerciseCard.css';

function ExerciseCard({ exercise }) {
  return (
    <div className="exercise-card">
      <h3>{exercise.name}</h3>
      <table>
        <thead>
          <tr>
            <th>Set</th>
            <th>Reps</th>
            <th>Weight (lbs)</th>
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>
          {exercise.sets.map((set, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{set.reps}</td>
              <td>{set.weight}</td>
              <td>{set.notes}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ExerciseCard;
