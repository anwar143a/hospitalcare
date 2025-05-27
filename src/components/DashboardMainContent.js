import React from 'react';
import '../styles/components/DashboardMainContent.css';

function DashboardMainContent() {
  return (
    <div className="dashboard-main-content">
      <h2>Dashboard</h2>
      <div className="body-section">
        <img
          src="C:\Users\Shaik AnwarBasha\Downloads\human-body.jpg" // You can replace this with your own image path
          alt="Human Anatomy"
           style={{
          width: '100%',
          maxHeight: '200px',
          objectFit: 'cover',
          borderRadius: '12px',
          marginBottom: '1rem',
        }}
          className="body-image"
        />
        
        <div className="indicator heart">❤️ Healthy Heart</div>
        <div className="indicator leg">🦵 Healthy Leg</div>
      </div>
    </div>
  );
}

export default DashboardMainContent;
