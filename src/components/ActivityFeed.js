import React from 'react';
import '../styles/components/ActivityFeed.css';

const activityData = [
  { day: 'Mon', blue: 40, purple: 70 },
  { day: 'Tue', blue: 60, purple: 30 },
  { day: 'Wed', blue: 50, purple: 80 },
  { day: 'Thu', blue: 70, purple: 60 },
  { day: 'Fri', blue: 90, purple: 40 },
  { day: 'Sat', blue: 30, purple: 70 },
  { day: 'Sun', blue: 60, purple: 50 },
];

function ActivityFeed() {
  return (
    <div className="activity-feed">
      <div className="header">
        <h3>Activity</h3>
        <span className="summary">3 appointments on this week</span>
      </div>

      <div className="chart">
        {activityData.map((item, idx) => (
          <div className="bar-group" key={idx}>
            <div className="bars">
              <div
                className="bar blue"
                style={{ height: `${item.blue}px` }}
              ></div>
              <div
                className="bar purple"
                style={{ height: `${item.purple}px` }}
              ></div>
            </div>
            <span className="day">{item.day}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ActivityFeed;










