import React from 'react';
import './LatihanSoal.css'; // File CSS terpisah untuk styling

const LatihanSoal = () => {
  const babLatihan = [
    "Bab 1: Pendahuluan Ekonomi",
    "Bab 2: Kebutuhan dan Kelangkaan",
    "Bab 3: Sistem Ekonomi",
    "Bab 4: Permintaan dan Penawaran",
    "Bab 5: Pasar dan Harga",
    "Bab 6: Kebijakan Fiskal dan Moneter",
    "Bab 7: Pendapatan Nasional",
    "Bab 8: Perdagangan Internasional",
    "Bab 9: Pembangunan Ekonomi",
    "Bab 10: Perdagangan Internasional",
    "Bab 11: Globalisasi Ekonomi",
    "Bab 12: Uji Kompetensi Ekonomi"
  ];

  return (
    <div className="latihan-soal-container">
      <h1>Latihan Soal</h1>
      <p>Kerjakan latihan soal untuk memperdalam pemahaman Anda.</p>
      <div className="card-container">
        {babLatihan.map((bab, index) => (
          <div className="card" key={index}>
            <h2>{bab}</h2>
            <button className="btn-latihan">Kerjakan</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatihanSoal;
