import React, { useState } from 'react';
import './systemSettings.css';

const SystemSettings = () => {
  const [systemName, setSystemName] = useState('MyCRM');
  const [currency, setCurrency] = useState('USD');
  const [language, setLanguage] = useState('en');
  const [fiscalStart, setFiscalStart] = useState('01-01');
  const [smtpHost, setSmtpHost] = useState('');
  const [smtpPort, setSmtpPort] = useState('');
  const [smtpEmail, setSmtpEmail] = useState('');
  const [smtpPassword, setSmtpPassword] = useState('');
  const [enable2FA, setEnable2FA] = useState(false);
  const [sessionTimeout, setSessionTimeout] = useState(30);

  return (
    <div className="system-settings-container">
      <h2>System Settings</h2>

      <section className="settings-section">
        <h3>General Configuration</h3>
        <label>System Name</label>
        <input value={systemName} onChange={e => setSystemName(e.target.value)} />

        <label>Default Currency</label>
        <select value={currency} onChange={e => setCurrency(e.target.value)}>
          <option value="USD">USD</option>
          <option value="INR">INR</option>
          <option value="EUR">EUR</option>
        </select>

        <label>Default Language</label>
        <select value={language} onChange={e => setLanguage(e.target.value)}>
          <option value="en">English</option>
          <option value="fr">French</option>
          <option value="hi">Hindi</option>
        </select>

        <label>Fiscal Year Start</label>
        <input type="month" value={fiscalStart} onChange={e => setFiscalStart(e.target.value)} />
      </section>

      <section className="settings-section">
        <h3>Email Settings</h3>
        <label>SMTP Host</label>
        <input value={smtpHost} onChange={e => setSmtpHost(e.target.value)} />

        <label>SMTP Port</label>
        <input type="number" value={smtpPort} onChange={e => setSmtpPort(e.target.value)} />

        <label>Sender Email</label>
        <input value={smtpEmail} onChange={e => setSmtpEmail(e.target.value)} />

        <label>SMTP Password</label>
        <input type="password" value={smtpPassword} onChange={e => setSmtpPassword(e.target.value)} />
      </section>

      <section className="settings-section">
        <h3>Security Settings</h3>
        <label>
          Enable 2FA
          <input type="checkbox" checked={enable2FA} onChange={() => setEnable2FA(prev => !prev)} />
        </label>

        <label>Session Timeout (minutes)</label>
        <input type="number" value={sessionTimeout} onChange={e => setSessionTimeout(e.target.value)} />
      </section>
    </div>
  );
};

export default SystemSettings;
