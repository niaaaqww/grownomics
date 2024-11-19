import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar"; // Sidebar yang kamu buat
import Home from "./pages/Home";           // Pastikan file Home.js ada di folder 'pages'
import Materi from "./pages/Materi";       // Pastikan file Materi.js ada di folder 'pages'
import LatihanSoal from "./pages/LatihanSoal"; // Pastikan file LatihanSoal.js ada di folder 'pages'
import Grafik from "./pages/Grafik";       // Pastikan file Grafik.js ada di folder 'pages'
import Kuis from "./pages/Kuis";           // Pastikan file Kuis.js ada di folder 'pages'
import "./App.css"; // Styling global, pastikan file ini ada di root proyek

function App() {
  return (
    <Router>
      <div className="app" style={{ display: 'flex', minHeight: '100vh' }}>
        {/* Sidebar tetap di sisi kiri */}
        <Sidebar />
        {/* Konten utama berada di samping sidebar */}
        <div className="content" style={{ flex: 1, marginLeft: '250px', padding: '20px', zIndex: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/materi" element={<Materi />} />
            <Route path="/latihan-soal" element={<LatihanSoal />} />
            <Route path="/grafik" element={<Grafik />} />
            <Route path="/kuis" element={<Kuis />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
