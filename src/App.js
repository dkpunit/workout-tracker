import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './routes/Dashboard';
import Logs from './routes/Logs';
import GoalsPage from './pages/GoalsPage';
import Sidebar from './components/Sidebar';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Sidebar />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/logs" element={<Logs />} />
            <Route path="/goals" element={<GoalsPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
