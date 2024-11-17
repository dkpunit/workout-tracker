import React from "react";
import { Link } from "react-router-dom";

function Logs() {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Logs</h1>
      <p>Here are your logs:</p>
      <ul style={styles.list}>
        <li>Log entry 1</li>
        <li>Log entry 2</li>
        <li>Log entry 3</li>
      </ul>

      {/* Button to navigate back to the dashboard */}
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
  list: {
    textAlign: "left",
    margin: "10px auto",
    maxWidth: "400px",
    listStyle: "disc",
    paddingLeft: "20px",
  },
  button: {
    padding: "10px 20px",
    backgroundColor: "#28A745",
    color: "#FFF",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "1rem",
  },
};

export default Logs;
