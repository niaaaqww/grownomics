import React from "react";
import { useParams } from "react-router-dom";

const BabDetail = () => {
  const { id } = useParams();

  // Data singkat untuk tiap bab
  const babDetails = {
    1: "Bab 1 membahas dasar-dasar ekonomi, seperti kebutuhan manusia dan masalah kelangkaan.",
    2: "Bab 2 fokus pada kebutuhan, kelangkaan, dan bagaimana manusia mengelola sumber daya.",
    3: "Bab 3 menjelaskan berbagai sistem ekonomi yang digunakan di seluruh dunia.",
    4: "Bab 4 membahas hukum permintaan dan penawaran serta pengaruhnya pada harga.",
    5: "Bab 5 menjelaskan tentang pasar persaingan sempurna dan tidak sempurna.",
    6: "Bab 6 fokus pada uang, perbankan, dan kebijakan moneter.",
    7: "Bab 7 mempelajari penyebab, dampak, dan cara mengatasi inflasi.",
    8: "Bab 8 membahas teori dan indikator pertumbuhan ekonomi.",
    9: "Bab 9 fokus pada pembangunan ekonomi dan tantangannya.",
    10: "Bab 10 menjelaskan manfaat perdagangan internasional bagi negara.",
    11: "Bab 11 membahas kebijakan ekonomi yang digunakan pemerintah.",
    12: "Bab 12 mempelajari dampak globalisasi terhadap perekonomian.",
  };

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1>Detail Bab {id}</h1>
      <p>{babDetails[id]}</p>
    </div>
  );
};

export default BabDetail;
