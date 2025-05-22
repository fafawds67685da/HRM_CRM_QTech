import React from 'react';
import './dealKanbanView.css';

const stages = ['Prospecting', 'Qualification', 'Proposal', 'Negotiation', 'Closed Won', 'Closed Lost'];

const DealKanbanView = ({ deals }) => {
  const stageDeals = (stage) => deals.filter((deal) => deal.stage === stage);

  return (
    <div className="kanban-container">
      {stages.map((stage) => (
        <div key={stage} className="kanban-column">
          <h3 className="kanban-column-title">{stage}</h3>
          <div className="kanban-cards">
            {stageDeals(stage).map((deal) => (
              <div key={deal.id} className="kanban-card">
                <h4>{deal.name}</h4>
                <p><strong>${deal.amount.toLocaleString()}</strong></p>
                <p>{deal.company}</p>
                <p className="kanban-date">Close: {new Date(deal.closeDate).toLocaleDateString()}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default DealKanbanView;
