import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar"; // Sidebar tetap berada di folder 'components'
import Home from "./pages/Home";           // Home berada di folder 'pages'
import Materi from "./pages/Materi";       // Materi berada di folder 'pages'
import MateriDetail from "./pages/MateriDetail"; // File MateriDetail.js di folder 'pages'
import LatihanSoal from "./pages/LatihanSoal"; // LatihanSoal berada di folder 'pages'
import Grafik from "./pages/Grafik";       // Grafik berada di folder 'pages'
import Kuis from "./pages/Kuis";           // Kuis berada di folder 'pages'
import "./App.css"; // Styling global untuk keseluruhan aplikasi

function App() {
  return (
    <Router>
      <div className="app" style={{ display: 'flex', minHeight: '100vh' }}>
        {/* Sidebar berada di sisi kiri dan tetap */}
        <Sidebar />
        {/* Konten utama berada di samping sidebar */}
        <div
          className="content"
          style={{
            flex: 1,
            marginLeft: '250px', // Sesuaikan dengan lebar sidebar
            padding: '20px',
            backgroundColor: '#f9f9f9', // Warna latar untuk konten utama
            zIndex: 1,
          }}
        >
          <Routes>
            {/* Rute halaman utama */}
            <Route path="/" element={<Home />} />
            {/* Rute daftar materi */}
            <Route path="/materi" element={<Materi />} />
            {/* Rute detail materi untuk bab tertentu */}
            <Route path="/materi/:id" element={<MateriDetail />} />
            {/* Rute halaman latihan soal */}
            <Route path="/latihan-soal" element={<LatihanSoal />} />
            {/* Rute halaman grafik */}
            <Route path="/grafik" element={<Grafik />} />
            {/* Rute halaman kuis */}
            <Route path="/kuis" element={<Kuis />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
