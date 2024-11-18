import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import LogsPage from "src/pages/LogsPages.js";
import GoalsPage from "src/pages/GoalsPages.js";

function App() {
  return (
    <Router>
      <div className="app-container">
        <div className="sidebar">
          <h2>Workout Tracker</h2>
          <ul>
            <li>
              <Link to="/logs">Logs</Link>
            </li>
            <li>
              <Link to="/logs">Workout Log</Link>
            </li>
            <li className="settings-link">
              <Link to="/goals">Weekly Goals</Link>
            </li>
          </ul>
          <div className="sidebar-footer">
            <Link to="/settings">
              <span className="settings-icon">⚙️</span> Settings
            </Link>
          </div>
        </div>
        <div className="main-content">
          <Routes>
            <Route path="/logs" element={<LogsPage />} />
            <Route path="/goals" element={<GoalsPage />} />
            <Route path="/settings" element={<div>Settings Page</div>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
