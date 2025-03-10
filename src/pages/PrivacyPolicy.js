// src/pages/PrivacyPolicy.js
import React from "react";
import { useNavigate } from "react-router-dom";
// import "./PrivacyPolicy.css";

function PrivacyPolicy() {
  const navigate = useNavigate();

  return (
    <div className="privacy-container">
      <div className="privacy-box">
        <h1 className="privacy-title">Privacy Policy</h1>
        <p className="privacy-date">Effective Date: [Insert Date]</p>

        <h2>1. Introduction</h2>
        <p>Welcome to <strong>Project Hercules</strong> ("we," "our," or "us"). This privacy policy explains how we collect, use, and protect your personal information when you use our workout tracking application.</p>

        <h2>2. Information We Collect</h2>
        <ul>
          <li><strong>Account Information:</strong> When you sign up using Google, Facebook, or email, we collect your name, email address, and profile picture.</li>
          <li><strong>Workout Data:</strong> Information about your exercises, sets, reps, and progress.</li>
          <li><strong>Device & Log Data:</strong> Includes IP address, browser type, and usage statistics.</li>
        </ul>

        <h2>3. How We Use Your Information</h2>
        <p>We use your data to provide, improve, and personalize our services, authenticate users, and communicate updates.</p>

        <h2>4. Data Security</h2>
        <p>We implement strong security measures, including Firebase Authentication, encrypted data storage, and restricted access.</p>

        <h2>5. Your Rights</h2>
        <p>You can request to access, update, or delete your account data anytime.</p>

        <h2>6. Contact Us</h2>
        <p>If you have any questions, contact us at: <br/>
        📧 **Email:** [Your Email] <br/>
        🌍 **Website:** [Your Website URL]
        </p>

        <button className="back-btn" onClick={() => navigate(-1)}>Go Back</button>
      </div>
    </div>
  );
}

export default PrivacyPolicy;
