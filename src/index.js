import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// Component Imports (updated with correct paths)
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import DashboardMainContent from './components/DashboardMainContent';
import DashboardOverview from './components/DashboardOverview';
import AnatomySection from './components/AnatomySection';
import HealthStatusCards from './components/HealthStatusCards';
import CalendarView from './components/CalendarView'; // Watch for spelling!
import UpcomingSchedule from './components/UpcomingSchedule';
import ActivityFeed from './components/ActivityFeed';
import SimpleAppointmentCard from './components/SimpleAppointmentcard';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
