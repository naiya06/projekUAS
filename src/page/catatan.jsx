// src/page/catatan.jsx
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './catatan.css'; // Impor CSS

const Catatan = () => {
  const [date, setDate] = useState(new Date());
  const [selectedDates, setSelectedDates] = useState([]);
  const [mood, setMood] = useState('');
  const [moods] = useState([
    { emoji: '😂', label: 'Tertawa' },
    { emoji: '😊', label: 'Tersenyum' },
    { emoji: '😐', label: 'Cemberut' },
    { emoji: '😡', label: 'Marah' },
    { emoji: '😢', label: 'Nangis' },
  ]);

  const handleDateClick = (value) => {
    const dateString = value.toDateString();
    if (selectedDates.includes(dateString)) {
      // Jika tanggal sudah dipilih, hapus dari daftar
      setSelectedDates(selectedDates.filter(date => date !== dateString));
    } else {
      // Jika tanggal belum dipilih, tambahkan ke daftar
      setSelectedDates([...selectedDates, dateString]);
    }
    setDate(value); // Set tanggal yang dipilih
  };

  const tileClassName = ({ date }) => {
    return selectedDates.includes(date.toDateString()) ? 'selected' : null;
  };

  return (
    <div className="catatan-container">
      <h2>Catatan</h2>
      <div className="calendar-logo">
        <img src="/path/to/calendar-logo.png" alt="Kalender" className="calendar-logo-img" />
        <span className="calendar-title">Kalender</span>
      </div>
      <div className="calendar">
        <Calendar
          onChange={handleDateClick}
          value={date}
          tileClassName={tileClassName} // Tambahkan kelas untuk tanggal yang dipilih
        />
      </div>
      <h3>Pilih Suasana Hati:</h3>
      <div className="mood-container">
        {moods.map((moodItem, index) => (
          <div
            key={index}
            className="mood-item"
            onClick={() => setMood(moodItem.label)}
            title={`Suasana hati: ${moodItem.label}`} // Hover effect
          >
            <span className="emoji">{moodItem.emoji}</span>
          </div>
        ))}
      </div>
      <p>Suasana hati Anda: {mood}</p>
    </div>
  );
};

export default Catatan;