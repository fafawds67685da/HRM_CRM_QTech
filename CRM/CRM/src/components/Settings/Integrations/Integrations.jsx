import React, { useState } from 'react';
import './integrations.css';

const integrationList = [
  { id: 'gmail', name: 'Gmail', connected: false },
  { id: 'calendar', name: 'Google Calendar', connected: true },
  { id: 'slack', name: 'Slack', connected: false },
  { id: 'zoom', name: 'Zoom', connected: false },
];

const Integrations = () => {
  const [integrations, setIntegrations] = useState(integrationList);

  const toggleConnection = (id) => {
    setIntegrations(prev =>
      prev.map(intg =>
        intg.id === id ? { ...intg, connected: !intg.connected } : intg
      )
    );
  };

  return (
    <div className="integrations-container">
      <h2>Integrations</h2>
      <div className="integration-list">
        {integrations.map(({ id, name, connected }) => (
          <div key={id} className="integration-card">
            <h4>{name}</h4>
            <p>Status: <strong>{connected ? 'Connected' : 'Disconnected'}</strong></p>
            <button
              className={connected ? 'disconnect-btn' : 'connect-btn'}
              onClick={() => toggleConnection(id)}
            >
              {connected ? 'Disconnect' : 'Connect'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Integrations;
