import React, { useState } from 'react';
import './leadAnalytics.css';
import FilterBar from './../FilterBar/FilterBar';

import {
  PieChart, Pie, Cell, Legend, Tooltip,
  BarChart, Bar, XAxis, YAxis, CartesianGrid
} from 'recharts';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const LeadAnalytics = () => {
  const [filters, setFilters] = useState({ from: '', to: '' });

  const leadsBySource = [
    { source: 'Web', count: 120 },
    { source: 'Referral', count: 70 },
    { source: 'Ads', count: 40 },
    { source: 'Organic', count: 30 },
  ];

  const leadsByStage = [
    { stage: 'New', count: 100 },
    { stage: 'Contacted', count: 90 },
    { stage: 'Qualified', count: 45 },
    { stage: 'Lost', count: 25 },
  ];

  const totalLeads = leadsBySource.reduce((acc, cur) => acc + cur.count, 0);
  const conversionRate = totalLeads ? ((leadsByStage.find(l => l.stage === 'Qualified')?.count / totalLeads) * 100).toFixed(1) : 0;

  return (
    <div className="lead-analytics-container">
      <h2>Lead Analytics</h2>

      <FilterBar filters={filters} setFilters={setFilters} />

      <div className="analytics-summary">
        <div className="summary-card">
          <h3>Total Leads</h3>
          <p>{totalLeads}</p>
        </div>
        <div className="summary-card">
          <h3>Conversion Rate</h3>
          <p>{conversionRate}%</p>
        </div>
      </div>

      <div className="charts-section">
        <div className="chart-box">
          <h3>Leads by Source</h3>
          <PieChart width={300} height={300}>
            <Pie
              data={leadsBySource}
              dataKey="count"
              nameKey="source"
              cx="50%"
              cy="50%"
              outerRadius={100}
              label
            >
              {leadsBySource.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend verticalAlign="bottom" height={36} />
          </PieChart>
        </div>
        <div className="chart-box">
          <h3>Leads by Stage</h3>
          <BarChart
            width={400}
            height={300}
            data={leadsByStage}
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="stage" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="count" fill="#0a2540" />
          </BarChart>
        </div>
      </div>
    </div>
  );
};

export default LeadAnalytics;
