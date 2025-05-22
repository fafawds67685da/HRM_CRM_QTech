import React, { useState } from 'react';
import './salesOverview.css';
import FilterBar from './../FilterBar/FilterBar';

import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  BarChart, Bar,
  PieChart, Pie, Cell,
  ResponsiveContainer
} from 'recharts';

const salesOverTimeData = [
  { month: 'Jan', sales: 40000 },
  { month: 'Feb', sales: 35000 },
  { month: 'Mar', sales: 45000 },
  { month: 'Apr', sales: 50000 },
  { month: 'May', sales: 55000 },
  { month: 'Jun', sales: 60000 },
];

const salesByProductData = [
  { product: 'Product A', sales: 24000 },
  { product: 'Product B', sales: 18000 },
  { product: 'Product C', sales: 12000 },
  { product: 'Product D', sales: 9000 },
];

const salesByRegionData = [
  { region: 'North America', value: 40000 },
  { region: 'Europe', value: 25000 },
  { region: 'Asia', value: 15000 },
  { region: 'Other', value: 10000 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const SalesOverview = () => {
  const [filters, setFilters] = useState({ from: '', to: '' });

  // Dummy KPI values
  const totalSales = 125000;
  const dealsClosed = 45;
  const winRate = 0.62;

  // Dummy funnel data
  const funnelStages = [
    { stage: 'Leads', count: 200 },
    { stage: 'Qualified', count: 150 },
    { stage: 'Proposal', count: 60 },
    { stage: 'Closed', count: 45 },
  ];

  return (
    <div className="sales-overview-container">
      <h2>Sales Overview</h2>

      <FilterBar filters={filters} setFilters={setFilters} />

      <div className="kpi-cards">
        <div className="kpi-card">
          <h3>Total Sales</h3>
          <p>${totalSales.toLocaleString()}</p>
        </div>
        <div className="kpi-card">
          <h3>Deals Closed</h3>
          <p>{dealsClosed}</p>
        </div>
        <div className="kpi-card">
          <h3>Win Rate</h3>
          <p>{(winRate * 100).toFixed(1)}%</p>
        </div>
      </div>

      <div className="funnel-chart">
        <h3>Sales Funnel</h3>
        <ul>
          {funnelStages.map(({ stage, count }) => (
            <li key={stage}>
              <span className="stage-name">{stage}</span>
              <span className="stage-count">{count}</span>
              <div
                className="funnel-bar"
                style={{ width: `${(count / funnelStages[0].count) * 100}%` }}
              />
            </li>
          ))}
        </ul>
      </div>

      <div className="charts-container">
        <div className="chart-section">
          <h3>Revenue Trend</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={salesOverTimeData} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis tickFormatter={(value) => `$${(value / 1000).toLocaleString()}k`} />
              <Tooltip formatter={(value) => `$${value.toLocaleString()}`} />
              <Legend />
              <Line
                type="monotone"
                dataKey="sales"
                stroke="#0a2540"
                strokeWidth={3}
                activeDot={{ r: 8 }}
                name="Sales"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="chart-section">
          <h3>Sales by Product</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={salesByProductData} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="product" />
              <YAxis />
              <Tooltip formatter={(value) => `$${value.toLocaleString()}`} />
              <Legend />
              <Bar dataKey="sales" fill="#00C49F" name="Sales" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="chart-section">
          <h3>Sales by Region</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={salesByRegionData}
                dataKey="value"
                nameKey="region"
                cx="50%"
                cy="50%"
                outerRadius={100}
                fill="#8884d8"
                label
              >
                {salesByRegionData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip formatter={(value) => `$${value.toLocaleString()}`} />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default SalesOverview;
