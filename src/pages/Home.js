import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'; // Hanya CSS


const Home = () => {
  return (
    <div className="container text-center my-5">
      <h1 className="display-4 text-primary">Selamat Datang</h1>
      <p className="lead">di Website Pembelajaran Ekonomi</p>
      <div className="input-group w-50 mx-auto my-4">
        <input
          type="text"
          className="form-control"
          placeholder="Cari materi..."
        />
        <button className="btn btn-primary">Cari</button>
      </div>
    </div>
  );
};

export default Home;
