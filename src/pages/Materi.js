import React from "react";
import { useNavigate } from "react-router-dom";
import "./Materi.css";

const Materi = () => {
  const navigate = useNavigate();

  const babList = [
    { id: 1, title: "Bab 1: Pengantar Ekonomi", description: "Memahami konsep dasar ekonomi." },
    { id: 2, title: "Bab 2: Kebutuhan dan Kelangkaan", description: "Pelajari bagaimana kelangkaan memengaruhi kebutuhan manusia." },
    { id: 3, title: "Bab 3: Sistem Ekonomi", description: "Mengenal berbagai jenis sistem ekonomi yang digunakan." },
    { id: 4, title: "Bab 4: Permintaan dan Penawaran", description: "Analisis faktor yang memengaruhi harga pasar." },
    { id: 5, title: "Bab 5: Pasar Persaingan", description: "Memahami konsep pasar persaingan sempurna dan tidak sempurna." },
    { id: 6, title: "Bab 6: Uang dan Perbankan", description: "Pahami fungsi uang dan peran bank dalam ekonomi." },
    { id: 7, title: "Bab 7: Inflasi", description: "Pelajari penyebab dan dampak inflasi." },
    { id: 8, title: "Bab 8: Pertumbuhan Ekonomi", description: "Memahami bagaimana ekonomi berkembang dari waktu ke waktu." },
    { id: 9, title: "Bab 9: Pembangunan Ekonomi", description: "Pelajari konsep pembangunan dan perbedaannya dengan pertumbuhan." },
    { id: 10, title: "Bab 10: Perdagangan Internasional", description: "Mengenal ekspor, impor, dan manfaat perdagangan antar negara." },
    { id: 11, title: "Bab 11: Kebijakan Ekonomi", description: "Pelajari berbagai kebijakan ekonomi yang diterapkan pemerintah." },
    { id: 12, title: "Bab 12: Globalisasi Ekonomi", description: "Pahami dampak globalisasi terhadap ekonomi dunia." },
  ];

  return (
    <div className="materi-container">
      <h1 className="materi-title">Materi Ekonomi</h1>
      <p className="materi-subtitle">Pilih bab untuk mempelajari lebih lanjut:</p>
      <div className="card-grid">
        {babList.map((bab) => (
          <div
            key={bab.id}
            className="card"
            onClick={() => navigate(`/materi/${bab.id}`)}
          >
            <h2>{bab.title}</h2>
            <p>{bab.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Materi;
