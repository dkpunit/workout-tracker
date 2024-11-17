import React from "react";
import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Dashboard</h1>
      <p>Welcome to the dashboard!</p>

      {/* Link to navigate to the logs page */}
      <Link to="/logs">
        <button style={styles.button}>Go to Logs</button>
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
    backgroundColor: "#007BFF",
    color: "#FFF",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "1rem",
  },
};

export default Dashboard;
