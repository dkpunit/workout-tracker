import React from "react";
import { Link } from "react-router-dom";

function Logs() {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Logs</h1>
      <p>Your workout logs will appear here.</p>
      {/* Button to navigate back to the Dashboard */}
      <Link to="/">
        <button style={styles.button}>Back to Dashboard</button>
      </Link>
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    padding: "20px",
  },
  heading: {
    color: "#333",
    fontSize: "2rem",
    marginBottom: "1rem",
  },
  button: {
    padding: "10px 20px",
    backgroundColor: "#0087FF",
    color: "#FFF",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "1rem",
  },
};

export default Logs;
