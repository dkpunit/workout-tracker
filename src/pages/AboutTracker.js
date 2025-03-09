// src/pages/AboutTracker.js
import React from "react";
import { useNavigate } from "react-router-dom";
import "./AboutTracker.css"; // Create this file for styling

function AboutTracker() {
  const navigate = useNavigate();

  return (
    <div className="about-container">
      <h1>About the Hercules Workout Tracker</h1>
      <p>
        The **Hercules Workout Tracker** is your ultimate fitness companion. Track your workouts, monitor progress, and stay consistent.
        Currently, it's **free to use** while we work on refining features. A **paid version** with premium features is coming soon!
      </p>
      <p>
        🚀 **Features (Work in Progress):**
        <ul>
          <li>📊 Log and track your workouts</li>
          <li>💪 Set goals and measure progress</li>
          <li>📅 View past workout history</li>
          <li>🔒 Future **premium version**: Personalized plans, AI insights, and advanced analytics</li>
        </ul>
      </p>
      <button className="back-btn" onClick={() => navigate("/")}>Go Back</button>
    </div>
  );
}

export default AboutTracker;
