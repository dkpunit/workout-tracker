// src/pages/Login.js
import React, { useState } from "react";
import { auth, googleProvider, facebookProvider } from "../firebase";
import { signInWithPopup, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import googleLogo from "../assets/google-logo.png"; // Ensure this exists in /assets
import facebookLogo from "../assets/facebook-logo.png"; // Ensure this exists in /assets

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignUp, setIsSignUp] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  // Sign in with Google or Facebook
  const handleAuth = async (provider) => {
    try {
      await signInWithPopup(auth, provider);
      navigate("/dashboard");
    } catch (error) {
      console.error("Authentication Error:", error.message);
      setErrorMessage(error.message);
    }
  };

  // Email & Password Authentication
  const handleEmailAuth = async () => {
    if (!email || !password) return; // Prevent signing in if fields are empty
    try {
      if (isSignUp) {
        await createUserWithEmailAndPassword(auth, email, password);
      } else {
        await signInWithEmailAndPassword(auth, email, password);
      }
      navigate("/dashboard");
    } catch (error) {
      console.error("Email Authentication Error:", error.message);
      setErrorMessage(error.message);
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h1 className="login-title">{isSignUp ? "Create an Account" : "Sign in to your account"}</h1>

        {/* Social Login Buttons */}
        <button className="social-login-btn google-btn" onClick={() => handleAuth(googleProvider)}>
          <img src={googleLogo} alt="Google" className="social-logo" />
          Continue with Google
        </button>

        <button className="social-login-btn facebook-btn" onClick={() => handleAuth(facebookProvider)}>
          <img src={facebookLogo} alt="Facebook" className="social-logo" />
          Continue with Facebook
        </button>

        <hr className="divider" />

        {/* Display Error Messages */}
        {errorMessage && <p className="error-message">{errorMessage}</p>}

        {/* Email/Password Login */}
        <input 
          type="email" 
          placeholder="Email address" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
        />

        <input 
          type="password" 
          placeholder="Password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
        />

        {/* Sign-in Button (Disabled until email & password are entered) */}
        <button 
          className={`email-login-btn ${email && password ? "" : "disabled"}`} 
          onClick={handleEmailAuth} 
          disabled={!email || !password} // Disable when fields are empty
        >
          {isSignUp ? "Sign Up" : "Sign In"}
        </button>

        {/* Toggle Sign-Up / Sign-In */}
        <p className="toggle-text" onClick={() => setIsSignUp(!isSignUp)}>
          {isSignUp ? "Already have an account? Sign in" : "Don't have an account? Sign up"}
        </p>

        {/* ✅ Privacy Policy & Terms of Service Links */}
        <p className="privacy-text">
          By signing in, you agree to our <a href="/privacy-policy" className="privacy-link">Privacy Policy</a> and <a href="/terms-of-service" className="privacy-link">Terms of Service</a>.
        </p>
      </div>
    </div>
  );
}

export default Login;
