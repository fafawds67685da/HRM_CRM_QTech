import React, { useState } from 'react';
import './activities.css';

import ActivityFeed from '/src/components/Activities/ActivityFeed/ActivityFeed';
import AddActivityModal from '/src/components/Activities/AddActivityModal/AddActivityModal';
import FilterBar from '/src/components/Activities/FilterBar/FilterBar';

const dummyActivities = [
  {
    id: 1,
    type: 'Call',
    entity: 'Lead',
    relatedTo: 'John Doe',
    note: 'Discussed initial proposal.',
    date: '2025-05-21T10:00:00',
  },
  {
    id: 2,
    type: 'Email',
    entity: 'Contact',
    relatedTo: 'Jane Smith',
    note: 'Sent follow-up email.',
    date: '2025-05-20T15:30:00',
  },
];

const Activities = () => {
  const [activities, setActivities] = useState(dummyActivities);
  const [showModal, setShowModal] = useState(false);
  const [filters, setFilters] = useState({
    from: '',
    to: '',
    type: '',
    entity: '',
  });

  const addActivity = (activity) => {
    setActivities((prev) => [...prev, { ...activity, id: prev.length + 1 }]);
  };

  const applyFilters = (list) => {
    const { from, to, type, entity } = filters;

    return list.filter((a) => {
      const date = new Date(a.date);
      const fromDate = from ? new Date(from) : null;
      const toDate = to ? new Date(to) : null;

      return (
        (!fromDate || date >= fromDate) &&
        (!toDate || date <= toDate) &&
        (!type || a.type === type) &&
        (!entity || a.entity === entity)
      );
    });
  };

  const filteredActivities = applyFilters(activities);

  return (
    <div className="activities-page">
      <div className="activities-header">
        <h2>Activities</h2>
        <button onClick={() => setShowModal(true)}>+ Log Activity</button>
      </div>

      <FilterBar filters={filters} setFilters={setFilters} />
      <ActivityFeed activities={filteredActivities} />

      {showModal && (
        <AddActivityModal
          closeModal={() => setShowModal(false)}
          onSave={addActivity}
        />
      )}
    </div>
  );
};

export default Activities;
