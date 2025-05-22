import React, { useState } from 'react';
import './activityReports.css';
import FilterBar from './../FilterBar/FilterBar';

import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  PieChart, Pie, Cell
} from 'recharts';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const ActivityReports = () => {
  const [filters, setFilters] = useState({ from: '', to: '' });

  // Dummy data for activity types
  const activityTypes = [
    { type: 'Calls', count: 40 },
    { type: 'Meetings', count: 25 },
    { type: 'Emails', count: 60 },
    { type: 'Tasks', count: 35 },
  ];

  // Dummy activity trend data over weeks
  const activityTrend = [
    { week: 'Week 1', Calls: 10, Meetings: 5, Emails: 15, Tasks: 8 },
    { week: 'Week 2', Calls: 8, Meetings: 7, Emails: 18, Tasks: 6 },
    { week: 'Week 3', Calls: 12, Meetings: 4, Emails: 13, Tasks: 10 },
    { week: 'Week 4', Calls: 10, Meetings: 9, Emails: 14, Tasks: 11 },
  ];

  const totalActivities = activityTypes.reduce((acc, cur) => acc + cur.count, 0);

  return (
    <div className="activity-reports-container">
      <h2>Activity Reports</h2>

      <FilterBar filters={filters} setFilters={setFilters} />

      <div className="summary-cards">
        <div className="summary-card">
          <h3>Total Activities</h3>
          <p>{totalActivities}</p>
        </div>
      </div>

      <div className="charts-section">
        <div className="chart-box">
          <h3>Activity Breakdown</h3>
          <PieChart width={300} height={300}>
            <Pie
              data={activityTypes}
              dataKey="count"
              nameKey="type"
              cx="50%"
              cy="50%"
              outerRadius={100}
              label
            >
              {activityTypes.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend verticalAlign="bottom" height={36} />
          </PieChart>
        </div>
        <div className="chart-box">
          <h3>Activity Trend (Weekly)</h3>
          <BarChart
            width={500}
            height={300}
            data={activityTrend}
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="week" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="Calls" stackId="a" fill="#0088FE" />
            <Bar dataKey="Meetings" stackId="a" fill="#00C49F" />
            <Bar dataKey="Emails" stackId="a" fill="#FFBB28" />
            <Bar dataKey="Tasks" stackId="a" fill="#FF8042" />
          </BarChart>
        </div>
      </div>
    </div>
  );
};

export default ActivityReports;
