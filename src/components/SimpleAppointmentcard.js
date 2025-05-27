import React from 'react';
import '../styles/components/SimpleAppointmentcard.css';

function SimpleAppointmentCard({ title, time }) {
  return (
    <div className="simple-appointment-card">
      <h4>{title}</h4>
      <p>{time}</p>
      {/* Icon */}
    </div>
  );
}

export default SimpleAppointmentCard;