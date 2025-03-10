import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { useEffect } from "react"; // Import useEffect
import { auth } from "./firebase";
import Welcome from "./pages/Welcome";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import WorkoutLogs from "./pages/WorkoutLogs";
import AboutTracker from "./pages/AboutTracker"; // Import new About Tracker page
import PrivacyPolicy from "./pages/PrivacyPolicy"; // ✅ Import Privacy Policy page
import Sidebar from "./components/Sidebar";

function App() {
  const [user] = useAuthState(auth);

  // Ensure tab title is updated
  useEffect(() => {
    document.title = "Project Hercules";
  }, []);

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
            <Route path="/about-tracker" element={<AboutTracker />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} /> {/* ✅ New route */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
