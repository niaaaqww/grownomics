import React from "react";
import styles from "./Home.css";
import "./Home.css";

const Home = () => {
  return (
    <div className="styles.homeContainer">
      <div className="styles.heroSection">
        <h1 className="styles.title">Selamat Datang</h1>
        <p className="styles.subtitle">
          Website pembelajaran ekonomi untuk kelas 11.
        </p>
        <button className={styles.ctaButton}>Mulai Belajar</button>
        </div>
        

    <div className="homeContainer">
      <div className="heroSection">
        <h1 className="title">Selamat Datang</h1>
        <p className="subtitle">Website pembelajaran ekonomi untuk kelas 11.</p>
        <div className="searchBar">
          <input type="text" placeholder="Cari materi..." />
          <button className="searchButton">Cari</button>
        </div>
      </div>
      
      <div className="cardSection">
        <div className="card">
          <h2>Materi Terstruktur</h2>
          <p>
            Temukan materi pembelajaran ekonomi yang dirancang khusus untuk
            membantu Anda memahami konsep dengan mudah.
            membantu kamu memahami konsep dengan mudah.
          </p>
        </div>
        <div className="styles.card">
        <div className="card">
          <h2>Latihan Soal</h2>
          <p>
            Uji pemahaman Anda dengan soal-soal interaktif dan dapatkan
            Uji pemahaman kamu dengan soal-soal interaktif dan dapatkan
            feedback secara langsung.
          </p>
        </div>
        <div className={styles.card}>
        <div className="card">
          <h2>Kuis dan Grafik</h2>
          <p>
            Pantau perkembangan Anda dengan grafik dan kuis yang menarik.
            Pantau perkembangan kamu dengan grafik dan kuis yang menarik.
          </p>
        </div>
      </div>
      </div>
      </div>
      </div>
      </div>
  )
}


      export default Home;