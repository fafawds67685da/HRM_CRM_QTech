import React from 'react';
import './TrendSnapshot.css';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { date: 'Mon', value: 1200 },
  { date: 'Tue', value: 2100 },
  { date: 'Wed', value: 800 },
  { date: 'Thu', value: 1600 },
  { date: 'Fri', value: 900 },
  { date: 'Sat', value: 1700 },
  { date: 'Sun', value: 2300 },
];

const TrendSnapshot = () => {
  // Calculate total and percentage change for example
  const total = data.reduce((acc, curr) => acc + curr.value, 0);
  const pctChange = (((data[data.length - 1].value - data[0].value) / data[0].value) * 100).toFixed(1);

  return (
    <div className="trend-snapshot-container">
      <div className="trend-summary">
        <h3>Total Sales</h3>
        <p className="total-value">${total.toLocaleString()}</p>
        <p className={`pct-change ${pctChange >= 0 ? 'positive' : 'negative'}`}>
          {pctChange >= 0 ? '▲' : '▼'} {Math.abs(pctChange)}%
        </p>
      </div>
      <ResponsiveContainer width="100%" height={80}>
        <LineChart data={data} margin={{ top: 0, right: 10, bottom: 0, left: 0 }}>
          <XAxis dataKey="date" hide />
          <YAxis hide domain={['auto', 'auto']} />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="value"
            stroke={pctChange >= 0 ? '#28a745' : '#e74c3c'}
            strokeWidth={2}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default TrendSnapshot;
