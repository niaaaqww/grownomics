import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";
// Import gambar
import logos from "./grow.jpg"; // Sesuaikan dengan path logo Anda

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`sidebar ${isOpen ? "open" : "closed"}`}>
      {/* Logo */}
      <div className="logo-container">
        <img src={logos} alt="Logo" className={`logo ${isOpen ? "large" : "small"}`} />
        
      </div>

      {/* Tombol toggle */}
      <button className="toggle-btn" onClick={toggleSidebar}>
        {isOpen ? "❮" : "❯"}
      </button>

      {/* Menu */}
      <ul className="sidebar-menu">
        <li>
          <Link to="/home">{isOpen && "Home"}</Link>
        </li>
        <li>
          <Link to="/materi">{isOpen && "Materi"}</Link>
        </li>
        <li>
          <Link to="/latihan-soal">{isOpen && "Latihan Soal"}</Link>
        </li>
        <li>
          <Link to="/grafik">{isOpen && "Grafik"}</Link>
        </li>
        <li>
          <Link to="/kuis">{isOpen && "Kuis"}</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
