import React from "react";
import { useParams } from "react-router-dom";
import "./MateriDetail.css";

const materiDetailContent = {
    1: {
        title: "Bab 1: Pengantar Ekonomi",
        content: (
          <>
            <h2>1. Pengertian Ekonomi</h2>
            <p>
              Ekonomi adalah ilmu yang mempelajari bagaimana masyarakat mengelola sumber daya yang terbatas untuk memenuhi kebutuhan dan keinginan yang tidak terbatas. Ilmu ekonomi membantu kita memahami proses produksi, distribusi, dan konsumsi barang dan jasa, serta bagaimana keputusan-keputusan ekonomi dibuat.
            </p>
    
            <h2>2. Konsep Dasar Ekonomi</h2>
            <h3>a. Kebutuhan dan Keinginan</h3>
            <p>
              <strong>Kebutuhan:</strong> Merupakan sesuatu yang harus dipenuhi agar manusia dapat hidup layak, seperti makanan, pakaian, dan tempat tinggal.
            </p>
            <p>
              <strong>Keinginan:</strong> Merupakan sesuatu yang diinginkan untuk menambah kepuasan hidup, seperti mobil mewah, liburan, dan gadget terbaru.
            </p>
    
            <h3>b. Kelangkaan</h3>
            <p>
              Kelangkaan adalah kondisi di mana sumber daya yang tersedia tidak cukup untuk memenuhi semua kebutuhan dan keinginan manusia. Karena kelangkaan, manusia harus membuat pilihan tentang bagaimana menggunakan sumber daya tersebut.
            </p>
    
            <h3>c. Biaya Peluang (Opportunity Cost)</h3>
            <p>
              Biaya peluang adalah nilai dari alternatif terbaik yang harus dikorbankan ketika kita membuat suatu keputusan. Konsep ini penting dalam pengambilan keputusan ekonomi karena membantu kita memahami konsekuensi dari pilihan yang kita buat.
            </p>
    
            <h2>3. Jenis-Jenis Ekonomi</h2>
            <h3>a. Ekonomi Mikro</h3>
            <p>
              Ekonomi mikro adalah cabang ilmu ekonomi yang mempelajari perilaku individu dan perusahaan dalam membuat keputusan mengenai penggunaan sumber daya yang terbatas. Contohnya meliputi analisis pasar, penentuan harga, dan teori produksi.
            </p>
    
            <h3>b. Ekonomi Makro</h3>
            <p>
              Ekonomi makro adalah cabang ilmu ekonomi yang mempelajari ekonomi secara keseluruhan, termasuk masalah seperti inflasi, pengangguran, pertumbuhan ekonomi, dan kebijakan fiskal serta moneter.
            </p>
    
            <h2>4. Prinsip-Prinsip Ekonomi</h2>
            <h3>a. Prinsip Kelangkaan dan Pilihan</h3>
            <p>
              Karena sumber daya terbatas, setiap individu atau masyarakat harus membuat pilihan tentang bagaimana mengalokasikan sumber daya tersebut.
            </p>
    
            <h3>b. Prinsip Biaya Manfaat</h3>
            <p>
              Setiap keputusan ekonomi harus mempertimbangkan biaya dan manfaat yang terkait. Keputusan yang baik adalah keputusan yang memberikan manfaat terbesar dengan biaya yang paling rendah.
            </p>
    
            <h3>c. Prinsip Insentif</h3>
            <p>
              Insentif adalah faktor yang mendorong seseorang untuk bertindak atau tidak bertindak. Ekonomi mempelajari bagaimana perubahan dalam insentif dapat mempengaruhi perilaku ekonomi.
            </p>
    
            <h2>5. Sistem Ekonomi</h2>
            <p>
              Sistem ekonomi adalah cara suatu negara atau masyarakat mengatur dan mengelola sumber dayanya untuk memenuhi kebutuhan dan keinginan masyarakat. Ada beberapa jenis sistem ekonomi, termasuk:
            </p>
            <ul>
              <li><strong>Ekonomi Tradisional:</strong> Berdasarkan kebiasaan dan tradisi.</li>
              <li><strong>Ekonomi Terpusat:</strong> Pemerintah mengendalikan semua aspek ekonomi.</li>
              <li><strong>Ekonomi Pasar:</strong> Keputusan ekonomi dibuat oleh individu dan perusahaan melalui mekanisme pasar.</li>
              <li><strong>Ekonomi Campuran:</strong> Kombinasi antara ekonomi pasar dan terpusat.</li>
            </ul>
    
            <h2>6. Masalah Ekonomi Pokok</h2>
            <p>
              Setiap sistem ekonomi harus menjawab tiga pertanyaan pokok:
            </p>
            <ul>
              <li><strong>Apa yang akan diproduksi?</strong> Menentukan barang dan jasa apa yang akan diproduksi.</li>
              <li><strong>Bagaimana cara memproduksi?</strong> Menentukan metode produksi yang akan digunakan.</li>
              <li><strong>Untuk siapa barang dan jasa diproduksi?</strong> Menentukan siapa yang akan menerima dan mengonsumsi barang dan jasa yang diproduksi.</li>
            </ul>
    
            <h2>7. Pasar dan Mekanisme Harga</h2>
            <p>
              Pasar adalah tempat di mana penjual dan pembeli bertemu untuk melakukan transaksi. Mekanisme harga adalah proses di mana harga barang dan jasa ditentukan oleh interaksi antara penawaran dan permintaan. Harga memainkan peran penting dalam mengalokasikan sumber daya dan mengatur produksi serta konsumsi barang dan jasa.
            </p>
    
            <h2>8. Peran Pemerintah dalam Ekonomi</h2>
            <p>
              Pemerintah memiliki peran penting dalam ekonomi, termasuk:
            </p>
            <ul>
              <li><strong>Membuat Kebijakan Fiskal:</strong> Mengatur anggaran negara melalui pengeluaran pemerintah dan penerimaan pajak.</li>
              <li><strong>Membuat Kebijakan Moneter:</strong> Mengatur jumlah uang beredar dan suku bunga untuk mencapai kestabilan ekonomi.</li>
              <li><strong>Mengatur Pasar:</strong> Mencegah monopoli, melindungi konsumen, dan mengatur perdagangan.</li>
            </ul>
    
            <h2>9. Kesimpulan</h2>
            <p>
              Pengantar ekonomi memberikan dasar pemahaman tentang bagaimana ekonomi berfungsi dan bagaimana keputusan ekonomi mempengaruhi kehidupan kita sehari-hari. Dengan memahami prinsip-prinsip ekonomi, kita dapat membuat keputusan yang lebih baik dalam mengelola sumber daya yang terbatas dan mencapai kesejahteraan.
            </p>
          </>
        ),
      },
  2: {
    title: "Bab 2: Kebutuhan dan Kelangkaan",
    content: (
      <>
        <h2>1. Pengertian Kebutuhan</h2>
        <p>
          Kebutuhan adalah keinginan manusia yang harus dipenuhi untuk mempertahankan hidup dan mencapai kesejahteraan. Kebutuhan mencakup berbagai aspek kehidupan, mulai dari kebutuhan dasar seperti makanan dan tempat tinggal hingga kebutuhan akan pendidikan dan hiburan.
        </p>
        <h3>Jenis-Jenis Kebutuhan:</h3>
        <ul>
          <li><strong>Kebutuhan Primer:</strong> Kebutuhan dasar yang harus dipenuhi untuk kelangsungan hidup, seperti makanan, pakaian, dan tempat tinggal.</li>
          <li><strong>Kebutuhan Sekunder:</strong> Kebutuhan tambahan yang meningkatkan kenyamanan hidup, seperti pendidikan, transportasi, dan komunikasi.</li>
          <li><strong>Kebutuhan Tersier:</strong> Kebutuhan mewah yang mencerminkan status sosial, seperti mobil mewah, perhiasan, dan liburan.</li>
        </ul>

        <h2>2. Pengertian Kelangkaan</h2>
        <p>
          Kelangkaan adalah kondisi dimana sumber daya yang tersedia tidak cukup untuk memenuhi semua kebutuhan dan keinginan manusia. Kelangkaan merupakan masalah pokok dalam ekonomi karena sumber daya yang terbatas harus digunakan seefisien mungkin untuk mencapai kesejahteraan maksimal.
        </p>

        <h3>Penyebab Kelangkaan:</h3>
        <ul>
          <li><strong>Sumber Daya Alam yang Terbatas:</strong> Bahan baku alam seperti minyak, gas, dan mineral yang jumlahnya terbatas.</li>
          <li><strong>Pertumbuhan Penduduk:</strong> Pertambahan jumlah penduduk yang meningkatkan permintaan terhadap barang dan jasa.</li>
          <li><strong>Distribusi Sumber Daya yang Tidak Merata:</strong> Sumber daya yang terkonsentrasi di beberapa wilayah atau tangan individu tertentu.</li>
          <li><strong>Bencana Alam:</strong> Kejadian alam seperti gempa bumi, banjir, atau kekeringan yang dapat mengurangi ketersediaan sumber daya.</li>
        </ul>

        <h2>3. Hubungan Kebutuhan dan Kelangkaan</h2>
        <p>
          Kebutuhan dan kelangkaan memiliki hubungan yang erat dalam ekonomi. Karena sumber daya yang terbatas, tidak semua kebutuhan dan keinginan manusia dapat dipenuhi. Oleh karena itu, diperlukan keputusan dalam penggunaan sumber daya tersebut.
        </p>

        <h3>Prinsip Dasar:</h3>
        <ul>
          <li><strong>Skala Prioritas:</strong> Mengurutkan kebutuhan berdasarkan tingkat kepentingannya untuk menentukan mana yang harus dipenuhi terlebih dahulu.</li>
          <li><strong>Pilihan Ekonomi:</strong> Keputusan yang diambil individu atau masyarakat dalam menggunakan sumber daya yang terbatas untuk memenuhi kebutuhan.</li>
          <li><strong>Biaya Peluang (Opportunity Cost):</strong> Nilai dari alternatif terbaik yang harus dikorbankan ketika membuat keputusan ekonomi.</li>
        </ul>

        <h2>4. Contoh Kebutuhan dan Kelangkaan</h2>
        <ul>
          <li><strong>Kebutuhan Pangan:</strong> Makanan adalah kebutuhan primer. Kelangkaan dapat terjadi jika hasil panen menurun akibat cuaca ekstrem, sehingga harga makanan naik.</li>
          <li><strong>Kebutuhan Energi:</strong> Listrik dan bahan bakar adalah kebutuhan penting bagi masyarakat modern. Kelangkaan sumber daya energi seperti minyak bumi dapat menyebabkan krisis energi dan kenaikan harga.</li>
        </ul>

        <h2>5. Upaya Mengatasi Kelangkaan</h2>
        <p>
          Beberapa langkah yang dapat diambil untuk mengatasi kelangkaan antara lain:
        </p>
        <ul>
          <li><strong>Konservasi Sumber Daya:</strong> Menggunakan sumber daya alam secara bijaksana dan efisien.</li>
          <li><strong>Inovasi dan Teknologi:</strong> Mengembangkan teknologi baru untuk meningkatkan produksi dan efisiensi.</li>
          <li><strong>Pengelolaan Sumber Daya:</strong> Merencanakan dan mengatur penggunaan sumber daya untuk jangka panjang.</li>
          <li><strong>Pendidikan dan Kesadaran:</strong> Meningkatkan kesadaran masyarakat tentang pentingnya menjaga sumber daya alam.</li>
        </ul>

        <h2>6. Peran Pemerintah dan Masyarakat</h2>
        <h3>Pemerintah:</h3>
        <p>
          Membuat kebijakan untuk mengelola sumber daya, mengatur distribusi, dan mendorong konservasi serta inovasi.
        </p>

        <h3>Masyarakat:</h3>
        <p>
          Berperan aktif dalam menjaga kelestarian lingkungan, menggunakan sumber daya secara bijak, dan mendukung kebijakan pemerintah.
        </p>

        <h2>7. Studi Kasus: Kelangkaan Air</h2>
        <h3>Masalah:</h3>
        <p>
          Beberapa daerah mengalami kelangkaan air bersih karena penurunan tingkat air tanah, polusi, dan perubahan iklim.
        </p>

        <h3>Solusi:</h3>
        <ul>
          <li>Pengelolaan air yang efektif,</li>
          <li>Teknologi pengolahan air,</li>
          <li>Peningkatan kesadaran masyarakat tentang pentingnya menghemat air.</li>
        </ul>
      </>
    ),
  },
  3: {
    title: "Bab 3: Sistem Ekonomi",
    content: (
      <>
        <h2>1. Pengertian Sistem Ekonomi</h2>
        <p>
          Sistem ekonomi adalah cara suatu negara atau masyarakat mengatur dan mengelola sumber dayanya untuk menghasilkan dan mendistribusikan barang dan jasa. Sistem ekonomi menentukan bagaimana keputusan ekonomi dibuat, siapa yang membuat keputusan tersebut, dan bagaimana kekayaan serta sumber daya didistribusikan.
        </p>

        <h2>2. Jenis-Jenis Sistem Ekonomi</h2>
        <h3>a. Sistem Ekonomi Tradisional</h3>
        <p>
          <strong>Ciri-Ciri:</strong><br />
          - Berbasis pada kebiasaan, adat istiadat, dan tradisi.<br />
          - Produksi barang dan jasa dilakukan dengan cara-cara tradisional.<br />
          - Pertukaran barang (barter) tanpa menggunakan uang.
        </p>
        <p>
          <strong>Kelebihan:</strong> Stabil dan tahan lama karena berdasarkan tradisi.<br />
          <strong>Kekurangan:</strong> Kurang efisien dan tidak berkembang pesat.
        </p>

        <h3>b. Sistem Ekonomi Komando (Terpusat)</h3>
        <p>
          <strong>Ciri-Ciri:</strong><br />
          - Pemerintah memiliki kontrol penuh atas ekonomi.<br />
          - Pemerintah menentukan apa, bagaimana, dan untuk siapa barang diproduksi.
        </p>
        <p>
          <strong>Kelebihan:</strong> Pemerataan distribusi kekayaan dan sumber daya.<br />
          <strong>Kekurangan:</strong> Kurangnya insentif bagi inovasi dan efisiensi.
        </p>

        <h3>c. Sistem Ekonomi Pasar</h3>
        <p>
          <strong>Ciri-Ciri:</strong><br />
          - Keputusan ekonomi dibuat oleh individu dan perusahaan berdasarkan mekanisme pasar.<br />
          - Harga barang dan jasa ditentukan oleh penawaran dan permintaan.<br />
          - Kepemilikan pribadi atas sumber daya dan produksi.
        </p>
        <p>
          <strong>Kelebihan:</strong> Efisiensi tinggi, inovasi, dan kebebasan memilih.<br />
          <strong>Kekurangan:</strong> Ketimpangan ekonomi dan kurangnya kontrol terhadap penyalahgunaan kekuatan pasar.
        </p>

        <h3>d. Sistem Ekonomi Campuran</h3>
        <p>
          <strong>Ciri-Ciri:</strong><br />
          - Kombinasi dari sistem ekonomi pasar dan komando.<br />
          - Pemerintah dan sektor swasta berbagi peran dalam membuat keputusan ekonomi.<br />
          - Adanya regulasi pemerintah untuk mengatasi kegagalan pasar.
        </p>
        <p>
          <strong>Kelebihan:</strong> Menggabungkan keuntungan dari kedua sistem, fleksibilitas, dan keadilan.<br />
          <strong>Kekurangan:</strong> Bisa menjadi kompleks dan sulit diatur.
        </p>

        <h2>3. Fungsi Sistem Ekonomi</h2>
        <p>
          Sistem ekonomi berfungsi untuk:<br />
          - Mengalokasikan Sumber Daya: Memutuskan bagaimana sumber daya seperti tanah, tenaga kerja, dan modal digunakan.<br />
          - Mengatur Produksi: Menentukan barang dan jasa apa yang akan diproduksi, berapa banyak, dan bagaimana cara produksinya.<br />
          - Distribusi Barang dan Jasa: Memastikan barang dan jasa sampai ke konsumen yang memerlukannya.<br />
          - Stabilitas Ekonomi: Mengelola inflasi, pengangguran, dan pertumbuhan ekonomi untuk memastikan stabilitas.<br />
          - Inovasi dan Pertumbuhan: Mendorong inovasi, penelitian, dan perkembangan teknologi untuk meningkatkan kemakmuran.
        </p>

        <h2>4. Peran Pemerintah dalam Sistem Ekonomi</h2>
        <p>
          Pemerintah memainkan peran penting dalam hampir semua sistem ekonomi, terutama dalam:<br />
          - Regulasi dan Pengawasan: Mengatur pasar untuk mencegah monopoli dan penyalahgunaan kekuatan pasar.<br />
          - Penyediaan Barang Publik: Menyediakan barang dan jasa yang tidak disediakan oleh sektor swasta, seperti pendidikan, kesehatan, dan infrastruktur.<br />
          - Redistribusi Pendapatan: Melalui pajak dan subsidi untuk mengurangi ketimpangan ekonomi.<br />
          - Stabilisasi Ekonomi: Melalui kebijakan fiskal dan moneter untuk mengatasi inflasi, pengangguran, dan resesi ekonomi.
        </p>

        <h2>5. Perkembangan Sistem Ekonomi di Berbagai Negara</h2>
        <p>
          - Amerika Serikat: Menerapkan sistem ekonomi pasar dengan sedikit campur tangan pemerintah.<br />
          - Cina: Kombinasi antara ekonomi terpusat dan pasar, dikenal sebagai "sosialisme dengan karakteristik Tiongkok".<br />
          - Jerman: Sistem ekonomi campuran dengan keseimbangan antara pasar bebas dan regulasi pemerintah yang kuat.<br />
          - Indonesia: Menggunakan sistem ekonomi campuran, dengan peran penting pemerintah dalam ekonomi namun juga memberi ruang bagi swasta.
        </p>

        <h2>6. Tantangan Sistem Ekonomi Modern</h2>
        <p>
          - Globalisasi: Integrasi ekonomi global membawa tantangan dan peluang baru.<br />
          - Teknologi: Perkembangan teknologi mengubah cara produksi dan distribusi barang dan jasa.<br />
          - Ketimpangan Ekonomi: Menjaga keseimbangan antara pertumbuhan ekonomi dan distribusi yang adil.<br />
          - Sustainabilitas: Mengatasi masalah lingkungan dan memastikan pertumbuhan ekonomi yang berkelanjutan.
        </p>
      </>
    ),
  },
  4: {
    title: "Bab 4: Permintaan dan Penawaran",
    content: (
      <>
        <h2>1. Pengertian Permintaan</h2>
        <p>
          Permintaan adalah jumlah barang atau jasa yang diinginkan oleh konsumen pada berbagai tingkat harga dalam suatu periode waktu tertentu. Permintaan didasarkan pada kemampuan dan keinginan konsumen untuk membeli barang atau jasa.
        </p>
        <h3>Faktor-Faktor yang Mempengaruhi Permintaan:</h3>
        <ul>
          <li><strong>Harga Barang Itu Sendiri:</strong> Ketika harga barang naik, biasanya permintaan akan menurun, dan sebaliknya.</li>
          <li><strong>Pendapatan Konsumen:</strong> Peningkatan pendapatan konsumen cenderung meningkatkan permintaan, sedangkan penurunan pendapatan akan menurunkannya.</li>
          <li><strong>Harga Barang Substitusi:</strong> Jika harga barang substitusi (pengganti) naik, permintaan untuk barang tersebut akan meningkat.</li>
          <li><strong>Selera dan Preferensi:</strong> Perubahan selera dan preferensi konsumen dapat mempengaruhi permintaan.</li>
          <li><strong>Harapan Harga di Masa Depan:</strong> Jika konsumen mengharapkan harga barang naik di masa depan, mereka cenderung membeli lebih banyak sekarang.</li>
        </ul>
        
        <h2>2. Pengertian Penawaran</h2>
        <p>
          Penawaran adalah jumlah barang atau jasa yang tersedia untuk dijual oleh produsen pada berbagai tingkat harga dalam suatu periode waktu tertentu. Penawaran mencerminkan keinginan dan kemampuan produsen untuk menjual barang atau jasa pada berbagai tingkat harga.
        </p>
        <h3>Faktor-Faktor yang Mempengaruhi Penawaran:</h3>
        <ul>
          <li><strong>Harga Barang Itu Sendiri:</strong> Ketika harga barang naik, biasanya penawaran akan meningkat, dan sebaliknya.</li>
          <li><strong>Biaya Produksi:</strong> Peningkatan biaya produksi akan mengurangi penawaran, sementara penurunan biaya produksi akan meningkatkannya.</li>
          <li><strong>Teknologi:</strong> Kemajuan teknologi dapat meningkatkan efisiensi produksi dan meningkatkan penawaran.</li>
          <li><strong>Harga Barang Pengganti:</strong> Jika harga barang pengganti naik, produsen mungkin akan mengalihkan produksi ke barang yang lebih menguntungkan.</li>
          <li><strong>Harapan Harga di Masa Depan:</strong> Jika produsen mengharapkan harga barang naik di masa depan, mereka mungkin menahan stok untuk dijual nanti.</li>
        </ul>

        <h2>3. Hukum Permintaan dan Hukum Penawaran</h2>
        <p><strong>Hukum Permintaan:</strong> Jika harga suatu barang naik, jumlah yang diminta akan turun, dan jika harga turun, jumlah yang diminta akan naik, ceteris paribus (dengan asumsi faktor-faktor lain tetap).</p>
        <p><strong>Hukum Penawaran:</strong> Jika harga suatu barang naik, jumlah yang ditawarkan akan naik, dan jika harga turun, jumlah yang ditawarkan akan turun, ceteris paribus.</p>

        <h2>4. Keseimbangan Pasar</h2>
        <p>
          Keseimbangan pasar terjadi ketika jumlah barang yang diminta sama dengan jumlah barang yang ditawarkan pada suatu tingkat harga tertentu. Titik keseimbangan ini ditentukan oleh perpotongan kurva permintaan dan kurva penawaran.
        </p>
        <h3>Perubahan Keseimbangan:</h3>
        <ul>
          <li><strong>Kenaikan Permintaan:</strong> Jika permintaan naik sementara penawaran tetap, harga keseimbangan akan naik dan jumlah keseimbangan akan meningkat.</li>
          <li><strong>Penurunan Permintaan:</strong> Jika permintaan turun sementara penawaran tetap, harga keseimbangan akan turun dan jumlah keseimbangan akan berkurang.</li>
          <li><strong>Kenaikan Penawaran:</strong> Jika penawaran naik sementara permintaan tetap, harga keseimbangan akan turun dan jumlah keseimbangan akan meningkat.</li>
          <li><strong>Penurunan Penawaran:</strong> Jika penawaran turun sementara permintaan tetap, harga keseimbangan akan naik dan jumlah keseimbangan akan berkurang.</li>
        </ul>

        <h2>5. Elastisitas Permintaan dan Penawaran</h2>
        <h3>Elastisitas Permintaan:</h3>
        <p>Elastisitas permintaan mengukur seberapa sensitif jumlah yang diminta terhadap perubahan harga.</p>
        <ul>
          <li><strong>Permintaan Elastis:</strong> Perubahan kecil pada harga menyebabkan perubahan besar pada jumlah yang diminta.</li>
          <li><strong>Permintaan Inelastis:</strong> Perubahan harga menyebabkan perubahan kecil pada jumlah yang diminta.</li>
        </ul>

        <h3>Elastisitas Penawaran:</h3>
        <p>Elastisitas penawaran mengukur seberapa sensitif jumlah yang ditawarkan terhadap perubahan harga.</p>
        <ul>
          <li><strong>Penawaran Elastis:</strong> Perubahan kecil pada harga menyebabkan perubahan besar pada jumlah yang ditawarkan.</li>
          <li><strong>Penawaran Inelastis:</strong> Perubahan harga menyebabkan perubahan kecil pada jumlah yang ditawarkan.</li>
        </ul>

        <h2>6. Aplikasi Permintaan dan Penawaran</h2>
        <p>Pemahaman tentang permintaan dan penawaran sangat penting dalam pengambilan keputusan ekonomi. Misalnya:</p>
        <ul>
          <li><strong>Pemerintah:</strong> Menggunakan konsep ini untuk menetapkan kebijakan harga dan subsidi.</li>
          <li><strong>Perusahaan:</strong> Menggunakan analisis permintaan dan penawaran untuk strategi penetapan harga dan produksi.</li>
          <li><strong>Konsumen:</strong> Menggunakan pemahaman ini untuk membuat keputusan pembelian.</li>
        </ul>
      </>
    ),
  },

  5: {
    title: "Bab 5: Pasar Persaingan",
    content: (
      <>
        <h2>1. Pengertian Pasar Persaingan</h2>
        <p>
          Pasar persaingan adalah suatu mekanisme di mana penjual dan pembeli bertemu untuk melakukan transaksi barang dan jasa. Dalam ekonomi, pasar persaingan terdiri dari beberapa jenis yang mencerminkan tingkat persaingan antara perusahaan yang ada di dalam pasar tersebut.
        </p>

        <h2>2. Jenis-Jenis Pasar Persaingan</h2>
        <h3>a. Pasar Persaingan Sempurna</h3>
        <p>
          <strong>Ciri-Ciri:</strong>
          <ul>
            <li>Banyak penjual dan pembeli.</li>
            <li>Produk yang ditawarkan homogen.</li>
            <li>Tidak ada hambatan untuk masuk atau keluar pasar.</li>
            <li>Informasi sempurna bagi semua pelaku pasar.</li>
            <li>Harga ditentukan oleh mekanisme pasar.</li>
          </ul>
          <strong>Contoh:</strong> Pasar komoditas seperti pertanian dan bahan baku dasar.
        </p>

        <h3>b. Pasar Persaingan Monopoli</h3>
        <p>
          <strong>Ciri-Ciri:</strong>
          <ul>
            <li>Satu penjual atau produsen yang mendominasi pasar.</li>
            <li>Produk yang unik tanpa substitusi yang dekat.</li>
            <li>Hambatan tinggi untuk masuk pasar.</li>
            <li>Penjual memiliki kontrol penuh atas harga.</li>
          </ul>
          <strong>Contoh:</strong> Perusahaan utilitas publik seperti listrik dan air.
        </p>

        <h3>c. Pasar Persaingan Monopolistik</h3>
        <p>
          <strong>Ciri-Ciri:</strong>
          <ul>
            <li>Banyak penjual dan pembeli.</li>
            <li>Produk yang berbeda-beda tetapi dapat saling menggantikan.</li>
            <li>Hambatan masuk pasar relatif rendah.</li>
            <li>Penjual memiliki sedikit kontrol atas harga.</li>
          </ul>
          <strong>Contoh:</strong> Industri ritel, restoran, dan produk konsumen.
        </p>

        <h3>d. Pasar Oligopoli</h3>
        <p>
          <strong>Ciri-Ciri:</strong>
          <ul>
            <li>Beberapa penjual mendominasi pasar.</li>
            <li>Produk bisa homogen atau berbeda.</li>
            <li>Hambatan masuk pasar tinggi.</li>
            <li>Penjual memiliki kekuatan untuk mempengaruhi harga.</li>
          </ul>
          <strong>Contoh:</strong> Industri otomotif dan telekomunikasi.
        </p>

        <h2>3. Keseimbangan Pasar Persaingan Sempurna</h2>
        <p>
          <strong>Penentuan Harga:</strong> Harga dalam pasar persaingan sempurna ditentukan oleh interaksi antara penawaran dan permintaan.
        </p>
        <p>
          <strong>Kurva Permintaan dan Penawaran:</strong> Dalam pasar persaingan sempurna, kurva permintaan individu adalah horizontal pada tingkat harga pasar karena setiap penjual adalah penerima harga.
        </p>
        <p>
          <strong>Keseimbangan Jangka Pendek dan Jangka Panjang:</strong> Pada jangka pendek, perusahaan dapat memperoleh laba supernormal, tetapi pada jangka panjang, laba tersebut akan diminimalisir karena masuknya perusahaan baru ke pasar.
        </p>

        <h2>4. Keseimbangan Pasar Monopoli</h2>
        <p>
          <strong>Penentuan Harga:</strong> Dalam pasar monopoli, perusahaan monopoli memiliki kekuatan untuk menentukan harga.
        </p>
        <p>
          <strong>Kurva Permintaan:</strong> Kurva permintaan yang dihadapi oleh monopoli miring ke bawah karena monopolis harus menurunkan harga untuk menjual lebih banyak.
        </p>
        <p>
          <strong>Laba Monopoli:</strong> Pada jangka panjang, monopolis dapat memperoleh laba supernormal karena hambatan masuk yang tinggi.
        </p>

        <h2>5. Keseimbangan Pasar Persaingan Monopolistik</h2>
        <p>
          <strong>Penentuan Harga:</strong> Perusahaan dalam pasar persaingan monopolistik memiliki kekuatan untuk mempengaruhi harga karena diferensiasi produk.
        </p>
        <p>
          <strong>Kurva Permintaan:</strong> Mirip dengan monopoli tetapi lebih elastis karena adanya substitusi dekat.
        </p>
        <p>
          <strong>Laba:</strong> Pada jangka pendek, perusahaan dapat memperoleh laba supernormal, tetapi pada jangka panjang, laba tersebut akan hilang karena masuknya perusahaan baru.
        </p>

        <h2>6. Keseimbangan Pasar Oligopoli</h2>
        <p>
          <strong>Penentuan Harga:</strong> Perusahaan dalam pasar oligopoli dapat bekerja sama atau bersaing satu sama lain dalam penentuan harga.
        </p>
        <p>
          <strong>Model:</strong>
          <ul>
            <li><strong>Model Cournot:</strong> Perusahaan menentukan output mereka secara independen dan serentak.</li>
            <li><strong>Model Bertrand:</strong> Perusahaan bersaing berdasarkan harga.</li>
            <li><strong>Model Kinked Demand Curve:</strong> Menjelaskan stabilitas harga dalam oligopoli karena kekakuan harga.</li>
          </ul>
        </p>

        <h2>7. Efisiensi Pasar</h2>
        <p>
          <strong>Efisiensi Alokatif:</strong> Pasar persaingan sempurna mencapai efisiensi alokatif di mana sumber daya dialokasikan sesuai dengan keinginan konsumen.
        </p>
        <p>
          <strong>Efisiensi Produksi:</strong> Dalam pasar persaingan sempurna, perusahaan beroperasi pada biaya terendah mereka dalam jangka panjang.
        </p>
        <p>
          <strong>Ketidakefisienan Monopoli:</strong> Monopoli dapat menyebabkan ketidakefisienan alokatif dan produksi karena harga lebih tinggi dan output lebih rendah dari tingkat efisien.
        </p>

        <h2>8. Peran Pemerintah dalam Pasar Persaingan</h2>
        <p>
          Pemerintah memiliki peran penting dalam mengatur pasar untuk memastikan persaingan yang sehat dan menghindari praktek monopoli. Beberapa tindakan yang dapat diambil oleh pemerintah meliputi:
        </p>
        <ul>
          <li><strong>Kebijakan Anti Monopoli:</strong> Undang-undang yang mencegah praktek monopoli dan promosi persaingan.</li>
          <li><strong>Regulasi Harga:</strong> Intervensi pemerintah untuk mengatur harga dalam industri yang tidak kompetitif.</li>
          <li><strong>Subsidies dan Pajak:</strong> Penggunaan subsidi dan pajak untuk mendukung keseimbangan pasar dan mendistribusikan pendapatan secara lebih adil.</li>
        </ul>

        <h2>9. Kesimpulan</h2>
        <p>
          Pasar persaingan adalah elemen penting dalam ekonomi yang menentukan bagaimana barang dan jasa diproduksi dan didistribusikan. Memahami berbagai jenis pasar persaingan dan mekanismenya membantu kita dalam mengambil keputusan ekonomi yang lebih baik dan memahami peran pemerintah dalam mengatur pasar.
        </p>
      </>
    ),
  },
  6: {
    title: "Bab 6: Uang dan Perbankan",
    content: (
      <>
        <h2>1. Pengertian Uang</h2>
        <p>
          Uang adalah alat tukar yang diterima secara umum untuk transaksi barang dan jasa, serta pembayaran utang. Fungsi utama uang adalah sebagai alat tukar, satuan hitung, penyimpan nilai, dan standar pembayaran yang tertunda.
        </p>

        <h3>Fungsi Uang:</h3>
        <ul>
          <li><strong>Alat Tukar:</strong> Memfasilitasi perdagangan dengan menghilangkan ketergantungan pada sistem barter.</li>
          <li><strong>Satuan Hitung:</strong> Memudahkan penilaian dan perbandingan nilai barang dan jasa.</li>
          <li><strong>Penyimpan Nilai:</strong> Menyimpan daya beli untuk digunakan di masa depan.</li>
          <li><strong>Standar Pembayaran yang Tertunda:</strong> Digunakan untuk pembayaran utang atau transaksi di masa mendatang.</li>
        </ul>

        <h2>2. Jenis-Jenis Uang</h2>
        <h3>a. Uang Kartal</h3>
        <p>
          <strong>Pengertian:</strong> Uang fisik dalam bentuk koin dan uang kertas.
        </p>
        <p>
          <strong>Contoh:</strong> Rupiah, Dolar, Euro.
        </p>

        <h3>b. Uang Giral</h3>
        <p>
          <strong>Pengertian:</strong> Uang yang disimpan dalam rekening bank dan dapat digunakan untuk transaksi melalui cek, bilyet giro, atau transfer elektronik.
        </p>
        <p>
          <strong>Contoh:</strong> Saldo di rekening bank, cek, kartu debit.
        </p>

        <h3>c. Uang Digital</h3>
        <p>
          <strong>Pengertian:</strong> Uang dalam bentuk digital yang dapat digunakan untuk transaksi elektronik.
        </p>
        <p>
          <strong>Contoh:</strong> Cryptocurrency seperti Bitcoin, uang elektronik seperti e-wallet.
        </p>

        <h2>3. Sejarah dan Evolusi Uang</h2>
        <p>
          Uang telah mengalami evolusi dari sistem barter ke uang komoditas, uang kertas, dan akhirnya uang digital. Setiap tahap evolusi membawa kemudahan dan efisiensi dalam transaksi ekonomi.
        </p>

        <h2>4. Pengertian Perbankan</h2>
        <p>
          Perbankan adalah industri yang bergerak dalam kegiatan penerimaan simpanan, pemberian pinjaman, dan penyediaan berbagai layanan keuangan lainnya. Bank berfungsi sebagai perantara keuangan antara deposan dan peminjam.
        </p>

        <h2>5. Jenis-Jenis Bank</h2>
        <h3>a. Bank Sentral</h3>
        <p>
          <strong>Fungsi Utama:</strong> Mengatur dan mengawasi sistem keuangan, mengeluarkan mata uang, mengatur kebijakan moneter, dan menjaga stabilitas ekonomi.
        </p>
        <p>
          <strong>Contoh:</strong> Bank Indonesia, Federal Reserve (AS), European Central Bank (ECB).
        </p>

        <h3>b. Bank Komersial</h3>
        <p>
          <strong>Fungsi Utama:</strong> Menyediakan layanan keuangan kepada individu dan bisnis, termasuk menerima simpanan, memberikan pinjaman, dan layanan investasi.
        </p>
        <p>
          <strong>Contoh:</strong> BCA, Bank Mandiri, HSBC.
        </p>

        <h3>c. Bank Syariah</h3>
        <p>
          <strong>Fungsi Utama:</strong> Menyediakan layanan keuangan sesuai dengan prinsip-prinsip Syariah Islam, seperti larangan riba (bunga).
        </p>
        <p>
          <strong>Contoh:</strong> Bank Syariah Indonesia, Al Rajhi Bank.
        </p>

        <h2>6. Layanan Perbankan</h2>
        <h3>a. Simpanan</h3>
        <p>
          <strong>Jenis:</strong> Tabungan, deposito, giro.
        </p>
        <p>
          <strong>Manfaat:</strong> Menyimpan uang dengan aman dan mendapatkan bunga atau bagi hasil.
        </p>

        <h3>b. Pinjaman</h3>
        <p>
          <strong>Jenis:</strong> Kredit konsumsi, kredit usaha, kredit perumahan.
        </p>
        <p>
          <strong>Manfaat:</strong> Membantu individu dan bisnis mendapatkan dana untuk berbagai kebutuhan.
        </p>

        <h3>c. Layanan Pembayaran</h3>
        <p>
          <strong>Jenis:</strong> Transfer antar bank, pembayaran tagihan, e-banking.
        </p>
        <p>
          <strong>Manfaat:</strong> Memudahkan transaksi keuangan tanpa perlu uang tunai.
        </p>

        <h2>7. Peran Bank dalam Ekonomi</h2>
        <p>
          Bank memainkan peran penting dalam ekonomi, termasuk:
        </p>
        <ul>
          <li><strong>Memfasilitasi Tabungan dan Investasi:</strong> Membantu mengalokasikan dana dari orang yang memiliki surplus kepada mereka yang membutuhkan dana.</li>
          <li><strong>Mendorong Pertumbuhan Ekonomi:</strong> Dengan memberikan pinjaman untuk bisnis dan konsumen.</li>
          <li><strong>Menjaga Stabilitas Keuangan:</strong> Melalui regulasi dan pengawasan oleh bank sentral.</li>
        </ul>

        <h2>8. Kebijakan Moneter</h2>
        <p>
          Kebijakan moneter adalah tindakan yang dilakukan oleh bank sentral untuk mengontrol jumlah uang beredar dan tingkat suku bunga guna mencapai stabilitas ekonomi. Alat-alat kebijakan moneter meliputi:
        </p>
        <ul>
          <li><strong>Operasi Pasar Terbuka:</strong> Membeli atau menjual surat berharga pemerintah untuk mempengaruhi jumlah uang beredar.</li>
          <li><strong>Fasilitas Diskonto:</strong> Menetapkan suku bunga yang dikenakan kepada bank komersial untuk pinjaman jangka pendek dari bank sentral.</li>
          <li><strong>Rasio Cadangan Wajib:</strong> Menetapkan persentase dari simpanan yang harus disimpan oleh bank komersial di bank sentral.</li>
        </ul>

        <h2>9. Inovasi dalam Perbankan</h2>
        <p>
          Perbankan terus berkembang dengan inovasi teknologi yang memperkenalkan layanan baru seperti:
        </p>
        <ul>
          <li><strong>Mobile Banking:</strong> Akses layanan perbankan melalui aplikasi ponsel.</li>
          <li><strong>Fintech:</strong> Layanan keuangan berbasis teknologi yang mencakup pembayaran digital, pinjaman online, dan investasi.</li>
          <li><strong>Blockchain dan Cryptocurrency:</strong> Teknologi desentralisasi yang memungkinkan transaksi lebih aman dan efisien.</li>
        </ul>

        <h2>10. Kesimpulan</h2>
        <p>
          Uang dan perbankan adalah elemen kunci dalam perekonomian yang memfasilitasi transaksi, mendukung pertumbuhan ekonomi, dan menjaga stabilitas keuangan. Pemahaman tentang fungsi uang, jenis-jenis bank, layanan perbankan, serta kebijakan moneter membantu kita dalam mengambil keputusan ekonomi yang lebih baik.
        </p>
      </>
    ),
  },
  7: {
    title: "Bab 7: Inflasi",
    content: (
      <>
        <h2>1. Pengertian Inflasi</h2>
        <p>
          Inflasi adalah proses meningkatnya harga-harga barang dan jasa secara umum dan terus-menerus dalam jangka waktu tertentu. Inflasi menyebabkan daya beli uang menurun, sehingga dengan jumlah uang yang sama, kita bisa membeli barang atau jasa yang lebih sedikit dibandingkan sebelumnya.
        </p>

        <h2>2. Jenis-Jenis Inflasi</h2>
        <h3>a. Berdasarkan Penyebab</h3>
        <ul>
          <li>
            <strong>Demand-Pull Inflation:</strong> Inflasi yang terjadi ketika permintaan agregat dalam perekonomian melebihi kapasitas produksi. Peningkatan permintaan ini mendorong harga-harga naik.
          </li>
          <li>
            <strong>Cost-Push Inflation:</strong> Inflasi yang disebabkan oleh kenaikan biaya produksi, seperti kenaikan harga bahan baku atau upah pekerja. Produsen menaikkan harga barang untuk menutupi biaya produksi yang lebih tinggi.
          </li>
          <li>
            <strong>Built-In Inflation:</strong> Inflasi yang dihasilkan dari ekspektasi inflasi di masa depan. Ketika pekerja dan perusahaan mengharapkan inflasi, mereka menyesuaikan upah dan harga, yang pada gilirannya dapat mendorong inflasi aktual.
          </li>
        </ul>

        <h3>b. Berdasarkan Tingkat Keparahan</h3>
        <ul>
          <li><strong>Inflasi Ringan (Creeping Inflation):</strong> Inflasi dengan tingkat kenaikan harga yang rendah dan stabil, biasanya di bawah 3% per tahun.</li>
          <li><strong>Inflasi Sedang (Walking Inflation):</strong> Inflasi dengan tingkat kenaikan harga yang moderat, biasanya antara 3% hingga 10% per tahun.</li>
          <li><strong>Inflasi Tinggi (Galloping Inflation):</strong> Inflasi dengan tingkat kenaikan harga yang sangat tinggi, biasanya lebih dari 10% per tahun.</li>
          <li><strong>Hiperinflasi (Hyperinflation):</strong> Inflasi yang sangat tinggi dan tidak terkendali, dengan kenaikan harga yang bisa mencapai ratusan atau ribuan persen per tahun.</li>
        </ul>

        <h2>3. Penyebab Inflasi</h2>
        <p>
          Inflasi dapat disebabkan oleh berbagai faktor, termasuk:
        </p>
        <ul>
          <li><strong>Pertumbuhan Permintaan yang Berlebihan:</strong> Peningkatan permintaan barang dan jasa yang tidak diimbangi oleh peningkatan produksi.</li>
          <li><strong>Kenaikan Biaya Produksi:</strong> Peningkatan harga bahan baku, upah, dan energi.</li>
          <li><strong>Kebijakan Moneter:</strong> Jumlah uang beredar yang meningkat secara berlebihan.</li>
          <li><strong>Kebijakan Fiskal:</strong> Pengeluaran pemerintah yang meningkat tanpa diimbangi oleh pendapatan yang cukup.</li>
          <li><strong>Ekspektasi Inflasi:</strong> Ketika masyarakat mengharapkan inflasi di masa depan, mereka mungkin akan bertindak dengan cara yang mempercepat inflasi.</li>
        </ul>

        <h2>4. Dampak Inflasi</h2>
        <p>Inflasi memiliki berbagai dampak pada perekonomian, baik positif maupun negatif.</p>
        <h3>a. Dampak Positif</h3>
        <ul>
          <li><strong>Mengurangi Beban Utang:</strong> Bagi debitur, inflasi dapat mengurangi nilai riil utang mereka.</li>
          <li><strong>Meningkatkan Investasi:</strong> Harapan inflasi dapat mendorong investasi dalam aset riil seperti properti dan saham.</li>
        </ul>

        <h3>b. Dampak Negatif</h3>
        <ul>
          <li><strong>Penurunan Daya Beli:</strong> Inflasi menyebabkan nilai uang menurun, sehingga konsumen dapat membeli lebih sedikit dengan jumlah uang yang sama.</li>
          <li><strong>Ketidakpastian Ekonomi:</strong> Inflasi yang tinggi dan tidak stabil menciptakan ketidakpastian ekonomi, yang dapat menghambat investasi dan pertumbuhan ekonomi.</li>
          <li><strong>Redistribusi Pendapatan yang Tidak Merata:</strong> Inflasi dapat merugikan penerima pendapatan tetap (seperti pensiunan) dan menguntungkan mereka yang memiliki aset riil.</li>
        </ul>

        <h2>5. Pengukuran Inflasi</h2>
        <p>
          Inflasi diukur menggunakan indeks harga, yang mencerminkan perubahan harga rata-rata dari sekumpulan barang dan jasa tertentu.
        </p>
        <ul>
          <li><strong>Indeks Harga Konsumen (IHK):</strong> Mengukur perubahan harga dari barang dan jasa yang dikonsumsi oleh rumah tangga.</li>
          <li><strong>Indeks Harga Produsen (IHP):</strong> Mengukur perubahan harga barang dan jasa pada tingkat produsen.</li>
          <li><strong>Indeks Harga Perdagangan Besar (IHPB):</strong> Mengukur perubahan harga di tingkat grosir atau perdagangan besar.</li>
        </ul>

        <h2>6. Kebijakan Pengendalian Inflasi</h2>
        <p>
          Untuk mengendalikan inflasi, pemerintah dan bank sentral dapat menggunakan berbagai kebijakan, termasuk:
        </p>

        <h3>a. Kebijakan Moneter</h3>
        <ul>
          <li><strong>Kenaikan Suku Bunga:</strong> Meningkatkan suku bunga untuk mengurangi jumlah uang beredar.</li>
          <li><strong>Operasi Pasar Terbuka:</strong> Menjual surat berharga untuk mengurangi likuiditas di pasar.</li>
          <li><strong>Kebijakan Cadangan Wajib:</strong> Meningkatkan cadangan wajib yang harus disimpan oleh bank untuk mengurangi kredit yang diberikan.</li>
        </ul>

        <h3>b. Kebijakan Fiskal</h3>
        <ul>
          <li><strong>Pengurangan Pengeluaran Pemerintah:</strong> Mengurangi pengeluaran pemerintah untuk menurunkan permintaan agregat.</li>
          <li><strong>Peningkatan Pajak:</strong> Meningkatkan pajak untuk mengurangi pendapatan disposable dan, dengan demikian, permintaan.</li>
        </ul>

        <h3>c. Kebijakan Lainnya</h3>
        <ul>
          <li><strong>Kontrol Harga:</strong> Mengendalikan harga barang-barang penting untuk mencegah kenaikan harga yang berlebihan.</li>
          <li><strong>Subsidi:</strong> Memberikan subsidi untuk mengurangi biaya produksi dan menjaga harga tetap rendah.</li>
        </ul>

        <h2>7. Studi Kasus: Inflasi di Berbagai Negara</h2>
        <p>
          <strong>Hiperinflasi di Zimbabwe:</strong> Pada akhir 2000-an, Zimbabwe mengalami hiperinflasi ekstrem dengan tingkat inflasi mencapai miliaran persen, yang menghancurkan ekonomi dan menyebabkan krisis kemanusiaan.
        </p>
        <p>
          <strong>Inflasi di Indonesia:</strong> Indonesia pernah mengalami inflasi tinggi pada akhir 1990-an akibat krisis finansial Asia, yang menyebabkan harga-harga melonjak dan ekonomi mengalami kontraksi.
        </p>

        <h2>8. Kesimpulan</h2>
        <p>
          Inflasi adalah fenomena ekonomi yang kompleks dengan berbagai penyebab dan dampak. Pengelolaan inflasi memerlukan kebijakan yang tepat dari pemerintah dan bank sentral untuk menjaga stabilitas ekonomi dan kesejahteraan masyarakat. Pemahaman tentang inflasi penting bagi individu dan bisnis untuk membuat keputusan ekonomi yang lebih baik.
        </p>
      </>
    ),
  },
  8: {
    title: "Bab 8: Pertumbuhan Ekonomi",
    content: (
      <>
        <h2>1. Pengertian Pertumbuhan Ekonomi</h2>
        <p>
          Pertumbuhan ekonomi adalah peningkatan kapasitas suatu ekonomi untuk memproduksi barang dan jasa dari waktu ke waktu. Pertumbuhan ini diukur melalui peningkatan Produk Domestik Bruto (PDB) atau Produk Nasional Bruto (PNB) dalam suatu periode tertentu.
        </p>

        <h2>2. Indikator Pertumbuhan Ekonomi</h2>
        <p>Beberapa indikator yang umum digunakan untuk mengukur pertumbuhan ekonomi meliputi:</p>
        <ul>
          <li><strong>Produk Domestik Bruto (PDB):</strong> Nilai total semua barang dan jasa yang diproduksi dalam suatu negara dalam satu tahun.</li>
          <li><strong>Produk Nasional Bruto (PNB):</strong> Nilai total semua barang dan jasa yang diproduksi oleh warga negara suatu negara, termasuk yang berada di luar negeri.</li>
          <li><strong>Pendapatan Per Kapita:</strong> PDB atau PNB dibagi dengan jumlah penduduk, menunjukkan rata-rata pendapatan per orang.</li>
        </ul>

        <h2>3. Faktor-Faktor yang Mempengaruhi Pertumbuhan Ekonomi</h2>
        <p>Pertumbuhan ekonomi dipengaruhi oleh berbagai faktor, termasuk:</p>
        <h3>a. Sumber Daya Alam</h3>
        <p>Ketersediaan dan kualitas sumber daya alam seperti tanah, air, mineral, dan energi sangat mempengaruhi kapasitas produksi suatu negara.</p>
        <h3>b. Sumber Daya Manusia</h3>
        <p>Kualitas tenaga kerja yang mencakup pendidikan, keterampilan, dan kesehatan memengaruhi produktivitas dan inovasi.</p>
        <h3>c. Modal Fisik</h3>
        <p>Investasi dalam infrastruktur seperti jalan, jembatan, listrik, dan telekomunikasi meningkatkan efisiensi produksi dan distribusi.</p>
        <h3>d. Teknologi</h3>
        <p>Inovasi dan penerapan teknologi baru meningkatkan produktivitas dan efisiensi produksi.</p>
        <h3>e. Kebijakan Pemerintah</h3>
        <p>Kebijakan ekonomi yang stabil dan mendukung, termasuk kebijakan fiskal, moneter, dan perdagangan, menciptakan lingkungan yang kondusif untuk pertumbuhan.</p>

        <h2>4. Teori-Teori Pertumbuhan Ekonomi</h2>
        <p>Beberapa teori yang menjelaskan pertumbuhan ekonomi antara lain:</p>
        <h3>a. Teori Klasik</h3>
        <ul>
          <li><strong>Adam Smith:</strong> Menyatakan bahwa pertumbuhan ekonomi didorong oleh akumulasi modal dan pertumbuhan tenaga kerja.</li>
          <li><strong>David Ricardo:</strong> Menyatakan bahwa pertumbuhan ekonomi dipengaruhi oleh produktivitas lahan dan keuntungan yang menurun dari penggunaan tanah.</li>
        </ul>
        <h3>b. Teori Neoklasik</h3>
        <ul>
          <li><strong>Robert Solow:</strong> Menyatakan bahwa pertumbuhan ekonomi didorong oleh akumulasi modal, tenaga kerja, dan kemajuan teknologi. Solow juga memperkenalkan konsep fungsi produksi Cobb-Douglas.</li>
        </ul>
        <h3>c. Teori Endogen</h3>
        <ul>
          <li><strong>Paul Romer dan Robert Lucas:</strong> Menyatakan bahwa pertumbuhan ekonomi adalah hasil dari investasi dalam modal manusia, inovasi, dan pengetahuan. Faktor-faktor ini dianggap sebagai endogen atau internal dalam model pertumbuhan.</li>
        </ul>

        <h2>5. Dampak Pertumbuhan Ekonomi</h2>
        <p>Pertumbuhan ekonomi memiliki berbagai dampak, baik positif maupun negatif:</p>
        <h3>a. Dampak Positif</h3>
        <ul>
          <li><strong>Peningkatan Standar Hidup:</strong> Peningkatan pendapatan per kapita dan akses ke barang dan jasa yang lebih baik.</li>
          <li><strong>Pengurangan Kemiskinan:</strong> Menciptakan lapangan kerja dan peluang ekonomi yang mengurangi tingkat kemiskinan.</li>
          <li><strong>Peningkatan Penerimaan Negara:</strong> Meningkatkan pendapatan pajak yang dapat digunakan untuk pembangunan infrastruktur dan layanan publik.</li>
        </ul>

        <h3>b. Dampak Negatif</h3>
        <ul>
          <li><strong>Kerusakan Lingkungan:</strong> Peningkatan produksi dan konsumsi dapat menyebabkan polusi dan degradasi lingkungan.</li>
          <li><strong>Ketimpangan Ekonomi:</strong> Pertumbuhan yang tidak merata dapat menyebabkan ketimpangan pendapatan dan kekayaan.</li>
          <li><strong>Eksploitasi Sumber Daya Alam:</strong> Penggunaan berlebihan sumber daya alam dapat mengurangi ketersediaan sumber daya untuk generasi mendatang.</li>
        </ul>

        <h2>6. Strategi Meningkatkan Pertumbuhan Ekonomi</h2>
        <p>Beberapa strategi yang dapat diterapkan untuk mendorong pertumbuhan ekonomi meliputi:</p>
        <h3>a. Investasi dalam Pendidikan dan Kesehatan</h3>
        <p>Meningkatkan kualitas sumber daya manusia melalui pendidikan dan layanan kesehatan yang lebih baik.</p>
        <h3>b. Peningkatan Infrastruktur</h3>
        <p>Investasi dalam infrastruktur seperti transportasi, komunikasi, dan energi untuk meningkatkan efisiensi produksi dan distribusi.</p>
        <h3>c. Inovasi dan Teknologi</h3>
        <p>Mendorong penelitian dan pengembangan (R&D) serta adopsi teknologi baru untuk meningkatkan produktivitas.</p>
        <h3>d. Kebijakan Ekonomi yang Mendukung</h3>
        <p>Kebijakan fiskal dan moneter yang stabil dan mendukung pertumbuhan ekonomi.</p>
        <h3>e. Diversifikasi Ekonomi</h3>
        <p>Mengembangkan sektor-sektor ekonomi baru untuk mengurangi ketergantungan pada satu sektor tertentu.</p>

        <h2>7. Studi Kasus: Pertumbuhan Ekonomi di Berbagai Negara</h2>
        <p><strong>Cina:</strong> Mengalami pertumbuhan ekonomi yang pesat dalam beberapa dekade terakhir melalui reformasi ekonomi, investasi besar-besaran dalam infrastruktur, dan adopsi teknologi.</p>
        <p><strong>Korea Selatan:</strong> Transformasi dari ekonomi agraris menjadi salah satu negara industri terkemuka melalui pendidikan, inovasi, dan kebijakan pemerintah yang mendukung.</p>

        <h2>8. Kesimpulan</h2>
        <p>
          Pertumbuhan ekonomi adalah kunci untuk meningkatkan kesejahteraan dan standar hidup masyarakat. Meskipun memiliki berbagai manfaat, penting untuk mengelola pertumbuhan ekonomi secara berkelanjutan dan inklusif untuk memastikan manfaatnya dirasakan oleh seluruh lapisan masyarakat dan tidak merusak lingkungan.
        </p>
      </>
    ),
  },
  9: {
    title: "Bab 9: Pembangunan Ekonomi",
    content: (
      <>
        <h2>1. Pengertian Pembangunan Ekonomi</h2>
        <p>
          Pembangunan ekonomi adalah proses yang bertujuan untuk meningkatkan kesejahteraan ekonomi dan kualitas hidup masyarakat melalui peningkatan kapasitas produksi, distribusi, dan konsumsi barang serta jasa. Pembangunan ekonomi tidak hanya mencakup pertumbuhan ekonomi, tetapi juga perbaikan dalam indikator-indikator sosial seperti pendidikan, kesehatan, dan pemerataan pendapatan.
        </p>

        <h2>2. Tujuan Pembangunan Ekonomi</h2>
        <p>Tujuan utama pembangunan ekonomi meliputi:</p>
        <ul>
          <li><strong>Meningkatkan Pendapatan Per Kapita:</strong> Meningkatkan jumlah pendapatan yang dapat dinikmati oleh setiap individu dalam masyarakat.</li>
          <li><strong>Mengurangi Kemiskinan:</strong> Memperbaiki kondisi hidup kelompok masyarakat yang kurang mampu.</li>
          <li><strong>Meningkatkan Kualitas Hidup:</strong> Meningkatkan akses terhadap pendidikan, kesehatan, dan layanan dasar lainnya.</li>
          <li><strong>Menciptakan Lapangan Kerja:</strong> Mengurangi tingkat pengangguran melalui penciptaan pekerjaan baru.</li>
          <li><strong>Memperbaiki Pemerataan Pendapatan:</strong> Mengurangi kesenjangan ekonomi antara kelompok masyarakat yang kaya dan miskin.</li>
        </ul>

        <h2>3. Faktor-Faktor Pembangunan Ekonomi</h2>
        <p>Beberapa faktor penting yang mempengaruhi pembangunan ekonomi meliputi:</p>
        <h3>a. Sumber Daya Alam</h3>
        <p>Ketersediaan sumber daya alam seperti minyak, gas, mineral, air, dan tanah sangat berpengaruh terhadap kapasitas produksi dan pembangunan ekonomi.</p>
        <h3>b. Sumber Daya Manusia</h3>
        <p>Kualitas sumber daya manusia yang mencakup pendidikan, keterampilan, kesehatan, dan produktivitas tenaga kerja merupakan faktor penentu dalam pembangunan ekonomi.</p>
        <h3>c. Infrastruktur</h3>
        <p>Infrastruktur yang memadai seperti jalan, jembatan, pelabuhan, listrik, dan telekomunikasi sangat penting untuk mendukung kegiatan ekonomi.</p>
        <h3>d. Investasi</h3>
        <p>Investasi dalam modal fisik dan manusia merupakan pendorong utama dalam meningkatkan kapasitas produksi dan inovasi.</p>
        <h3>e. Kebijakan Pemerintah</h3>
        <p>Kebijakan ekonomi dan regulasi yang mendukung, stabilitas politik, dan tata kelola pemerintahan yang baik sangat berpengaruh terhadap iklim investasi dan pertumbuhan ekonomi.</p>

        <h2>4. Indikator Pembangunan Ekonomi</h2>
        <p>Beberapa indikator yang digunakan untuk mengukur pembangunan ekonomi meliputi:</p>
        <h3>a. Produk Domestik Bruto (PDB)</h3>
        <p>PDB mengukur nilai total barang dan jasa yang dihasilkan dalam suatu negara dalam satu tahun. PDB per kapita digunakan untuk mengukur pendapatan rata-rata per orang.</p>
        <h3>b. Indeks Pembangunan Manusia (IPM)</h3>
        <p>IPM mengukur kemajuan dalam tiga dimensi dasar pembangunan manusia: umur panjang dan sehat, pengetahuan, dan standar hidup yang layak.</p>
        <h3>c. Tingkat Pengangguran</h3>
        <p>Tingkat pengangguran mengukur persentase angkatan kerja yang tidak memiliki pekerjaan tetapi aktif mencari kerja.</p>
        <h3>d. Tingkat Kemiskinan</h3>
        <p>Tingkat kemiskinan mengukur persentase penduduk yang hidup di bawah garis kemiskinan.</p>

        <h2>5. Tantangan Pembangunan Ekonomi</h2>
        <p>Pembangunan ekonomi menghadapi berbagai tantangan, termasuk:</p>
        <h3>a. Ketimpangan Ekonomi</h3>
        <p>Ketimpangan distribusi pendapatan dan kekayaan dapat menghambat pembangunan ekonomi yang inklusif.</p>
        <h3>b. Kemiskinan</h3>
        <p>Kemiskinan yang meluas menghambat akses terhadap pendidikan, kesehatan, dan peluang ekonomi.</p>
        <h3>c. Degradasi Lingkungan</h3>
        <p>Eksploitasi sumber daya alam yang berlebihan dapat menyebabkan kerusakan lingkungan yang merugikan.</p>
        <h3>d. Kualitas Institusi</h3>
        <p>Korupsi dan tata kelola pemerintahan yang buruk dapat menghambat efektivitas kebijakan pembangunan.</p>

        <h2>6. Strategi Pembangunan Ekonomi</h2>
        <p>Beberapa strategi yang dapat diterapkan untuk mendorong pembangunan ekonomi meliputi:</p>
        <h3>a. Peningkatan Pendidikan dan Kesehatan</h3>
        <p>Investasi dalam pendidikan dan kesehatan untuk meningkatkan kualitas sumber daya manusia.</p>
        <h3>b. Pengembangan Infrastruktur</h3>
        <p>Investasi dalam infrastruktur untuk mendukung kegiatan ekonomi dan meningkatkan aksesibilitas.</p>
        <h3>c. Peningkatan Akses terhadap Keuangan</h3>
        <p>Memperluas akses ke layanan keuangan untuk mendukung usaha kecil dan menengah.</p>
        <h3>d. Diversifikasi Ekonomi</h3>
        <p>Mengembangkan sektor-sektor ekonomi baru untuk mengurangi ketergantungan pada satu sektor tertentu dan menciptakan lapangan kerja.</p>
        <h3>e. Reformasi Kebijakan</h3>
        <p>Implementasi kebijakan ekonomi yang mendukung pertumbuhan inklusif dan berkelanjutan.</p>

        <h2>7. Studi Kasus: Pembangunan Ekonomi di Berbagai Negara</h2>
        <p><strong>Korea Selatan:</strong> Mengalami pertumbuhan dan pembangunan ekonomi yang pesat melalui industrialisasi, investasi dalam pendidikan dan teknologi, serta kebijakan pemerintah yang mendukung.</p>
        <p><strong>Rwanda:</strong> Melakukan reformasi ekonomi pasca konflik yang berhasil mengurangi kemiskinan dan meningkatkan kualitas hidup melalui investasi dalam kesehatan, pendidikan, dan pembangunan infrastruktur.</p>

        <h2>8. Kesimpulan</h2>
        <p>
          Pembangunan ekonomi adalah proses yang kompleks dan multidimensional yang melibatkan peningkatan kapasitas produksi, pemerataan pendapatan, serta perbaikan kualitas hidup masyarakat. Tantangan pembangunan ekonomi memerlukan pendekatan yang holistik dan berkelanjutan untuk mencapai kesejahteraan yang merata bagi seluruh lapisan masyarakat.
        </p>
      </>
    ),
  },
  10: {
    title: "Bab 10: Perdagangan Internasional",
    content: (
      <>
        <h2>1. Manfaat Perdagangan Internasional</h2>
        <p>
          Memperluas pasar, meningkatkan efisiensi, dan mendorong inovasi.
        </p>
        <h2>2. Hambatan Perdagangan</h2>
        <ul>
          <li>Tarif</li>
          <li>Kuota</li>
        </ul>
      </>
    ),
  },
  11: {
    title: "Bab 11: Kebijakan Ekonomi",
    content: (
      <>
        <h2>1. Kebijakan Moneter</h2>
        <p>
          Mengendalikan jumlah uang yang beredar untuk menjaga stabilitas ekonomi.
        </p>
        <h2>2. Kebijakan Fiskal</h2>
        <p>
          Pengelolaan anggaran negara untuk mendukung pertumbuhan ekonomi.
        </p>
      </>
    ),
  },
  12: {
    title: "Bab 12: Globalisasi Ekonomi",
    content: (
      <>
        <h2>1. Definisi Globalisasi Ekonomi</h2>
        <p>
          Integrasi ekonomi dunia melalui perdagangan dan investasi lintas negara.
        </p>
        <h2>2. Dampak Globalisasi</h2>
        <ul>
          <li>Peluang pasar baru</li>
          <li>Persaingan global</li>
        </ul>
      </>
    ),
  },
};

const MateriDetail = () => {
  const { id } = useParams();
  const babDetail = materiDetailContent[id];

  if (!babDetail) {
    return <h1>Materi tidak ditemukan.</h1>;
  }

  return (
    <div className="materi-detail-container">
      <h1>{babDetail.title}</h1>
      <div className="materi-detail-content">{babDetail.content}</div>
    </div>
  );
};

export default MateriDetail;
