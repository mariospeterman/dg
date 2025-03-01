import React from 'react';
import './Services.css';

const Services: React.FC = () => {
  return (
    <section id="services">
      <h2>Unsere Leistungen</h2>
      <div className="service">
        <h3>Hypnose</h3>
        <p>Erleben Sie die transformative Kraft der Hypnose für Ihr Wohlbefinden.</p>
      </div>
      <div className="service">
        <h3>Klangtherapie</h3>
        <p>Tauchen Sie ein in die heilenden Klänge für tiefe Entspannung und Heilung.</p>
      </div>
      <div className="service">
        <h3>Tiefenentspannung</h3>
        <p>Finden Sie zu innerer Ruhe und Gelassenheit durch geführte Tiefenentspannung.</p>
      </div>
    </section>
  );
};

export default Services;
