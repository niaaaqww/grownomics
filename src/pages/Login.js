import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "./Login.css";
import logo from "./grow.jpg";

const Login = ({ setIsLoggedIn }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validasi jika email atau password kosong
    if (!email || !password) {
      alert("Email dan password tidak boleh kosong.");
      return;
    }

    // Ambil data user dari localStorage
    const storedUserData = JSON.parse(localStorage.getItem("userData"));

    // Validasi email dan password
    if (storedUserData && storedUserData.email === email && storedUserData.password === password) {
      setIsLoggedIn(true);
      alert("Login berhasil! Mengarahkan ke halaman Home.");
      navigate("/home"); // Navigasi ke halaman Home
    } else {
      alert("Email atau password salah. Silakan coba lagi.");
    }
  };

  return (
    <div className="login-container">
      <div className="login-header">
        <h2>Login</h2>
        <img src={logo} alt="Logo" className="login-logo" />
      </div>

      <form onSubmit={handleSubmit}>
        <div className="input-container floating-label">
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder=" " // Tambahkan placeholder kosong
            required
          />
          <label htmlFor="email">Email</label>
        </div>
        <div className="input-container floating-label">
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder=" " // Tambahkan placeholder kosong
            required
          />
          <label htmlFor="password">Password</label>
        </div>
        <button type="submit" className="login-button">Login</button>
      </form>

      <div className="register-container">
        <p>
          Don't have an account? <Link to="/register">Register here</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;