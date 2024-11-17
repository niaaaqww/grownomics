import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import Materi from './pages/Materi';
import LatihanSoal from './pages/LatihanSoal';
import Grafik from './pages/Grafik';
import Kuis from './pages/Kuis';

function App() {
  return (
    <Router>
      <div className="app">
        <Sidebar />
        <div className="content">
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
