import React from 'react';
import './App.css';

function Dashboard() {
  return (
    <div className="dashboard-container">
      <h1>Dashboard</h1>

      <div className="card">
        <h2>Workout Summary</h2>
        <p>You haven't logged a workout yet.</p>
        <button>Log Workout</button>
      </div>

      <div className="card">
        <h2>Weekly Goals</h2>
        <p>Set your weekly fitness goals.</p>
        <button>Set Goals</button>
      </div>
    </div>
  );
}

export default Dashboard;
