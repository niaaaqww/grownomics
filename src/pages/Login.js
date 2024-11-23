import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Mengimpor useNavigate untuk navigasi
import { Link } from "react-router-dom"; // Import Link for navigation to registration
import "./Login.css"; // Gaya CSS untuk login (bisa disesuaikan)
import logo from "./grow.jpg"; // Logo

const Login = ({ setIsLoggedIn }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // Hook navigate untuk berpindah halaman

  const handleSubmit = (e) => {
    e.preventDefault(); // Mencegah form untuk reload halaman

    console.log("Username:", username);
    console.log("Password:", password);

    // Simulasi login berhasil tanpa memeriksa username dan password
    setIsLoggedIn(true);
    navigate("/home"); // Arahkan ke halaman Home setelah login berhasil
  };

  return (
    <div className="login-container">
      <div className="login-header">
        <h2>Login</h2>
        <img src={logo} alt="Logo" className="login-logo" />
      </div>
    
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
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

      {/* Link to Registration page if user does not have an account */}
      <div className="register-container">
        <p>Don't have an account? <Link to="/register">Register here</Link></p>
      </div>
    </div>
  );
};

export default Login;
