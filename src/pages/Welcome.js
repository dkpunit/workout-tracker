// src/pages/Welcome.js
import React from "react";
import { useNavigate } from "react-router-dom";
import "./Welcome.css";

function Welcome() {
  const navigate = useNavigate();

  return (
    <div className="welcome-container">
      <div className="welcome-box">
        <h1>Workout Tracker</h1>
        <p>Welcome!</p>
        <button className="sign-in-btn" onClick={() => navigate("/login")}>
          Sign In
        </button>
        <a href="/learn-more">Learn More</a>
      </div>
    </div>
  );
}

export default Welcome;
