import React from 'react';
import profileImg from '../assets/mifta.jpeg';

const Home = () => {
  return (
    <section className="hero">
      <div className="hero__content">
        <p>Hello, my name is</p>
        <h1>Mifta Annisa Rabbani</h1>
        <h2>Mahasiswa Teknologi Informasi</h2>

        <div className="hero__social">
          <span>f</span>
          <span>M</span>
          <span>*</span>
          <span>in</span>
        </div>
      </div>

      <div className="hero__image">
       <img
  src={profileImg}
  alt="Foto Profil"
  className="avatar"
  onError={(e) => {
    e.target.src = "https://via.placeholder.com/150";
  }}
/>
      </div>
    </section>
  );
};

export default Home;