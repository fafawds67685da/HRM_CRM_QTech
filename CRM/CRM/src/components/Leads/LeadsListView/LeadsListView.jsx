import React from 'react';
import './LeadsListView.css';

const LeadsListView = ({ leads }) => {
  return (
    <div className="leads-list-view">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Company</th>
            <th>Status</th>
            <th>Source</th>
            <th>Contact</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {leads && leads.length > 0 ? (
            leads.map((lead, index) => (
              <tr key={index}>
                <td>{lead.name}</td>
                <td>{lead.company}</td>
                <td>{lead.status}</td>
                <td>{lead.source}</td>
                <td>{lead.contact}</td>
                <td>
                  <button className="view-btn">View</button>
                  <button className="edit-btn">Edit</button>
                  <button className="delete-btn">Delete</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6" className="no-data">No leads available</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default LeadsListView;
