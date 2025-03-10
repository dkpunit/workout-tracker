// src/pages/Welcome.js
import React from "react";
import { useNavigate } from "react-router-dom";
import "./Welcome.css";

function Welcome() {
  const navigate = useNavigate();

  return (
    <div className="welcome-container">
      <div className="welcome-box">
        {/* Title & Subtitle */}
        <h1 className="welcome-title">HERCULES</h1>
        <p className="welcome-subtitle">Workout Tracker</p>

        {/* Welcome Message */}
        <p className="welcome-message">
          Welcome to the Hercules Workout Tracker! Log your workouts, track progress, and stay consistent.
        </p>

        {/* Sign-In Button */}
        <button className="sign-in-btn" onClick={() => navigate("/login")}>
          Sign In
        </button>

        {/* Learn More Link */}
        <a href="/about-tracker" className="learn-more-link">Learn More</a>

        {/* ✅ Version Number */}
        <p className="version-text">Version 1.0.0</p>
      </div>
    </div>
  );
}

export default Welcome;
