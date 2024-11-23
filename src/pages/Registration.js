import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import { Link } from "react-router-dom"; // Import Link for navigation to login page
import "./Registration.css"; // Assuming your CSS styles are here
import logo from './grow.jpg'; // Logo image

function Registration() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState(""); // To show error messages if form submission fails
  const navigate = useNavigate(); // Initialize useNavigate for navigation

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate that the password and confirm password match
    if (formData.password !== formData.confirmPassword) {
      setError("Password and Confirm Password do not match.");
      return;
    }

    // Handle form submission (e.g., saving data or calling an API)
    console.log("Registration successful with data:", formData);
    
    // After successful registration, clear the error message and navigate to home
    setError(""); // Clear error message if validation is successful
    navigate("/home"); // Navigate to the home page
  };

  return (
    <div className="form-container">
      <h2>Registrasi</h2>
      <img src={logo} alt="Logo" className="logo" /> {/* Logo Image */}
      
      {/* Show error message if validation fails */}
      {error && <p className="error-message">{error}</p>}

      <form onSubmit={handleSubmit} className="form-grid">
        <div>
          <input
            type="text"
            name="firstName"
            placeholder="First name"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <input
            type="text"
            name="lastName"
            placeholder="Last name"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-grid-full">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-grid-full">
          <button type="submit">Register</button>
        </div>

        <div className="form-grid-full" style={{ textAlign: "center", marginTop: "10px" }}>
          <Link to="/login">Already have an account? Login here</Link> {/* Link to login page */}
        </div>
      </form>
    </div>
  );
}

export default Registration;
