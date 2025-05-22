import React from 'react';
import './NotificationsPanel.css';
import { FaInfoCircle, FaExclamationTriangle, FaCheckCircle, FaTimesCircle } from 'react-icons/fa';

const notifications = [
  {
    id: 1,
    type: 'info',
    message: 'New user signed up: Jane Doe',
    datetime: '2025-05-20T09:30:00',
  },
  {
    id: 2,
    type: 'warning',
    message: 'Payment method expiring soon',
    datetime: '2025-05-19T16:00:00',
  },
  {
    id: 3,
    type: 'success',
    message: 'Deal closed with Acme Corp',
    datetime: '2025-05-19T14:45:00',
  },
  {
    id: 4,
    type: 'error',
    message: 'Failed to send email to Beta Ltd',
    datetime: '2025-05-18T11:15:00',
  },
];

// Helper to format relative time (simple)
function timeAgo(dateString) {
  const now = new Date();
  const past = new Date(dateString);
  const diffSec = Math.floor((now - past) / 1000);

  if (diffSec < 60) return `${diffSec}s ago`;
  if (diffSec < 3600) return `${Math.floor(diffSec / 60)}m ago`;
  if (diffSec < 86400) return `${Math.floor(diffSec / 3600)}h ago`;
  return `${Math.floor(diffSec / 86400)}d ago`;
}

const iconMap = {
  info: <FaInfoCircle color="#3498db" />,
  warning: <FaExclamationTriangle color="#f39c12" />,
  success: <FaCheckCircle color="#28a745" />,
  error: <FaTimesCircle color="#e74c3c" />,
};

const NotificationsPanel = () => {
  return (
    <div className="notifications-panel-container">
      <h2 className="notifications-panel-title">Notifications</h2>
      <ul className="notifications-list">
        {notifications.map(({ id, type, message, datetime }) => (
          <li key={id} className={`notification-item notification-${type}`}>
            <span className="notification-icon">{iconMap[type]}</span>
            <div className="notification-content">
              <p className="notification-message">{message}</p>
              <span className="notification-time">{timeAgo(datetime)}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NotificationsPanel;
