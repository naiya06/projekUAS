// src/page/saya.jsx
import React, { useEffect, useState } from 'react';
import './saya.css'; // Impor CSS

const Saya = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [profileImage, setProfileImage] = useState(null); // State untuk gambar profil
  const [isEditing, setIsEditing] = useState(false); // Untuk mengatur tampilan form atau profil

  // Memuat data dari local storage saat komponen dimuat
  useEffect(() => {
    const storedName = localStorage.getItem('name');
    const storedAge = localStorage.getItem('age');
    const storedBirthDate = localStorage.getItem('birthDate');
    const storedImage = localStorage.getItem('profileImage');

    if (storedName) setName(storedName);
    if (storedAge) setAge(storedAge);
    if (storedBirthDate) setBirthDate(storedBirthDate);
    if (storedImage) setProfileImage(storedImage);
  }, []);

  // Menyimpan data ke local storage
  const handleSave = () => {
    localStorage.setItem('name', name);
    localStorage.setItem('age', age);
    localStorage.setItem('birthDate', birthDate);
    localStorage.setItem('profileImage', profileImage); // Simpan gambar profil
    setIsEditing(false); // Beralih ke tampilan profil
  };

  // Mengatur ulang data
  const handleReset = () => {
    setName('');
    setAge('');
    setBirthDate('');
    setProfileImage(null); // Reset gambar profil
  };

  // Mengedit data
  const handleEdit = () => {
    setIsEditing(true); // Kembali ke tampilan form
  };

  // Mengunggah gambar profil
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result); // Set gambar profil
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="saya-container">
      {isEditing ? (
        <>
          <h2>Isi Biodata</h2>
          <div className="bio-info">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Nama"
            />
            <input
              type="number"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              placeholder="Usia"
            />
            <input
              type="date"
              value={birthDate}
              onChange={(e) => setBirthDate(e.target.value)}
            />
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
            />
          </div>
          <button onClick={handleSave}>Simpan</button>
          <button onClick={handleReset}>Reset</button>
        </>
      ) : (
        <>
          <h2>Profil Saya</h2>
          <div className="profile-display">
            {profileImage && <img src={profileImage} alt="Profil" className="profile-image" />}
            <div className="profile-info">
              <h3>{name}</h3>
              <p><strong>Usia:</strong> {age}</p>
              <p><strong>Tanggal Lahir:</strong> {birthDate}</p>
            </div>
          </div>
          <button onClick={handleEdit}>Edit</button>
        </>
      )}
    </div>
  );
};

export default Saya;