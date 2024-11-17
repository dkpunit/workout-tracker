import React from 'react';

function Logs() {
  const placeholderData = [
    { date: '2024-11-17', workout: 'Chest and Triceps', duration: '1h 15m', notes: 'Focused on incline bench and cable flies.' },
    { date: '2024-11-16', workout: 'Back and Biceps', duration: '1h 30m', notes: 'Heavy deadlifts and pull-ups.' },
    { date: '2024-11-15', workout: 'Leg Day', duration: '1h 20m', notes: 'Squats and lunges felt strong today.' },
    { date: '2024-11-14', workout: 'Shoulders and Abs', duration: '1h', notes: 'Focused on overhead press and hanging leg raises.' },
    { date: '2024-11-13', workout: 'Cardio', duration: '45m', notes: 'Ran 5k on the treadmill.' },
  ];

  const styles = {
    container: {
      padding: '20px',
      textAlign: 'center',
    },
    table: {
      width: '100%',
      borderCollapse: 'collapse',
      marginTop: '20px',
    },
    th: {
      backgroundColor: '#007BFF',
      color: '#FFF',
      padding: '10px',
      border: '1px solid #DDD',
    },
    td: {
      padding: '10px',
      border: '1px solid #DDD',
    },
  };

  return (
    <div style={styles.container}>
      <h1>Workout Logs</h1>
      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.th}>Date</th>
            <th style={styles.th}>Workout</th>
            <th style={styles.th}>Duration</th>
            <th style={styles.th}>Notes</th>
          </tr>
        </thead>
        <tbody>
          {placeholderData.map((log, index) => (
            <tr key={index}>
              <td style={styles.td}>{log.date}</td>
              <td style={styles.td}>{log.workout}</td>
              <td style={styles.td}>{log.duration}</td>
              <td style={styles.td}>{log.notes}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Logs;
