import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`sidebar ${isOpen ? "open" : "closed"}`}>
      <button className="toggle-btn" onClick={toggleSidebar}>
        {isOpen ? "❮" : "❯"}
      </button>
      <ul className="sidebar-menu">
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/materi">Materi</Link>
        </li>
        <li>
          <Link to="/latihan-soal">Latihan Soal</Link>
        </li>
        <li>
          <Link to="/grafik">Grafik</Link>
        </li>
        <li>
          <Link to="/kuis">Kuis</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
