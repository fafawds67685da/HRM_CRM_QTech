import React, { useState } from 'react';
import './settings.css';

import ProfileSettings from '/src/components/Settings/ProfileSettings/ProfileSettings';
import AccountSettings from '/src/components/Settings/AccountSettings/AccountSettings';
import TeamUsers from '/src/components/Settings/TeamUsers/TeamUsers';
import Integrations from '/src/components/Settings/Integrations/Integrations';
import Preferences from '/src/components/Settings/Preferences/Preferences';
import SystemSettings from '/src/components/Settings/SystemSettings/SystemSettings';

const Settings = () => {
  const [activeTab, setActiveTab] = useState('profile');

  const renderTabContent = () => {
    switch (activeTab) {
      case 'profile':
        return <ProfileSettings />;
      case 'account':
        return <AccountSettings />;
      case 'team':
        return <TeamUsers />;
      case 'integrations':
        return <Integrations />;
      case 'preferences':
        return <Preferences />;
      case 'system':
        return <SystemSettings />;
      default:
        return null;
    }
  };

  return (
    <div className="settings-container">
      <aside className="settings-sidebar">
        <ul>
          <li className={activeTab === 'profile' ? 'active' : ''} onClick={() => setActiveTab('profile')}>Profile</li>
          <li className={activeTab === 'account' ? 'active' : ''} onClick={() => setActiveTab('account')}>Account</li>
          <li className={activeTab === 'team' ? 'active' : ''} onClick={() => setActiveTab('team')}>Team & Users</li>
          <li className={activeTab === 'integrations' ? 'active' : ''} onClick={() => setActiveTab('integrations')}>Integrations</li>
          <li className={activeTab === 'preferences' ? 'active' : ''} onClick={() => setActiveTab('preferences')}>Preferences</li>
          <li className={activeTab === 'system' ? 'active' : ''} onClick={() => setActiveTab('system')}>System</li>
        </ul>
      </aside>
      <main className="settings-content">
        {renderTabContent()}
      </main>
    </div>
  );
};

export default Settings;
