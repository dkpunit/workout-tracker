import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from './routes/Dashboard';
import Logs from "./Logs";

function App() {
  return (
    <Router>
      <Routes>
        {/* Default route for the dashboard */}
        <Route path="/" element={<Dashboard />} />

        {/* Route for the logs page */}
        <Route path="/logs" element={<Logs />} />
      </Routes>
    </Router>
  );
}

export default App;
