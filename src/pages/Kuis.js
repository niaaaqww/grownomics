import React, { useState } from 'react';
import './Kuis.css';

const Kuis = () => {
  const [jawaban, setJawaban] = useState({
    soal1: '',
    soal2: '',
    soal3: '',
    soal4: '',
    soal5: '',
    soal6: '',
    soal7: '',
  });

  const [feedback, setFeedback] = useState('');
  const [progress, setProgress] = useState(0);

  const handleChange = (event, soal) => {
    setJawaban({ ...jawaban, [soal]: event.target.value });
    updateProgress();
  };

  const updateProgress = () => {
    const answeredCount = Object.values(jawaban).filter((jawab) => jawab.trim() !== '').length;
    setProgress((answeredCount / 7) * 100);
  };

  const handleSubmit = () => {
    const correctAnswers = {
      soal1: 'inflasi',
      soal2: 'demand',
      soal3: 'penawaran',
      soal4: 'pdb',
      soal5: 'sumber daya alam',
      soal6: 'perbankan',
      soal7: 'ekspor',
    };

    let correctCount = 0;

    Object.keys(jawaban).forEach((soal) => {
      if (jawaban[soal].toLowerCase() === correctAnswers[soal]) {
        correctCount++;
      }
    });

    setFeedback(`Anda menjawab dengan benar ${correctCount} dari 7 soal.`);
  };

  // Petunjuk untuk setiap soal
  const petunjuk = {
    soal1: 'Ini berkaitan dengan kenaikan harga barang dan jasa secara umum.',
    soal2: 'Ini merujuk pada keinginan dan kemampuan konsumen untuk membeli barang dan jasa.',
    soal3: 'Ini adalah jumlah barang dan jasa yang tersedia di pasar.',
    soal4: 'Ini mengukur total nilai barang dan jasa yang dihasilkan di suatu negara.',
    soal5: 'Ini adalah bahan-bahan alam yang digunakan dalam produksi barang dan jasa.',
    soal6: 'Ini berhubungan dengan lembaga yang menyediakan jasa keuangan kepada masyarakat.',
    soal7: 'Ini adalah kegiatan mengirim barang atau jasa ke luar negeri.',
  };

  return (
    <div className="quiz-container">
      <div className="quiz-header">
        <h1>Kuis Ekonomi Kelas 11</h1>
        <p className="quiz-intro">
          Uji kemampuan Anda dalam materi Ekonomi kelas 11 dengan menjawab soal berikut:
        </p>
      </div>

      <div className="quiz-clue">
        <h3>Petunjuk: Jawaban Anda harus tepat terkait dengan konsep-konsep dasar Ekonomi seperti inflasi, penawaran, permintaan, dll.</h3>
      </div>

      {/* Progress Bar */}
      <div className="progress-bar-container">
        <div
          className="progress-bar"
          style={{ width: `${progress}%`, transition: 'width 0.3s ease-in-out' }}
        />
      </div>

      {/* Soal 1 */}
      <div className="quiz-question">
        <h2>1. Apa yang dimaksud dengan inflasi?</h2>
        <p className="quiz-hint">{petunjuk.soal1}</p>
        <input
          type="text"
          value={jawaban.soal1}
          onChange={(e) => handleChange(e, 'soal1')}
          placeholder="Masukkan jawaban Anda"
        />
      </div>

      {/* Soal 2 */}
      <div className="quiz-question">
        <h2>2. Apa yang dimaksud dengan permintaan (demand)?</h2>
        <p className="quiz-hint">{petunjuk.soal2}</p>
        <input
          type="text"
          value={jawaban.soal2}
          onChange={(e) => handleChange(e, 'soal2')}
          placeholder="Masukkan jawaban Anda"
        />
      </div>

      {/* Soal 3 */}
      <div className="quiz-question">
        <h2>3. Apa yang dimaksud dengan penawaran (supply)?</h2>
        <p className="quiz-hint">{petunjuk.soal3}</p>
        <input
          type="text"
          value={jawaban.soal3}
          onChange={(e) => handleChange(e, 'soal3')}
          placeholder="Masukkan jawaban Anda"
        />
      </div>

      {/* Soal 4 */}
      <div className="quiz-question">
        <h2>4. Apa yang dimaksud dengan PDB (Produk Domestik Bruto)?</h2>
        <p className="quiz-hint">{petunjuk.soal4}</p>
        <input
          type="text"
          value={jawaban.soal4}
          onChange={(e) => handleChange(e, 'soal4')}
          placeholder="Masukkan jawaban Anda"
        />
      </div>

      {/* Soal 5 */}
      <div className="quiz-question">
        <h2>5. Apa yang dimaksud dengan sumber daya alam?</h2>
        <p className="quiz-hint">{petunjuk.soal5}</p>
        <input
          type="text"
          value={jawaban.soal5}
          onChange={(e) => handleChange(e, 'soal5')}
          placeholder="Masukkan jawaban Anda"
        />
      </div>

      {/* Soal 6 */}
      <div className="quiz-question">
        <h2>6. Apa peran perbankan dalam perekonomian?</h2>
        <p className="quiz-hint">{petunjuk.soal6}</p>
        <input
          type="text"
          value={jawaban.soal6}
          onChange={(e) => handleChange(e, 'soal6')}
          placeholder="Masukkan jawaban Anda"
        />
      </div>

      {/* Soal 7 */}
      <div className="quiz-question">
        <h2>7. Apa yang dimaksud dengan ekspor?</h2>
        <p className="quiz-hint">{petunjuk.soal7}</p>
        <input
          type="text"
          value={jawaban.soal7}
          onChange={(e) => handleChange(e, 'soal7')}
          placeholder="Masukkan jawaban Anda"
        />
      </div>

      {/* Tombol Kirim Jawaban */}
      <div className="quiz-submit">
        <button onClick={handleSubmit}>Kirim Jawaban</button>
      </div>

      {/* Feedback */}
      <div className="quiz-feedback">
        <h3>{feedback}</h3>
      </div>
    </div>
  );
};

export default Kuis;
