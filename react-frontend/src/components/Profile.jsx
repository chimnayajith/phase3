// src/Profile.jsx
import React from "react";
import "../styles/profile.css";

function Profile() {
  return (
    <div>
      <div className="topnav" id="myTopnav">
        <a href="/">Home</a>
        <a href="/profile" className="active">
          Profile
        </a>
        <a href="/login">Log Out</a>
      </div>

      <section className="container">
        <div className="row">
          <div className="my_div card_1">
            <img id="user-img" src="/images/user_employee.png" alt="User" />
            <h2 id="name">Welcome to your profile page</h2>
            <div id="username_"></div>
          </div>

          <div className="my_div card_2">
            <div id="username_2">Username: johnDoe</div>
            <div id="email">Email: johndoe@example.com</div>
            <div id="sem">Semester: 2</div>
            <div id="batch">Batch: CSE</div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Profile;
