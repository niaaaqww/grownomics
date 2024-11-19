import React from "react";
import styles from "./Home.css";

const Home = () => {
  return (
    <div className={styles.homeContainer}>
      <div className={styles.heroSection}>
        <h1 className={styles.title}>Selamat Datang</h1>
        <p className={styles.subtitle}>
          Website pembelajaran ekonomi untuk kelas 11.
        </p>
        <button className={styles.ctaButton}>Mulai Belajar</button>
      </div>
      <div className={styles.cardSection}>
        <div className={styles.card}>
          <h2>Materi Terstruktur</h2>
          <p>
            Temukan materi pembelajaran ekonomi yang dirancang khusus untuk
            membantu Anda memahami konsep dengan mudah.
          </p>
        </div>
        <div className={styles.card}>
          <h2>Latihan Soal</h2>
          <p>
            Uji pemahaman Anda dengan soal-soal interaktif dan dapatkan
            feedback secara langsung.
          </p>
        </div>
        <div className={styles.card}>
          <h2>Kuis dan Grafik</h2>
          <p>
            Pantau perkembangan Anda dengan grafik dan kuis yang menarik.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
