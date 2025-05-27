// src/components/CalendarView.js
import React from 'react';
import '../styles/components/CalendarView.css';

function CalendarView() {
  return (
    <div className="calendar-view">
      <h3>October 2021</h3>
      <div className="calendar-days">
        {['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'].map((day, index) => (
          <div className="calendar-day" key={index}>
            <span>{day}</span>
            <div className="calendar-date">{25 + index}</div>
            {/* Add time slots as needed */}
          </div>
        ))}
      </div>
      <div className="appointments">
        <div className="appointment dentist">
          <strong>Dentist</strong>
          <p>09:00-11:00<br/>Dr. Cameron Williamson</p>
        </div>
        <div className="appointment physio">
          <strong>Physiotherapy Appointment</strong>
          <p>11:00-12:00<br/>Dr. Kevin Djones</p>
        </div>
      </div>
    </div>
  );
}

export default CalendarView;

