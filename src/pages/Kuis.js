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

  const options = {
    soal1: ['Deflasi', 'Inflasi', 'Resesi', 'Stagflasi'],
    soal2: ['Demand', 'Supply', 'Kredit', 'Investasi'],
    soal3: ['Permintaan', 'Penawaran', 'Konsumsi', 'Produksi'],
    soal4: ['PDB', 'Pendapatan Per Kapita', 'Neraca Dagang', 'Inflasi'],
    soal5: ['Sumber Daya Alam', 'Tenaga Kerja', 'Modal', 'Pajak'],
    soal6: ['Pendidikan', 'Perbankan', 'Teknologi', 'Transportasi'],
    soal7: ['Ekspor', 'Impor', 'Investasi', 'Konsumsi'],
  };

  const correctAnswers = {
    soal1: 'Inflasi',
    soal2: 'Demand',
    soal3: 'Penawaran',
    soal4: 'PDB',
    soal5: 'Sumber Daya Alam',
    soal6: 'Perbankan',
    soal7: 'Ekspor',
  };

  const handleChange = (soal, value) => {
    setJawaban({ ...jawaban, [soal]: value });
    updateProgress();
  };

  const updateProgress = () => {
    const answeredCount = Object.values(jawaban).filter((jawab) => jawab !== '').length;
    setProgress((answeredCount / 7) * 100);
  };

  const handleSubmit = () => {
    let correctCount = 0;

    Object.keys(jawaban).forEach((soal) => {
      if (jawaban[soal] === correctAnswers[soal]) {
        correctCount++;
      }
    });

    setFeedback(`Anda menjawab dengan benar ${correctCount} dari 7 soal.`);
  };

  return (
    <div className="quiz-container">
      <header className="quiz-header">
        <h1>Kuis Ekonomi Kelas 11</h1>
        <p>Uji pemahaman Anda tentang konsep dasar Ekonomi dengan memilih jawaban yang tepat!</p>
      </header>

      {/* Progress Bar */}
      <div className="progress-bar-container">
        <div
          className="progress-bar"
          style={{
            width: `${progress}%`,
            transition: 'width 0.3s ease-in-out',
            backgroundColor: progress === 100 ? '#4caf50' : '#2196f3',
          }}
        />
      </div>

      {/* Soal */}
      {Object.keys(options).map((soal, index) => (
        <div className="quiz-question" key={soal}>
          <h2>{index + 1}. {getQuestionText(soal)}</h2>
          <div className="quiz-options">
            {options[soal].map((option) => (
              <label
                key={option}
                className={`quiz-option ${
                  jawaban[soal] === option ? 'selected' : ''
                }`}
              >
                <input
                  type="radio"
                  name={soal}
                  value={option}
                  checked={jawaban[soal] === option}
                  onChange={() => handleChange(soal, option)}
                />
                {option}
              </label>
            ))}
          </div>
        </div>
      ))}

      {/* Tombol Kirim Jawaban */}
      <div className="quiz-submit">
        <button onClick={handleSubmit} className="submit-btn">
          Kirim Jawaban
        </button>
      </div>

      {/* Feedback */}
      {feedback && (
        <div className="quiz-feedback">
          <h3>{feedback}</h3>
        </div>
      )}
    </div>
  );
};

// Function untuk menampilkan soal sesuai urutan
const getQuestionText = (soal) => {
  const questions = {
    soal1: 'Apa yang dimaksud dengan inflasi?',
    soal2: 'Apa yang dimaksud dengan permintaan (demand)?',
    soal3: 'Apa yang dimaksud dengan penawaran (supply)?',
    soal4: 'Apa yang dimaksud dengan PDB (Produk Domestik Bruto)?',
    soal5: 'Apa yang dimaksud dengan sumber daya alam?',
    soal6: 'Apa peran perbankan dalam perekonomian?',
    soal7: 'Apa yang dimaksud dengan ekspor?',
  };
  return questions[soal];
};

export default Kuis;
