import React from 'react';
import { navigationLinks } from '../data/navigation';
import '../styles/components/Sidebar.css';

function Sidebar() {
  return (
    <aside className="sidebar">
      <h2>General</h2>
      <nav>
        <ul>
          {navigationLinks.map((link, index) => (
            <li key={index}>
              <a href="#">{link.text}</a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;