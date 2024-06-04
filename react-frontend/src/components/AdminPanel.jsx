// src/components/Attendance.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/AdminPanelStyle.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faUserCog } from '@fortawesome/free-solid-svg-icons';
const Attendance = () => {
  return (
    <section className="main">
      <div className="main-top">
        <h1>Attendance</h1>
        <FontAwesomeIcon icon={faUserCog} />
      </div>
      <section className="attendance">
        <div className="attendance-list">
          <h1>Attendance List</h1>
          <table className="table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Attendance</th>
                <th>Batch</th>
                <th>View</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>23469</td>
                <td>John Doe</td>
                <td>69%</td>
                <td>CSE</td>
                <td>
                  <Link to="/profile">
                    <button>View</button>
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </section>
  );
};

export default Attendance;
