import React from 'react';
import './SalesPipeline.css';

const stages = [
  { name: 'Prospecting', deals: 12, value: 32000, color: '#f39c12' },
  { name: 'Qualified', deals: 9, value: 21000, color: '#3498db' },
  { name: 'Proposal', deals: 5, value: 18500, color: '#9b59b6' },
  { name: 'Negotiation', deals: 3, value: 10000, color: '#e67e22' },
  { name: 'Closed Won', deals: 7, value: 45000, color: '#2ecc71' },
  { name: 'Closed Lost', deals: 4, value: 12000, color: '#e74c3c' },
];

const SalesPipeline = () => {
  return (
    <div className="pipeline-container">
      {stages.map((stage, index) => (
        <div
          key={index}
          className="pipeline-stage"
          style={{ borderTop: `4px solid ${stage.color}` }}
        >
          <h4 className="stage-title">{stage.name}</h4>
          <p className="stage-deals">{stage.deals} deals</p>
          <p className="stage-value">${stage.value.toLocaleString()}</p>
        </div>
      ))}
    </div>
  );
};

export default SalesPipeline;