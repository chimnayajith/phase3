// src/components/NavBar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMenorah, faDatabase, faChartBar, faCog, faSignOutAlt, faUserCog } from '@fortawesome/free-solid-svg-icons';
import '../styles/AdminPanelStyle.css';

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/home" className="logo">
            <img src="/images/admin.jpg" alt="Admin" />
            <span className="nav-item">Admin</span>
          </Link>
        </li>
        <li>
          <Link to="/dashboard">
            <FontAwesomeIcon icon={faMenorah} />
            <span className="nav-item">Dashboard</span>
          </Link>
        </li>
        <li>
          <Link to="/adminreport">
            <FontAwesomeIcon icon={faDatabase} />
            <span className="nav-item">Report</span>
          </Link>
        </li>
        <li>
          <Link to="/adminpanel">
            <FontAwesomeIcon icon={faChartBar} />
            <span className="nav-item">Attendance</span>
          </Link>
        </li>
        <li>
          <Link to="/adminsetting">
            <FontAwesomeIcon icon={faCog} />
            <span className="nav-item">Setting</span>
          </Link>
        </li>
        <li>
          <Link to="/login" className="logout">
            <FontAwesomeIcon icon={faSignOutAlt} />
            <span className="nav-item">Log out</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
