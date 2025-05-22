import React from 'react';
import './filterBar.css';

const FilterBar = ({ filters, setFilters }) => {
  const handleDateChange = (e) => {
    setFilters(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="filter-bar">
      <label>
        From:
        <input type="date" name="from" value={filters.from} onChange={handleDateChange} />
      </label>
      <label>
        To:
        <input type="date" name="to" value={filters.to} onChange={handleDateChange} />
      </label>
    </div>
  );
};

export default FilterBar;
