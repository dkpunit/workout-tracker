// Example App.js route configuration
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './routes/Dashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />
        {/* your other routes here */}
      </Routes>
    </Router>
  );
}

export default App;
