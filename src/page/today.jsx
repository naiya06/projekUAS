// src/page/Today.jsx
import React, { useState } from 'react';
import './today.css'; // Pastikan untuk mengimpor CSS

const articles = [
  {
    id: 1,
    title: "Edukasi Menstruasi",
    image: "/path/to/image1.jpg", // Ganti dengan jalur gambar yang sesuai
    description: "Informasi dasar tentang menstruasi dan siklus haid."
  },
  {
    id: 2,
    title: "Kesehatan Reproduksi",
    image: "/path/to/image2.jpg",
    description: "Pentingnya menjaga kesehatan reproduksi selama menstruasi."
  },
  {
    id: 3,
    title: "Nutrisi Selama Menstruasi",
    image: "/path/to/image3.jpg",
    description: "Makanan yang baik untuk dikonsumsi saat menstruasi."
  },
  {
    id: 4,
    title: "Cemilan Untuk Meredakan Nyeri Menstruasi",
    image: "src\images\cemilan untuk meredakan nyeri.png",
    description: "bvjhfy"
  },
  {
    id: 5,
    title: "Menstruasi dan Olahraga",
    image: "/path/to/image5.jpg",
    description: "Bagaimana berolahraga dapat membantu saat menstruasi."
  },
  {
    id: 6,
    title: "Menstruasi dan Kesehatan Mental",
    image: "/path/to/image6.jpg",
    description: "Hubungan antara menstruasi dan kesehatan mental."
  },
];

const Today = () => {
  const [selectedArticle, setSelectedArticle] = useState(null);

  const handleArticleClick = (article) => {
    setSelectedArticle(article);
  };

  const handleClose = () => {
    setSelectedArticle(null);
  };

  return (
    <div className="today-container">
      <h2>Edukasi Menstruasi</h2>
      <div className="articles">
        {articles.map((article) => (
          <div
            key={article.id}
            className="article-item"
            onClick={() => handleArticleClick(article)}
          >
            <img src={article.image} alt={article.title} className="article-image" />
            <h3>{article.title}</h3>
          </div>
        ))}
      </div>

      {selectedArticle && (
        <div className="article-modal">
          <div className="modal-content">
            <span className="close" onClick={handleClose}>&times;</span>
            <h3>{selectedArticle.title}</h3>
            <img src={selectedArticle.image} alt={selectedArticle.title} className="modal-image" />
            <p>{selectedArticle.description}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Today;