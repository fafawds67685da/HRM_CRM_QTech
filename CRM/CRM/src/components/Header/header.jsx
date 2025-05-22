import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="crm-header">
      <div className="logo">
        <h2>CRM Dashboard</h2>
      </div>

      <button className="menu-toggle" onClick={toggleMenu}>
        ☰
      </button>

      <nav className={`nav-tabs ${isOpen ? 'open' : ''}`}>
        <NavLink to="/dashboard" activeclassname="active">Dashboard</NavLink>
        <NavLink to="/leads" activeclassname="active">Leads</NavLink>
        <NavLink to="/contacts" activeclassname="active">Contacts</NavLink>
        <NavLink to="/companies" activeclassname="active">Companies</NavLink>
        <NavLink to="/deals" activeclassname="active">Deals</NavLink>
        <NavLink to="/activities" activeclassname="active">Activities</NavLink>
        <NavLink to="/calendar" activeclassname="active">Calendar</NavLink>
        <NavLink to="/reports" activeclassname="active">Reports</NavLink>
        <NavLink to="/settings" activeclassname="active">Settings</NavLink>
      </nav>
    </header>
  );
};

export default Header;
