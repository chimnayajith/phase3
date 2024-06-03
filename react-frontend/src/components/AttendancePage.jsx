// src/components/AttendancePage.jsx
import React from 'react';
import '../styles/attendancePage.css';

const AttendancePage = () => {
  const handleAttendance = () => {
    // Implement your attendance function here
    console.log("Attendance confirmed");
  };

  return (
    <main className="container" id="main">
      <form className="text-center">
        <div className="icon">
          <img src="/images/attendence img.png" alt="Attendance" />
        </div>
        <div className="form-floating">
          <input 
            type="text" 
            className="form-control-lg my-2 px-4 w-100" 
            id="attendanceUser" 
            placeholder="Username" 
          />
        </div>
        <input 
          type="button" 
          className="btn" 
          value="Confirm Attendance" 
          onClick={handleAttendance} 
        />
      </form>
    </main>
  );
};

export default AttendancePage;
