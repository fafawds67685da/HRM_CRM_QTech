import React, { useState } from 'react';
import './accountSettings.css';

const AccountSettings = () => {
  const [formData, setFormData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
    twoFactorEnabled: false
  });

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handlePasswordUpdate = (e) => {
    e.preventDefault();
    if (formData.newPassword !== formData.confirmPassword) {
      setMessage('Passwords do not match.');
      return;
    }
    // Normally, send formData.currentPassword and formData.newPassword to backend
    setMessage('Password updated successfully.');
  };

  const handle2FAToggle = () => {
    setFormData((prev) => ({
      ...prev,
      twoFactorEnabled: !prev.twoFactorEnabled
    }));
    setMessage(
      !formData.twoFactorEnabled
        ? '2FA has been enabled.'
        : '2FA has been disabled.'
    );
  };

  return (
    <div className="account-settings-container">
      <h2>Account Settings</h2>

      {message && <div className="account-message">{message}</div>}

      <form onSubmit={handlePasswordUpdate} className="account-form">
        <div className="form-group">
          <label>Current Password</label>
          <input
            type="password"
            name="currentPassword"
            value={formData.currentPassword}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>New Password</label>
          <input
            type="password"
            name="newPassword"
            value={formData.newPassword}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Confirm New Password</label>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="save-btn">Update Password</button>
      </form>

      <div className="two-factor-toggle">
        <label>
          <input
            type="checkbox"
            name="twoFactorEnabled"
            checked={formData.twoFactorEnabled}
            onChange={handle2FAToggle}
          />
          Enable Two-Factor Authentication (2FA)
        </label>
      </div>
    </div>
  );
};

export default AccountSettings;
