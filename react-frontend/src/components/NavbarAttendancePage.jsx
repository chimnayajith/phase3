// src/components/NavBar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/attendancePage.css';

const NavBar = () => {
  return (
    <div className="topnav" id="myTopnav">
      <Link to="/home">Home</Link>
      <Link to="/attendance" className="active">Attendance</Link>
      <Link to="/dashboard">Dashboard Admin</Link>
    </div>
  );
};

export default NavBar;
