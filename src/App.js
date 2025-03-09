import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase";
import Welcome from "./pages/Welcome";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import WorkoutLogs from "./pages/WorkoutLogs";
import Sidebar from "./components/Sidebar";

function App() {
  const [user] = useAuthState(auth);

  return (
    <Router>
      <div className="app-container">
        {user && <Sidebar />}
        <div className="main-content">
          <Routes>
            <Route path="/" element={!user ? <Welcome /> : <Navigate to="/dashboard" />} />
            <Route path="/login" element={!user ? <Login /> : <Navigate to="/dashboard" />} />
            <Route path="/dashboard" element={user ? <Dashboard /> : <Navigate to="/login" />} />
            <Route path="/logs" element={user ? <WorkoutLogs /> : <Navigate to="/login" />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
