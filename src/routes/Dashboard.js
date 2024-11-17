import React from 'react';
import { Link } from 'react-router-dom';

function Dashboard() {
  return (
    <div style={styles.container}>
      <div style={styles.sidebar}>
        <h2>Workout Tracker</h2>
        <nav>
          <Link to="/" style={styles.navItem}>
            Dashboard
          </Link>
          <Link to="/logs" style={styles.navItem}>
            Logs
          </Link>
          <Link to="/settings" style={styles.navItem}>
            Settings
          </Link>
        </nav>
      </div>
      <div style={styles.mainContent}>
        <h1>Dashboard</h1>
        <div style={styles.card}>
          <h2>Workout Summary</h2>
          <p>You haven’t logged a workout yet.</p>
          <button
            style={styles.button}
            onMouseEnter={(e) => (e.target.style.backgroundColor = styles.buttonHover.backgroundColor)}
            onMouseLeave={(e) => (e.target.style.backgroundColor = styles.button.backgroundColor)}
          >
            Log Workout
          </button>
        </div>
        <div style={styles.card}>
          <h2>Weekly Goals</h2>
          <p>Set your weekly fitness goals.</p>
          <button
            style={styles.button}
            onMouseEnter={(e) => (e.target.style.backgroundColor = styles.buttonHover.backgroundColor)}
            onMouseLeave={(e) => (e.target.style.backgroundColor = styles.button.backgroundColor)}
          >
            Set Goals
          </button>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    height: '100vh',
    backgroundColor: '#1C1C1C', // Dark grey
    color: '#FFFFFF', // White text
    fontFamily: "'Arial', sans-serif",
    margin: 0, // Remove margin
    padding: 0, // Remove padding
  },
  sidebar: {
    width: '20%',
    backgroundColor: '#333333', // Darker grey for sidebar
    padding: '20px',
    boxShadow: '2px 0 5px rgba(0, 0, 0, 0.5)',
  },
  mainContent: {
    width: '80%',
    padding: '20px',
  },
  navItem: {
    color: '#FFFFFF',
    textDecoration: 'none',
    margin: '10px 0',
    display: 'block',
  },
  card: {
    backgroundColor: '#2E2E2E',
    padding: '15px',
    borderRadius: '8px',
    margin: '10px 0',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.3)',
  },
  button: {
    backgroundColor: '#FF4C4C', // Red button
    color: '#FFFFFF',
    border: 'none',
    padding: '10px 15px',
    borderRadius: '5px',
    cursor: 'pointer',
    marginTop: '10px',
  },
  buttonHover: {
    backgroundColor: '#FF6666',
  },
};

export default Dashboard;
