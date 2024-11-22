import React from "react";
import styles from "./Home.css";
import img from "./wal.png";

const Home = () => {
  return (
    
<div className="img-container">
<img src={img} alt="img" className="img" />
<div className={styles.welcomeText}>
        <h1 className={styles.welcomeTitle}>Selamat Datang</h1>
        <h2 className={styles.welcomeSubtitle}>di Website</h2>
        <input
          type="text"
          placeholder="Cari materi..."
          className={styles.searchInput}
        />
        <button className={styles.searchButton}>Cari</button>
      </div>
      

      {/* Content Section */}
      <section className={styles.contentSection}>
        <div className={styles.contentWrapper}>
          <p className={styles.text}>
            Kami dengan bangga mempersembahkan platform ini sebagai media pembelajaran ekonomi bagi siswa kelas 11. Website ini hadir untuk memberikan pendidikan yang mudah diakses, relevan, dan menyenangkan.
          </p>
          <p className={styles.text}>
            Harapan kami adalah agar platform ini tidak hanya menjadi tempat belajar, tetapi juga menjadi sarana untuk memperluas wawasan dan memperkuat pemahaman Anda dalam bidang ekonomi. Semua materi dan fitur dirancang dengan penuh dedikasi untuk mendukung perjalanan belajar Anda.
          </p>
          <p className={styles.text}>
            Terima kasih kepada semua pihak yang telah mendukung pembuatan website ini. Kami berharap platform ini memberikan manfaat besar bagi para penggunanya. Selamat belajar!
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className={styles.featuresSection}>
        <h2 className={styles.featuresTitle}>Fitur Unggulan Kami</h2>
        <div className={styles.featuresGrid}>
          <div className={styles.featureCard}>

            <h3>Pelajaran Interaktif</h3>
            <p>Meningkatkan pemahaman melalui kuis dan simulasi.</p>
          </div>
          <div className={styles.featureCard}>

            <h3>Materi Mudah Diakses</h3>
            <p>Dapatkan materi kapan saja dan di mana saja.</p>
          </div>
          <div className={styles.featureCard}>

            <h3>Pemantauan Kemajuan</h3>
            <p>Lihat progres belajar Anda secara langsung.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;