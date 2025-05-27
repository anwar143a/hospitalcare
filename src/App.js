import React from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import DashboardMainContent from './components/DashboardMainContent';
import DashboardOverview from './components/DashboardOverview';
import CalendarView from './components/CalendarView';
import UpcomingSchedule from './components/UpcomingSchedule';
import ActivityFeed from './components/ActivityFeed';
import './styles/App.css'; // Optional: global styles

function App() {
  return (
    <div className="app">
      <Sidebar />

      <main className="main-content">
        <Header />
        
        <section className="dashboard-top">
          <DashboardMainContent />
          <DashboardOverview />
        </section>

        <section className="dashboard-middle">
          <CalendarView />
          <UpcomingSchedule />
        </section>

        <section className="dashboard-bottom">
          <ActivityFeed />
        </section>
      </main>
    </div>
  );
}

export default App;
