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
            <img src="src\images\Logo Today.png" alt="Logo Today" className="footer-logo" /> {/* Ganti dengan jalur logo yang sesuai */}
          </Link>
          <p>Today</p>
        </div>
        <div className="footer-item">
          <Link to="/catatan">
            <img src="src\images\Logo Catatan.png" alt="Logo Catatan" className="footer-logo" /> {/* Ganti dengan jalur logo yang sesuai */}
          </Link>
          <p>Catatan</p>
        </div>
        <div className="footer-item">
          <Link to="/saya">
            <img src="src\images\logo cewe.png" alt="Logo Saya" className="footer-logo" /> {/* Ganti dengan jalur logo yang sesuai */}
          </Link>
          <p>Saya</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
