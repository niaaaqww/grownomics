import React, { useState, useEffect } from "react";
import "./Kuis.css"; // Mengimpor file CSS

const Kuis = () => {
  const pertanyaanPerKuis = [
    {
      kuis: "Kuis 1",
      soal: [
        { id: 1, soal: "iapdeanfeemu listrik?", pilihan: ["Nikola Tesla", "Thomas Edison", "Albert Einstein", "Alexander Graham Bell"], jawabanBenar: "Nikola Tesla" },
        { id: 2, soal: "Apa tahun Proklamasi Kemerdekaan Indonesia?", pilihan: ["1945", "1939", "1950", "1920"], jawabanBenar: "1945" },
        { id: 3, soal: "Dimana terjadinya Perang Dunia II?", pilihan: ["Eropa", "Asia", "Afrika", "Australia"], jawabanBenar: "Eropa" },
        { id: 4, soal: "Siapa Presiden pertama Indonesia?", pilihan: ["Soekarno", "Soeharto", "Joko Widodo", "B.J. Habibie"], jawabanBenar: "Soekarno" },
        { id: 5, soal: "Apa nama ibu kota Indonesia?", pilihan: ["Jakarta", "Surabaya", "Bandung", "Medan"], jawabanBenar: "Jakarta" },
        { id: 6, soal: "Perang Dunia II dimulai pada tahun?", pilihan: ["1914", "1939", "1941", "1945"], jawabanBenar: "1939" },
        { id: 7, soal: "Siapa penulis buku Harry Potter?", pilihan: ["J.K. Rowling", "George Orwell", "J.R.R. Tolkien", "Stephen King"], jawabanBenar: "J.K. Rowling" },
        { id: 8, soal: "Apa nama planet terbesar dalam tata surya?", pilihan: ["Bumi", "Mars", "Jupiter", "Saturnus"], jawabanBenar: "Jupiter" },
      ],
    },
    {
      kuis: "Kuis 2",
      soal: [
        { id: 1, soal: "Apa nama unsur dengan simbol H?", pilihan: ["Hidrogen", "Helium", "Oksigen", "Nitrogen"], jawabanBenar: "Hidrogen" },
        { id: 2, soal: "Apa warna darah manusia?", pilihan: ["Merah", "Biru", "Hijau", "Kuning"], jawabanBenar: "Merah" },
        { id: 3, soal: "Apa nama planet terdekat dengan Matahari?", pilihan: ["Merkurius", "Venus", "Bumi", "Mars"], jawabanBenar: "Merkurius" },
        { id: 4, soal: "Siapa Presiden pertama Indonesia?", pilihan: ["Soekarno", "Soeharto", "Joko Widodo", "B.J. Habibie"], jawabanBenar: "Soekarno" },
        { id: 5, soal: "Apa nama ibu kota Indonesia?", pilihan: ["Jakarta", "Surabaya", "Bandung", "Medan"], jawabanBenar: "Jakarta" },
        { id: 6, soal: "Perang Dunia II dimulai pada tahun?", pilihan: ["1914", "1939", "1941", "1945"], jawabanBenar: "1939" },
        { id: 7, soal: "Siapa penulis buku Harry Potter?", pilihan: ["J.K. Rowling", "George Orwell", "J.R.R. Tolkien", "Stephen King"], jawabanBenar: "J.K. R" },
      ],
    },
    {
      kuis: "Kuis 3",
      soal: [
        { id: 1, soal: "Apa nama unsur dengan simbol H?", pilihan: ["Hidrogen", "Helium", "Oksigen", "Nitrogen"], jawabanBenar: "Hidrogen" },
        { id: 2, soal: "Apa warna darah manusia?", pilihan: ["Merah", "Biru", "Hijau", "Kuning"], jawabanBenar: "Merah" },
        { id: 3, soal: "Apa nama planet terdekat dengan Matahari?", pilihan: ["Merkurius", "Venus", "Bumi", "Mars"], jawabanBenar: "Merkurius" },
        { id: 1, soal: "Apa nama unsur dengan simbol H?", pilihan: ["Hidrogen", "Helium", "Oksigen", "Nitrogen"], jawabanBenar: "Hidrogen" },
        { id: 2, soal: "Apa warna darah manusia?", pilihan: ["Merah", "Biru", "Hijau", "Kuning"], jawabanBenar: "Merah" },
        { id: 3, soal: "Apa nama planet terdekat dengan Matahari?", pilihan: ["Merkurius", "Venus", "Bumi", "Mars"], jawabanBenar: "Merkurius" },
      ],
    },
    {
      kuis: "Kuis 4",
      soal: [
        { id: 1, soal: "Apa nama unsur dengan simbol H?", pilihan: ["Hidrogen", "Helium", "Oksigen", "Nitrogen"], jawabanBenar: "Hidrogen" },
        { id: 2, soal: "Apa warna darah manusia?", pilihan: ["Merah", "Biru", "Hijau", "Kuning"], jawabanBenar: "Merah" },
        { id: 3, soal: "Apa nama planet terdekat dengan Matahari?", pilihan: ["Merkurius", "Venus", "Bumi", "Mars"], jawabanBenar: "Merkurius" },
        { id: 1, soal: "Apa nama unsur dengan simbol H?", pilihan: ["Hidrogen", "Helium", "Oksigen", "Nitrogen"], jawabanBenar: "Hidrogen" },
        { id: 2, soal: "Apa warna darah manusia?", pilihan: ["Merah", "Biru", "Hijau", "Kuning"], jawabanBenar: "Merah" },
        { id: 3, soal: "Apa nama planet terdekat dengan Matahari?", pilihan: ["Merkurius", "Venus", "Bumi", "Mars"], jawabanBenar: "Merkurius" },
      ],
    },
    {
      kuis: "Kuis 5",
      soal: [
        { id: 1, soal: "Apa nama unsur dengan simbol H?", pilihan: ["Hidrogen", "Helium", "Oksigen", "Nitrogen"], jawabanBenar: "Hidrogen" },
        { id: 2, soal: "Apa warna darah manusia?", pilihan: ["Merah", "Biru", "Hijau", "Kuning"], jawabanBenar: "Merah" },
        { id: 3, soal: "Apa nama planet terdekat dengan Matahari?", pilihan: ["Merkurius", "Venus", "Bumi", "Mars"], jawabanBenar: "Merkurius" },
        { id: 1, soal: "Apa nama unsur dengan simbol H?", pilihan: ["Hidrogen", "Helium", "Oksigen", "Nitrogen"], jawabanBenar: "Hidrogen" },
        { id: 2, soal: "Apa warna darah manusia?", pilihan: ["Merah", "Biru", "Hijau", "Kuning"], jawabanBenar: "Merah" },
        { id: 3, soal: "Apa nama planet terdekat dengan Matahari?", pilihan: ["Merkurius", "Venus", "Bumi", "Mars"], jawabanBenar: "Merkurius" },
      ],
    },
    
    // Anda bisa menambahkan kuis lainnya sesuai kebutuhan
  ];

  const [jawabanTerpilih, setJawabanTerpilih] = useState({});
  const [skor, setSkor] = useState(0);
  const [kuisAktif, setKuisAktif] = useState(null); // Kuis yang aktif
  const [babAktif, setBabAktif] = useState(0); // Soal yang aktif
  const [timer, setTimer] = useState(20); // Timer untuk setiap soal
  const [animasiMulai, setAnimasiMulai] = useState(false); // Animasi mulai
  const [animasiBenar, setAnimasiBenar] = useState(false); // Animasi jika benar semua
  const [isKuisSelesai, setIsKuisSelesai] = useState(false); // Menandakan jika kuis selesai

  // Fungsi untuk memilih jawaban
  const pilihJawaban = (id, pilihan) => {
    setJawabanTerpilih({
      ...jawabanTerpilih,
      [id]: pilihan,
    });
  };

  // Fungsi untuk menghitung skor setelah kuis selesai
  const hitungSkor = () => {
    let skorBaru = 0;
    if (kuisAktif !== null) { // Pastikan kuisAktif tidak null
      pertanyaanPerKuis[kuisAktif].soal.forEach((q) => {
        const jawab = jawabanTerpilih[`soal${q.id}`];
        if (jawab === q.jawabanBenar) {
          skorBaru += 1;
        }
      });
    }
    setSkor(skorBaru);
    setIsKuisSelesai(true); // Menandakan bahwa kuis sudah selesai
    if (skorBaru === pertanyaanPerKuis[kuisAktif]?.soal.length) {
      setAnimasiBenar(true); // Animasi jika jawaban benar semua
    }
  };

  // Fungsi untuk memulai kuis dengan animasi
  const mulaiKuis = () => {
    setAnimasiMulai(true);
    setTimeout(() => {
      setAnimasiMulai(false);
      setTimer(20); // reset timer
      setBabAktif(0); // reset bab ke soal pertama
    }, 1500); // Durasi animasi mulai
  };

  // Timer untuk setiap soal
  useEffect(() => {
    if (kuisAktif !== null && timer > 0 && babAktif < pertanyaanPerKuis[kuisAktif].soal.length) {
      const interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
      return () => clearInterval(interval);
    }
    if (timer === 0) {
      lanjutKeSoalBerikutnya();
    }
  }, [timer, babAktif, kuisAktif]);

  // Fungsi untuk lanjut ke soal berikutnya
  const lanjutKeSoalBerikutnya = () => {
    if (kuisAktif !== null && babAktif < pertanyaanPerKuis[kuisAktif].soal.length - 1) {
      setBabAktif(babAktif + 1);
      setTimer(20); // reset timer
    } else {
      hitungSkor();
    }
  };

  // Fungsi untuk memilih kuis
  const pilihKuis = (index) => {
    setKuisAktif(index);
    mulaiKuis();
  };

  // Fungsi untuk kembali ke pilihan kuis
  const kembaliKePilihanKuis = () => {
    setKuisAktif(null);
    setJawabanTerpilih({}); // Reset jawaban
    setSkor(0); // Reset skor
    setBabAktif(0); // Reset soal ke awal
    setIsKuisSelesai(false); // Reset status kuis selesai
  };

  return (
    <div className="kuis-container">
      {kuisAktif === null ? (
        <div className="pilihan-kuis">
          <h2>Pilih Kuis</h2>
          {pertanyaanPerKuis.map((kuis, index) => (
            <button
              key={index}
              className="pilihan-kuis-button"
              onClick={() => pilihKuis(index)}
            >
              {kuis.kuis}
            </button>
          ))}
        </div>
      ) : (
        <div>
          {/* Animasi Mulai */}
          {animasiMulai && (
            <div className="animasi-mulai">
              <h2>Mulai Kuis!</h2>
            </div>
          )}
          {!animasiMulai && kuisAktif !== null && !isKuisSelesai && (
            <div>
              <h2>{pertanyaanPerKuis[kuisAktif].kuis}</h2>
              <div className="pertanyaan-container">
                <div className="soal">
                  <h3>{pertanyaanPerKuis[kuisAktif].soal[babAktif]?.soal}</h3>
                  <div className="timer">Waktu: {timer}s</div>
                  <div className="pilihan">
                    {pertanyaanPerKuis[kuisAktif].soal[babAktif]?.pilihan.map((pilihan, idx) => (
                      <button
                        key={idx}
                        className={`pilihan-button ${jawabanTerpilih[`soal${pertanyaanPerKuis[kuisAktif].soal[babAktif].id}`] === pilihan ? "selected" : ""}`}
                        onClick={() => pilihJawaban(`soal${pertanyaanPerKuis[kuisAktif].soal[babAktif].id}`, pilihan)}
                      >
                        {pilihan}
                      </button>
                    ))}
                  </div>
                </div>
                <button className="submit-button" onClick={lanjutKeSoalBerikutnya}>
                  {babAktif === pertanyaanPerKuis[kuisAktif].soal.length - 1 ? "Selesai" : "Lanjutkan ke Soal Berikutnya"}
                </button>
              </div>
            </div>
          )}

          {/* Skor */}
          {isKuisSelesai && (
            <div className="hasil">
              <h3>Skor Anda: {skor} / {pertanyaanPerKuis[kuisAktif]?.soal.length}</h3>
              <button onClick={kembaliKePilihanKuis}>Kembali ke Pilihan Kuis</button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Kuis;
