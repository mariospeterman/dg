import React, { useState } from 'react';
import './Booking.css';

const Booking: React.FC = () => {
  const [selectedService, setSelectedService] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle booking logic here
    console.log(`Service: ${selectedService}, Date: ${selectedDate}, Time: ${selectedTime}`);
  };

  return (
    <section id="booking">
      <h2>Termin buchen</h2>
      <form onSubmit={handleBooking}>
        <label>Wählen Sie eine Leistung</label>
        <select value={selectedService} onChange={(e) => setSelectedService(e.target.value)} required>
          <option value="">Bitte wählen</option>
          <option value="hypnose">Hypnose</option>
          <option value="klangtherapie">Klangtherapie</option>
          <option value="tiefenentspannung">Tiefenentspannung</option>
        </select>
        <label>Wählen Sie ein Datum</label>
        <input type="date" value={selectedDate} onChange={(e) => setSelectedDate(e.target.value)} required />
        <label>Wählen Sie eine Uhrzeit</label>
        <input type="time" value={selectedTime} onChange={(e) => setSelectedTime(e.target.value)} required />
        <input type="submit" value="Termin buchen" />
      </form>
    </section>
  );
};

export default Booking;
