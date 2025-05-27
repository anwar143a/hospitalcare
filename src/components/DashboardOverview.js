import React from 'react';
import '../styles/components/DashboardOverview.css';

const healthData = [
  {
    title: 'Lungs',
    date: '26 Oct 2021',
    value: 80,
    color: '#f56565' // red
  },
  {
    title: 'Teeth',
    date: '26 Oct 2021',
    value: 65,
    color: '#48bb78' // green
  },
  {
    title: 'Bone',
    date: '26 Oct 2021',
    value: 40,
    color: '#ed8936' // orange
  }
];

function DashboardOverview() {
  return (
    <div className="dashboard-overview">
      {healthData.map((item, index) => (
        <div className="overview-card" key={index}>
          <h3>{item.title}</h3>
          <p>{item.date}</p>
          <div className="progress-bar">
            <div
              className="filled"
              style={{ width: `${item.value}%`, backgroundColor: item.color }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default DashboardOverview;
