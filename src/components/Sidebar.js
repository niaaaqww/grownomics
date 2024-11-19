import React from 'react';
import { Link } from 'react-router-dom';
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>Pembelajaran Ekonomi</h2>
      <ul>
        <li><Link to="/" className="btn-home">Home</Link></li>
        <li><Link to="/materi" className="btn-materi">Materi</Link></li>
        <li><Link to="/latihan-soal" className="btn-latihan">Latihan Soal</Link></li>
        <li><Link to="/grafik" className="btn-grafik">Grafik Peningkatan</Link></li>
        <li><Link to="/kuis" className="btn-kuis">Kuis</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;
