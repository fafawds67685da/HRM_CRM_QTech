import React, { useState } from 'react';
import './revenueForecast.css';
import FilterBar from './../FilterBar/FilterBar';

import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';

const RevenueForecast = () => {
  const [filters, setFilters] = useState({ from: '', to: '' });

  // Dummy data: forecast revenue by month
  const forecastData = [
    { month: 'Jan', forecast: 50000, target: 45000 },
    { month: 'Feb', forecast: 60000, target: 55000 },
    { month: 'Mar', forecast: 55000, target: 60000 },
    { month: 'Apr', forecast: 70000, target: 65000 },
    { month: 'May', forecast: 75000, target: 70000 },
    { month: 'Jun', forecast: 80000, target: 75000 },
  ];

  return (
    <div className="revenue-forecast-container">
      <h2>Revenue Forecast</h2>

      <FilterBar filters={filters} setFilters={setFilters} />

      <div className="chart-wrapper">
        <ResponsiveContainer width="100%" height={350}>
          <LineChart
            data={forecastData}
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis tickFormatter={(value) => `$${(value / 1000).toLocaleString()}k`} />
            <Tooltip formatter={(value) => `$${value.toLocaleString()}`} />
            <Legend />
            <Line
              type="monotone"
              dataKey="forecast"
              stroke="#0a2540"
              strokeWidth={3}
              activeDot={{ r: 8 }}
              name="Forecast"
            />
            <Line
              type="monotone"
              dataKey="target"
              stroke="#FF8042"
              strokeWidth={3}
              name="Target"
              strokeDasharray="5 5"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default RevenueForecast;
