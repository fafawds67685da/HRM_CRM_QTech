import React, { useState } from 'react';
import './preferences.css';

const Preferences = () => {
  const [language, setLanguage] = useState('en');
  const [timezone, setTimezone] = useState('UTC');
  const [dateFormat, setDateFormat] = useState('MM/DD/YYYY');
  const [theme, setTheme] = useState('light');
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);

  return (
    <div className="preferences-container">
      <h2>User Preferences</h2>

      <div className="pref-group">
        <label>Language:</label>
        <select value={language} onChange={e => setLanguage(e.target.value)}>
          <option value="en">English</option>
          <option value="es">Spanish</option>
          <option value="hi">Hindi</option>
          <option value="fr">French</option>
        </select>
      </div>

      <div className="pref-group">
        <label>Timezone:</label>
        <select value={timezone} onChange={e => setTimezone(e.target.value)}>
          <option value="UTC">UTC</option>
          <option value="Asia/Kolkata">Asia/Kolkata</option>
          <option value="America/New_York">America/New_York</option>
          <option value="Europe/London">Europe/London</option>
        </select>
      </div>

      <div className="pref-group">
        <label>Date Format:</label>
        <select value={dateFormat} onChange={e => setDateFormat(e.target.value)}>
          <option value="MM/DD/YYYY">MM/DD/YYYY</option>
          <option value="DD/MM/YYYY">DD/MM/YYYY</option>
          <option value="YYYY-MM-DD">YYYY-MM-DD</option>
        </select>
      </div>

      <div className="pref-group">
        <label>Theme:</label>
        <select value={theme} onChange={e => setTheme(e.target.value)}>
          <option value="light">Light</option>
          <option value="dark">Dark</option>
        </select>
      </div>

      <div className="pref-group toggle-row">
        <label>Enable Notifications:</label>
        <input
          type="checkbox"
          checked={notificationsEnabled}
          onChange={() => setNotificationsEnabled(prev => !prev)}
        />
      </div>
    </div>
  );
};

export default Preferences;
