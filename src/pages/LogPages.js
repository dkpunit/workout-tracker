import React from "react";

const LogsPage = () => {
  const dummyData = Array.from({ length: 12 }, (_, i) => ({
    week: i + 1,
    workout: `Workout details for Week ${i + 1}`,
  }));

  return (
    <div>
      <h2>Logs</h2>
      <ul>
        {dummyData.map((log) => (
          <li key={log.week}>
            <strong>Week {log.week}:</strong> {log.workout}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LogsPage;
