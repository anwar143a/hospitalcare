// src/components/UpcomingSchedule.js
import React from 'react';
import '../styles/components/UpcomingSchedule.css';

function UpcomingSchedule() {
  return (
    <div className="upcoming-schedule">
      <h3>The Upcoming Schedule</h3>
      <div className="schedule-day">
        <h4>On Thursday</h4>
        <div className="appointment-card">Health checkup complete - 11:00 AM</div>
        <div className="appointment-card">Ophthalmologist - 14:00 PM</div>
      </div>
      <div className="schedule-day">
        <h4>On Saturday</h4>
        <div className="appointment-card">Cardiologist - 12:00 AM</div>
        <div className="appointment-card">Neurologist - 16:00 PM</div>
      </div>
    </div>
  );
}

export default UpcomingSchedule;

