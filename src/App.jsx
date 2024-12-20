// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Today from './page/today';
import Saya from './page/saya';
import Catatan from './page/catatan';
import Footer from './page/footer'; // Impor Footer

const App = () => {
  return (
    <Router>
      <div className="text-center">
        {/* Routing */}
        <Routes>
          <Route path="/" element={<Today />} />
          <Route path="/catatan" element={<Catatan />} />
          <Route path="/saya" element={<Saya />} />
        </Routes>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;