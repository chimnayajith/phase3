import React, { useState } from 'react';
import "../styles/Login.css"; // We'll use the same styles as the Login component for consistency
import Background from "../assets/background.jpg";
import bgSvg from "../assets/booking attend.svg";
import Avatar from "../assets/avatar.svg";

const Register = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const [usernameError, setUsernameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [confirmPasswordError, setConfirmPasswordError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!username) {
            setUsernameError('Username is required');
        } else {
            setUsernameError('');
        }

        if (!email) {
            setEmailError('Email is required');
        } else {
            setEmailError('');
        }

        if (!password) {
            setPasswordError('Password is required');
        } else {
            setPasswordError('');
        }

        if (!confirmPassword) {
            setConfirmPasswordError('Confirm Password is required');
        } else if (password !== confirmPassword) {
            setConfirmPasswordError('Passwords do not match');
        } else {
            setConfirmPasswordError('');
        }

        if (username && email && password && password === confirmPassword) {
            console.log('Form submitted', { username, email, password, confirmPassword });
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
                    <h2 className="title">Register</h2>
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
                    <div className="input-div one">
                        <div className="i">
                            <i className="fas fa-envelope"></i>
                        </div>
                        <div className="div">
                            <h5>Email</h5>
                            <input
                                type="email"
                                id="email"
                                className="input"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                            <br />
                            <span id="emailspan">{emailError}</span>
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
                    <div className="input-div pass">
                        <div className="i">
                            <i className="fas fa-lock"></i>
                        </div>
                        <div className="div">
                            <h5>Confirm Password</h5>
                            <input
                                type="password"
                                id="confirmPassword"
                                className="input"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                required
                            />
                            <br />
                            <span id="confirmPasswordspan">{confirmPasswordError}</span>
                        </div>
                    </div>
                    <input type="submit" className="btn" value="Register" id="registersubmit" />
                </form>
            </div>
        </div>
    );
};

export default Register;
