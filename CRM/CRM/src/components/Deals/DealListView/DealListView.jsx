import React from 'react';
import './dealListView.css';

const DealListView = ({ deals }) => {
  return (
    <div className="deal-list-container">
      {deals.length === 0 ? (
        <p className="no-deals">No deals found.</p>
      ) : (
        <table className="deal-table">
          <thead>
            <tr>
              <th>Deal Name</th>
              <th>Amount ($)</th>
              <th>Stage</th>
              <th>Close Date</th>
              <th>Company</th>
              <th>Contact</th>
            </tr>
          </thead>
          <tbody>
            {deals.map(({ id, name, amount, stage, closeDate, company, contact }) => (
              <tr key={id}>
                <td>{name}</td>
                <td>{amount.toLocaleString()}</td>
                <td>{stage}</td>
                <td>{new Date(closeDate).toLocaleDateString()}</td>
                <td>{company}</td>
                <td>{contact}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default DealListView;
