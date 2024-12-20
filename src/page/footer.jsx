// src/page/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './footer.css'; // Pastikan untuk mengimpor CSS

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-logos">
        <div className="footer-item">
          <Link to="/">
            <img src="/path/to/today-logo.png" alt="Logo Today" className="footer-logo" /> {/* Ganti dengan jalur logo yang sesuai */}
          </Link>
          <p>Today</p>
        </div>
        <div className="footer-item">
          <Link to="/catatan">
            <img src="/path/to/catatan-logo.png" alt="Logo Catatan" className="footer-logo" /> {/* Ganti dengan jalur logo yang sesuai */}
          </Link>
          <p>Catatan</p>
        </div>
        <div className="footer-item">
          <Link to="/saya">
            <img src="/path/to/saya-logo.png" alt="Logo Saya" className="footer-logo" /> {/* Ganti dengan jalur logo yang sesuai */}
          </Link>
          <p>Saya</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;