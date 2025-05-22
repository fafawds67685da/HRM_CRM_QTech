import React from 'react';
import './RecentActivities.css';
import { FaPhone, FaEnvelope, FaCalendarAlt, FaStickyNote } from 'react-icons/fa';

const activities = [
  {
    id: 1,
    type: 'call',
    description: 'Called John Doe about contract renewal',
    datetime: '2025-05-19T15:30:00',
    user: 'Alice',
  },
  {
    id: 2,
    type: 'email',
    description: 'Sent proposal email to Beta Ltd',
    datetime: '2025-05-19T14:00:00',
    user: 'Bob',
  },
  {
    id: 3,
    type: 'meeting',
    description: 'Project kickoff meeting with Gamma Inc',
    datetime: '2025-05-18T10:00:00',
    user: 'Charlie',
  },
  {
    id: 4,
    type: 'note',
    description: 'Added notes on Alpha project progress',
    datetime: '2025-05-17T16:45:00',
    user: 'Alice',
  },
];

function formatDateTime(dateTimeStr) {
  const options = { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' };
  return new Date(dateTimeStr).toLocaleString(undefined, options);
}

const iconMap = {
  call: <FaPhone color="#28a745" />,
  email: <FaEnvelope color="#3498db" />,
  meeting: <FaCalendarAlt color="#9b59b6" />,
  note: <FaStickyNote color="#e67e22" />,
};

const RecentActivities = () => {
  return (
    <div className="recent-activities-container">
      <h2 className="recent-activities-title">Recent Activities</h2>
      <ul className="activities-list">
        {activities.map(({ id, type, description, datetime, user }) => (
          <li key={id} className="activity-item">
            <div className="activity-icon">{iconMap[type]}</div>
            <div className="activity-content">
              <p className="activity-desc">{description}</p>
              <span className="activity-meta">
                {formatDateTime(datetime)} &mdash; <strong>{user}</strong>
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentActivities;
