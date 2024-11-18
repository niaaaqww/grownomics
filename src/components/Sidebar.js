import React from 'react';
import { Link } from 'react-router-dom';
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>Pembelajaran Ekonomi</h2>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/materi">Materi</Link></li>
        <li><Link to="/latihan-soal">Latihan Soal</Link></li>
        <li><Link to="/grafik">Grafik Peningkatan</Link></li>
        <li><Link to="/kuis">Kuis</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;
