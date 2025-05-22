import React, { useState, useEffect } from 'react';
import './filterBar.css';

const FilterBar = ({ companies, onFilter }) => {
  const [filters, setFilters] = useState({
    name: '',
    industry: '',
    location: '',
  });

  // Extract unique industries and locations from companies for dropdown options
  const industries = [...new Set(companies.map(c => c.industry).filter(Boolean))];
  const locations = [...new Set(companies.map(c => c.location).filter(Boolean))];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  const handleClear = () => {
    setFilters({ name: '', industry: '', location: '' });
  };

  // Call onFilter whenever filters change
  useEffect(() => {
    onFilter(filters);
  }, [filters, onFilter]);

  return (
    <div className="filter-bar">
      <input
        type="text"
        name="name"
        placeholder="Search Company Name"
        value={filters.name}
        onChange={handleChange}
      />
      <select name="industry" value={filters.industry} onChange={handleChange}>
        <option value="">All Industries</option>
        {industries.map((industry) => (
          <option key={industry} value={industry}>
            {industry}
          </option>
        ))}
      </select>
      <select name="location" value={filters.location} onChange={handleChange}>
        <option value="">All Locations</option>
        {locations.map((location) => (
          <option key={location} value={location}>
            {location}
          </option>
        ))}
      </select>
      <button onClick={handleClear} className="clear-filters-btn">Clear Filters</button>
    </div>
  );
};

export default FilterBar;
