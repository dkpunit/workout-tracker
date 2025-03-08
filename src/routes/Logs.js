import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { WorkoutContext } from '../context/WorkoutContext';
import './WorkoutLogs.css';

function Logs() {
  const { workouts } = useContext(WorkoutContext);

  return (
    <div className="workout-logs-container">
      <Link to="/">
        <button className="back-to-dashboard-btn">Back to Dashboard</button>
      </Link>
      <h2>Workout Logs</h2>
      <table className="workout-logs-table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Workout</th>
            <th>Duration</th>
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>
          {workouts.length === 0 ? (
            <tr>
              <td colSpan="4" style={{ textAlign: 'center' }}>
                No workout logs available yet.
              </td>
            </tr>
          ) : (
            workouts.map((log, idx) => (
              <tr key={idx}>
                <td>{log.date}</td>
                <td>{log.workoutName || 'Workout'}</td>
                <td>{log.duration || '-'}</td>
                <td>{log.notes || '-'}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Logs;
