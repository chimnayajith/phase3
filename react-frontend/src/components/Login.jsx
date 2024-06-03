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

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!username) {
            setUsernameError('Username is required');
        } else {
            setUsernameError('');
        }

        if (!password) {
            setPasswordError('Password is required');
        } else {
            setPasswordError('');
        }

        if (username && password) {
            console.log('Form submitted', { username, password });
            // Proceed with form submission (e.g., API call)
        }
    };

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
