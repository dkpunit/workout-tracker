import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './routes/Dashboard';
import Logs from './routes/Logs';

function App() {
  return (
    <Router>
      <div className="container">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/logs" element={<Logs />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
