import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Sidebar from "./components/Sidebar"; // Sidebar tetap berada di folder 'components'
import Home from "./pages/Home";           // Home berada di folder 'pages'
import Materi from "./pages/Materi";       // Materi berada di folder 'pages'
import MateriDetail from "./pages/MateriDetail"; // File MateriDetail.js di folder 'pages'
import LatihanSoal from "./pages/LatihanSoal"; // LatihanSoal berada di folder 'pages'
import Grafik from "./pages/Grafik";       // Grafik berada di folder 'pages'
import Kuis from "./pages/Kuis";           // Kuis berada di folder 'pages'
import Login from "./pages/Login";         // Login berada di folder 'pages'
import Registration from "./pages/Registration"; // Registration page for users to sign up
import "./App.css"; // Styling global untuk keseluruhan aplikasi

function App() {
  // State untuk mengecek status login
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      <Routes>
        {/* Rute Login, halaman login muncul pertama kali */}
        <Route
          path="/"
          element={isLoggedIn ? <Navigate to="/home" /> : <Login setIsLoggedIn={setIsLoggedIn} />}
        />
        
        {/* Rute Registrasi untuk mendaftar akun baru */}
        <Route path="/register" element={<Registration />} />

        {/* Rute halaman setelah login, hanya bisa diakses jika sudah login */}
        <Route
          path="/home"
          element={
            isLoggedIn ? (
              <div className="app" style={{ display: 'flex', minHeight: '100vh' }}>
                <Sidebar /> {/* Sidebar muncul setelah login */}
                <div
                  className="content"
                  style={{
                    flex: 1,
                    marginLeft: '250px',
                    padding: '20px',
                    backgroundColor: '#f9f9f9',
                    zIndex: 1,
                  }}
                >
                  <Home />
                </div>
              </div>
            ) : (
              <Navigate to="/" /> // Jika belum login, redirect ke halaman login
            )
          }
        />
        
        {/* Rute halaman materi, latihan soal, grafik, dan kuis juga hanya bisa diakses setelah login */}
        <Route
          path="/materi"
          element={
            isLoggedIn ? (
              <div className="app" style={{ display: 'flex', minHeight: '100vh' }}>
                <Sidebar />
                <div className="content" style={{ flex: 1, marginLeft: '250px', padding: '20px' }}>
                  <Materi />
                </div>
              </div>
            ) : (
              <Navigate to="/" />
            )
          }
        />
        
        <Route
          path="/materi/:id"
          element={
            isLoggedIn ? (
              <div className="app" style={{ display: 'flex', minHeight: '100vh' }}>
                <Sidebar />
                <div className="content" style={{ flex: 1, marginLeft: '250px', padding: '20px' }}>
                  <MateriDetail />
                </div>
              </div>
            ) : (
              <Navigate to="/" />
            )
          }
        />
        
        <Route
          path="/latihan-soal"
          element={
            isLoggedIn ? (
              <div className="app" style={{ display: 'flex', minHeight: '100vh' }}>
                <Sidebar />
                <div className="content" style={{ flex: 1, marginLeft: '250px', padding: '20px' }}>
                  <LatihanSoal />
                </div>
              </div>
            ) : (
              <Navigate to="/" />
            )
          }
        />
        
        <Route
          path="/grafik"
          element={
            isLoggedIn ? (
              <div className="app" style={{ display: 'flex', minHeight: '100vh' }}>
                <Sidebar />
                <div className="content" style={{ flex: 1, marginLeft: '250px', padding: '20px' }}>
                  <Grafik />
                </div>
              </div>
            ) : (
              <Navigate to="/" />
            )
          }
        />
        
        <Route
          path="/kuis"
          element={
            isLoggedIn ? (
              <div className="app" style={{ display: 'flex', minHeight: '100vh' }}>
                <Sidebar />
                <div className="content" style={{ flex: 1, marginLeft: '250px', padding: '20px' }}>
                  <Kuis />
                </div>
              </div>
            ) : (
              <Navigate to="/" />
            )
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
