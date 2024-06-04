// src/components/Login.js
import React, { useState } from 'react';
import "../styles/Login.css"
import Background from "../assets/background.jpg" 
import bgSvg from "../assets/booking attend.svg"
import Avatar from "../assets/avatar.svg"
const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [usernameError, setUsernameError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    fetch('http://127.0.0.1:3000/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username: username,
          password: password
        })
      })
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          return response.json().then(data => {
            throw new Error(data.message || 'An error occurred during login');
          });
        }
      })
      .then(data => {
        console.log(data);
        // Handle successful login, 
      })
      .catch(error => {
        console.error(error);
        alert(error.message);
      });
    return (
        <div className="container">
            <img className="wave" src={Background} alt="Background" />
            <div className="img">
                <img src={bgSvg} alt="Booking Attend" />
            </div>
            <div className="login-content">
                <form onSubmit={handleSubmit}>
                    <img src={Avatar} alt="Avatar" />
                    <h2 className="title">Welcome</h2>
                    <div className="input-div one">
                        <div className="i">
                            <i className="fas fa-user"></i>
                        </div>
                        <div className="div">
                            <h5>Username</h5>
                            <input
                                type="text"
                                id="username"
                                className="input"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                required
                            />
                            <br />
                            <span id="userspan">{usernameError}</span>
                        </div>
                    </div>
                    <div className="input-div pass">
                        <div className="i">
                            <i className="fas fa-lock"></i>
                        </div>
                        <div className="div">
                            <h5>Password</h5>
                            <input
                                type="password"
                                id="passwd"
                                className="input"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                            <br />
                            <span id="passwordspan">{passwordError}</span>
                        </div>
                    </div>
                    <a href="#">Forgot Password?</a>
                    <input type="submit" className="btn" value="Login" id="loginsubmit" />
                </form>
            </div>
        </div>
    );
};

export default Login;
