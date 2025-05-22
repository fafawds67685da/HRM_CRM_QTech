import React from 'react';
import './filterBar.css';

const FilterBar = ({ filters, setFilters }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  const clearFilters = () => {
    setFilters({
      from: '',
      to: '',
      type: '',
      entity: '',
    });
  };

  return (
    <div className="filter-bar">
      <div className="filter-group">
        <label>
          From:
          <input type="date" name="from" value={filters.from} onChange={handleChange} />
        </label>
        <label>
          To:
          <input type="date" name="to" value={filters.to} onChange={handleChange} />
        </label>
        <label>
          Type:
          <select name="type" value={filters.type} onChange={handleChange}>
            <option value="">All</option>
            <option value="Call">Call</option>
            <option value="Email">Email</option>
            <option value="Meeting">Meeting</option>
            <option value="Note">Note</option>
          </select>
        </label>
        <label>
          Entity:
          <select name="entity" value={filters.entity} onChange={handleChange}>
            <option value="">All</option>
            <option value="Lead">Lead</option>
            <option value="Contact">Contact</option>
            <option value="Deal">Deal</option>
            <option value="Company">Company</option>
          </select>
        </label>
      </div>

      <button className="clear-btn" onClick={clearFilters}>Clear</button>
    </div>
  );
};

export default FilterBar;
