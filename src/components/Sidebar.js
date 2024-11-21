import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>Pembelajaran Ekonomi</h2>
      <ul>
        <li>
          <Link to="/" className="btn-home">
            <i className="bi bi-house-door"></i> Home
          </Link>
        </li>
        <li>
          <Link to="/materi" className="btn-materi">
            <i className="bi bi-journal-text"></i> Materi
          </Link>
        </li>
        <li>
          <Link to="/latihan-soal" className="btn-latihan">
            <i className="bi bi-pencil-square"></i> Latihan Soal
          </Link>
        </li>
        <li>
          <Link to="/grafik" className="btn-grafik">
            <i className="bi bi-bar-chart-line"></i> Grafik Peningkatan
          </Link>
        </li>
        <li>
          <Link to="/kuis" className="btn-kuis">
            <i className="bi bi-question-circle"></i> Kuis
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
