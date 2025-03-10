import React from "react";
import { useNavigate } from "react-router-dom";
import "./TermsOfService.css"; // ✅ Ensure this is correctly imported

function TermsOfService() {
  const navigate = useNavigate();

  return (
    <div className="terms-container">
      <div className="terms-box">
        <h1 className="terms-title">Terms of Service</h1>
        <p className="terms-date">Effective Date: March 10, 2025</p>

        <h2>1. Introduction</h2>
        <p>
          Welcome to <strong>Project Hercules</strong> ("we," "our," or "us"). These Terms of Service govern your use of our workout tracking application.
        </p>

        <h2>2. User Responsibilities</h2>
        <p>By using our service, you agree to:</p>
        <ul>
          <li>Provide accurate account information.</li>
          <li>Use the platform for personal workout tracking only.</li>
          <li>Refrain from sharing or abusing the platform in any way.</li>
        </ul>

        <h2>3. Data Collection</h2>
        <p>
          We collect user information in accordance with our{" "}
          <a href="/privacy-policy" className="terms-link">
            Privacy Policy
          </a>.
        </p>

        <h2>4. Account Termination</h2>
        <p>
          We reserve the right to terminate accounts that violate these terms, including but not limited to misuse or fraudulent activities.
        </p>

        <h2>5. Liability Disclaimer</h2>
        <p>
          The service is provided "as is" without any warranties. We are not responsible for inaccuracies, errors, or interruptions in service.
        </p>

        <h2>6. Changes to Terms</h2>
        <p>
          We may update these terms from time to time. Continued use of the platform constitutes acceptance of any modifications.
        </p>

        <button className="back-btn" onClick={() => navigate(-1)}>
          Go Back
        </button>
      </div>
    </div>
  );
}

export default TermsOfService;
