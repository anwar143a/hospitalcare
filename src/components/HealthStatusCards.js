import React from 'react';
import '../styles/components/HealthStatusCards.css';

const healthData = [
  { title: 'Lungs', date: '26 Okt 2021', progress: 70, color: 'red' },
  { title: 'Teeth', date: '26 Okt 2021', progress: 90, color: 'green' },
  { title: 'Bone', date: '26 Okt 2021', progress: 40, color: 'orange' },
];

function HealthStatusCards() {
  return (
    <div className="health-status-cards">
      {healthData.map((item, index) => (
        <div key={index} className="card">
          <h4>{item.title}</h4>
          <p>Date: {item.date}</p>
          <div className="progress-bar">
            <div className="fill" style={{ width: `${item.progress}%`, backgroundColor: item.color }}></div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default HealthStatusCards;

