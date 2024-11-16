import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './routes/Dashboard';
import WorkoutLogs from './routes/WorkoutLogs';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/logs" element={<WorkoutLogs />} />
      </Routes>
    </Router>
  );
};

export default App;
