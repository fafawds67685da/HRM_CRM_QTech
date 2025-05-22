import React from 'react';
import './UpcomingTasks.css';

const tasks = [
  {
    id: 1,
    title: 'Call with Acme Corp',
    datetime: '2025-05-21T10:00:00',
    contact: 'John Doe',
    status: 'Scheduled',
  },
  {
    id: 2,
    title: 'Follow-up email to Beta Ltd',
    datetime: '2025-05-21T14:00:00',
    contact: 'Sarah Smith',
    status: 'Pending',
  },
  {
    id: 3,
    title: 'Demo presentation for Gamma Inc',
    datetime: '2025-05-22T09:30:00',
    contact: 'Michael Brown',
    status: 'Scheduled',
  },
];

function formatDateTime(dateTimeStr) {
  const options = { weekday: 'short', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' };
  return new Date(dateTimeStr).toLocaleString(undefined, options);
}

const UpcomingTasks = () => {
  return (
    <div className="upcoming-tasks-container">
      <h2 className="upcoming-tasks-title">Upcoming Tasks</h2>
      <ul className="tasks-list">
        {tasks.map(({ id, title, datetime, contact, status }) => (
          <li key={id} className="task-item">
            <div className="task-info">
              <p className="task-title">{title}</p>
              <p className="task-contact">{contact}</p>
            </div>
            <div className="task-meta">
              <span className="task-datetime">{formatDateTime(datetime)}</span>
              <span className={`task-status task-status-${status.toLowerCase()}`}>
                {status}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UpcomingTasks;
