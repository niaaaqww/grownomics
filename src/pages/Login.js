import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom"; // Import Link for navigation
import "./Login.css";
import logo from "./grow.jpg";

const Login = ({ setIsLoggedIn }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Retrieve user data from localStorage
    const storedUserData = JSON.parse(localStorage.getItem("userData"));

    // Validate email and password
    if (storedUserData && storedUserData.email === email && storedUserData.password === password) {
      setIsLoggedIn(true);
      alert("Login berhasil! Mengarahkan ke halaman Home.");
      navigate("/home"); // Navigate to Home page
    } else {
      alert("Email atau password Anda salah.");
    }
  };

  return (
    <div className="login-container">
      <div className="login-header">
        <h2>Login</h2>
        <img src={logo} alt="Logo" className="login-logo" />
      </div>

      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="input-container">
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="login-button">Login</button>
      </form>

      {/* Add link to registration */}
      <div className="register-container">
        <p>
          Don't have an account? <Link to="/register">Register here</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
