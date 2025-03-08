import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

function Sidebar() {
  return (
    <nav className="sidebar">
      <ul>
        <li><Link to="/">Dashboard</Link></li>
        <li><Link to="/logs">Workout Logs</Link></li>
        <li><Link to="/goals">Goals</Link></li>
      </ul>
    </nav>
  );
}

export default Sidebar;
