// src/pages/Login.js
import React, { useState } from "react";
import { auth, googleProvider, facebookProvider } from "../firebase";
import { signInWithPopup, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignUp, setIsSignUp] = useState(false);

  const handleAuth = async (provider) => {
    try {
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.error(error.message);
    }
  };

  const handleEmailAuth = async () => {
    try {
      if (isSignUp) {
        await createUserWithEmailAndPassword(auth, email, password);
      } else {
        await signInWithEmailAndPassword(auth, email, password);
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div className="login-container">
      <h1>Sign in to your account</h1>
      <button className="social-login-btn" onClick={() => handleAuth(googleProvider)}>
        Continue with Google
      </button>
      <button className="social-login-btn" onClick={() => handleAuth(facebookProvider)}>
        Continue with Facebook
      </button>
      <hr />
      <input type="email" placeholder="Email address" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button className="email-login-btn" onClick={handleEmailAuth}>
        {isSignUp ? "Sign Up" : "Sign In"}
      </button>
      <p onClick={() => setIsSignUp(!isSignUp)}>
        {isSignUp ? "Already have an account? Sign in" : "Don't have an account? Sign up"}
      </p>
    </div>
  );
}

export default Login;
