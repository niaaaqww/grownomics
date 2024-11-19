import React from "react";
import styles from "./Home.css";

const Home = () => {
  return (
    <div className={styles.homeContainer}>
      <div className={styles.heroSection}>
        <h1 className={styles.title}>Sambutan Hangat</h1>
        <p className={styles.subtitle}>
          Assalamu'alaikum Warahmatullahi Wabarakatuh,  
          Salam sejahtera untuk kita semua.
        </p>
      </div>
      <div className={styles.contentSection}>
        <p className={styles.text}>
          Dengan penuh rasa syukur, kami mempersembahkan platform ini sebagai media
          pembelajaran ekonomi bagi siswa kelas 11. Website ini lahir dari semangat 
          untuk menghadirkan pendidikan yang lebih mudah diakses dan relevan dengan kebutuhan zaman.
        </p>
        <p className={styles.text}>
          Kami berharap bahwa platform ini tidak hanya menjadi tempat belajar, tetapi juga
          menjadi sarana bagi Anda untuk memperluas wawasan dan memperkuat pemahaman Anda
          dalam bidang ekonomi. Semua materi dan fitur dalam website ini dirancang 
          dengan penuh dedikasi demi mendukung perjalanan belajar Anda.
        </p>
        <p className={styles.text}>
          Terima kasih kami sampaikan kepada semua pihak yang telah membantu dan mendukung
          terlaksananya pembuatan website ini. Semoga platform ini memberikan manfaat
          sebesar-besarnya bagi para penggunanya. Selamat belajar!
        </p>
        <p className={styles.text}>
          Wassalamu'alaikum Warahmatullahi Wabarakatuh.
        </p>
      </div>
    </div>
  );
};

export default Home;
