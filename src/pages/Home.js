import React from "react";
import styles from "./Home.css";

const Home = () => {
  return (
    <div className={styles.homeContainer}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroText}>
          <h1 className={styles.title}>Selamat Datang di Platform Belajar Ekonomi</h1>
          <p className={styles.subtitle}>
            Platform modern untuk membantu Anda memahami konsep ekonomi kelas 11 dengan lebih mudah dan menyenangkan.
          </p>
          <p className={styles.motto}>
            "Meningkatkan Wawasan, Membangun Masa Depan."
          </p>
          <button className={styles.exploreButton}>Jelajahi Sekarang</button>
        </div>
        <div className={styles.heroImage}>
          <img
            src="/images/hero-image.jpg"
            alt="Ilustrasi pembelajaran"
            className={styles.image}
          />
        </div>
      </section>

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
            <img src="/images/interactive-lessons.png" alt="Interaktif" />
            <h3>Pelajaran Interaktif</h3>
            <p>Meningkatkan pemahaman melalui kuis dan simulasi.</p>
          </div>
          <div className={styles.featureCard}>
            <img src="/images/accessible-materials.png" alt="Materi" />
            <h3>Materi Mudah Diakses</h3>
            <p>Dapatkan materi kapan saja dan di mana saja.</p>
          </div>
          <div className={styles.featureCard}>
            <img src="/images/progress-tracker.png" alt="Tracker" />
            <h3>Pemantauan Kemajuan</h3>
            <p>Lihat progres belajar Anda secara langsung.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
