import React from 'react';
import './activityFeed.css';

const ActivityFeed = ({ activities }) => {
  if (!activities || activities.length === 0) {
    return <p className="no-activities">No activities to display.</p>;
  }

  // Sort activities by date (newest first)
  const sortedActivities = [...activities].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  return (
    <div className="activity-feed">
      {sortedActivities.map((activity) => (
        <div key={activity.id} className="activity-card">
          <div className="activity-header">
            <span className="activity-type">{activity.type}</span>
            <span className="activity-date">
              {new Date(activity.date).toLocaleString()}
            </span>
          </div>
          <div className="activity-body">
            <p className="activity-entity">
              <strong>{activity.entity}:</strong> {activity.relatedTo}
            </p>
            <p className="activity-note">{activity.note}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ActivityFeed;
