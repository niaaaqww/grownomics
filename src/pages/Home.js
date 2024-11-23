import React from "react";
import './Home.css';
import img from "./wal.png";

const Home = () => {
  return (
    <div className="homeContainer">
      <div className="img-container">
        <img src={img} alt="Background" className="backgroundImage" />
        
        {/* Komponen Selamat Datang dan Kolom Pencarian */}
        <div className="welcomeSection">
          <h1 className="welcomeTitle">Selamat Datang</h1>
          <h3 className="welcomeSubtitle">di Website Pembelajaran Ekonomi</h3>
          <div className="searchBar">
            <input
              type="text"
              placeholder="Cari materi..."
              className="searchInput"
            />
            <button className="searchButton">Cari</button>
          </div>
        </div>
      </div>

      {/* Bagian Konten atau Fitur Lain */}
      <div className="content">
        <p>Ini adalah tempat untuk konten tambahan atau fitur lainnya.</p>
      </div>
    </div>
  );
};

export default Home;