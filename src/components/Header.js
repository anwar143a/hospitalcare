import React from 'react';
import '../styles/components/Header.css';

function Header() {
  return (
    <header className="header">
      <h1>Healthcare.</h1>
      <div className="header-right">
        <input type="text" placeholder="Search" />
        <span>Notifications</span>
        <span>User Profile</span>
        <button>Add</button>
      </div>
    </header>
  );
}

export default Header;