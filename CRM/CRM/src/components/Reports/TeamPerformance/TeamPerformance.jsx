import React, { useState } from 'react';
import './teamPerformance.css';
import FilterBar from './../FilterBar/FilterBar';

import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  ResponsiveContainer
} from 'recharts';

const TeamPerformance = () => {
  const [filters, setFilters] = useState({ from: '', to: '' });

  // Dummy data: team members and their closed deals count
  const teamData = [
    { name: 'Alice', dealsClosed: 15, callsMade: 50, tasksCompleted: 30 },
    { name: 'Bob', dealsClosed: 12, callsMade: 45, tasksCompleted: 25 },
    { name: 'Charlie', dealsClosed: 20, callsMade: 60, tasksCompleted: 35 },
    { name: 'Diana', dealsClosed: 10, callsMade: 40, tasksCompleted: 20 },
  ];

  return (
    <div className="team-performance-container">
      <h2>Team Performance</h2>

      <FilterBar filters={filters} setFilters={setFilters} />

      <div className="chart-wrapper">
        <ResponsiveContainer width="100%" height={350}>
          <BarChart
            data={teamData}
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            barCategoryGap="20%"
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="dealsClosed" fill="#0a2540" name="Deals Closed" />
            <Bar dataKey="callsMade" fill="#00C49F" name="Calls Made" />
            <Bar dataKey="tasksCompleted" fill="#FFBB28" name="Tasks Completed" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default TeamPerformance;
