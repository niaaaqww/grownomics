import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Registrasi komponen Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Grafik = () => {
  // Data untuk grafik
  const data = {
    labels: ["Minggu 1", "Minggu 2", "Minggu 3", "Minggu 4", "Minggu 5"],
    datasets: [
      {
        label: "Nilai Harian",
        data: [65, 70, 75, 80, 90],
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderWidth: 2,
        tension: 0.4,
      },
    ],
  };

  // Opsi konfigurasi untuk grafik
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Grafik Peningkatan Pembelajaran",
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Minggu",
        },
      },
      y: {
        title: {
          display: true,
          text: "Nilai",
        },
        min: 0,
        max: 100,
      },
    },
  };

  return (
    <div style={{ width: "80%", margin: "auto", padding: "20px" }}>
      <h1>Grafik Peningkatan Pembelajaran</h1>
      <p>Grafik interaktif untuk melihat perkembangan belajar Anda.</p>
      <Line data={data} options={options} />
    </div>
  );
};

export default Grafik;
