import React from 'react';
import './dealsFilterBar.css';

const DealsFilterBar = ({ filters, setFilters, availableStages }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleReset = () => {
    setFilters({ stage: '', contact: '' });
  };

  return (
    <div className="deals-filter-bar">
      <select name="stage" value={filters.stage} onChange={handleChange}>
        <option value="">All Stages</option>
        {availableStages.map((stage) => (
          <option key={stage} value={stage}>
            {stage}
          </option>
        ))}
      </select>

      <select name="contact" value={filters.contact} onChange={handleChange}>
        <option value="">All Contacts</option>
        <option value="John Doe">John Doe</option>
        <option value="Jane Smith">Jane Smith</option>
      </select>

      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default DealsFilterBar;
