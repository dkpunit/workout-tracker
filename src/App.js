import React from 'react';
import './App.css';
import Dashboard from './routes/Dashboard';

function App() {
  return (
    <div className="app-container">
      <div className="sidebar">
        <h2>Workout Tracker</h2>
        <ul>
          <li>Dashboard</li>
          <li>Logs</li>
          <li>Settings</li>
        </ul>
      </div>
      <div className="content-wrapper">
        <div className="main-content">
          <Dashboard />
        </div>
      </div>
    </div>
  );
}

export default App;
