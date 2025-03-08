import React, { useState } from 'react';
import './ExerciseCard.css';

function ExerciseCard({ exercise }) {
  const [sets, setSets] = useState(exercise.sets);

  const handleInputChange = (index, field, value) => {
    const updatedSets = sets.map((set, idx) => 
      idx === index ? { ...set, [field]: value } : set
    );
    setSets(updatedSets);
  };

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
          {sets.map((set, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>
                <input
                  type="number"
                  value={set.reps}
                  onChange={(e) => handleInputChange(index, 'reps', e.target.value)}
                />
              </td>
              <td>
                <input
                  type="number"
                  value={set.weight}
                  onChange={(e) => handleInputChange(index, 'weight', e.target.value)}
                />
              </td>
              <td>
                <input
                  type="text"
                  value={set.notes}
                  onChange={(e) => handleInputChange(index, 'notes', e.target.value)}
                  placeholder="Add notes..."
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ExerciseCard;
