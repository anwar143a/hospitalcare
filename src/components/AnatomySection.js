// src/components/AnatomySection.js
import React from 'react';
import '../styles/components/AnatomySection.css';

function AnatomySection() {
  return (
    <section className="anatomy">
      <img src="/images/human-anatomy.png" alt="Human Anatomy" />
      <div className="label heart">❤️ Healthy Heart</div>
      <div className="label leg">🦵 Healthy Leg</div>
    </section>
  );
}

export default AnatomySection;
