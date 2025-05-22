import React from 'react';
import './LeadsKanbanView.css';

const statuses = ['New', 'Contacted', 'Qualified', 'Lost'];

const LeadsKanbanView = ({ leads }) => {
  const leadsByStatus = statuses.reduce((acc, status) => {
    acc[status] = leads.filter(lead => lead.status === status);
    return acc;
  }, {});

  return (
    <div className="kanban-board">
      {statuses.map((status) => (
        <div key={status} className="kanban-column">
          <h3>{status}</h3>
          <div className="kanban-cards">
            {leadsByStatus[status].map((lead, index) => (
              <div key={index} className="kanban-card">
                <h4>{lead.name}</h4>
                <p>{lead.company}</p>
                <small>{lead.contact}</small>
              </div>
            ))}
            {leadsByStatus[status].length === 0 && (
              <div className="empty-column">No leads</div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default LeadsKanbanView;
