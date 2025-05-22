import React, { useState } from 'react';
import './filterBar.css';

const FilterBar = ({ onFilterChange }) => {
  const [searchText, setSearchText] = useState('');

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchText(value);
    onFilterChange(value);
  };

  const handleClear = () => {
    setSearchText('');
    onFilterChange('');
  };

  return (
    <div className="filter-bar-container">
      <input
        type="text"
        placeholder="Search contacts..."
        value={searchText}
        onChange={handleInputChange}
        className="filter-input"
      />
      {searchText && (
        <button onClick={handleClear} className="clear-btn" aria-label="Clear search">
          ✕
        </button>
      )}
    </div>
  );
};

export default FilterBar;
