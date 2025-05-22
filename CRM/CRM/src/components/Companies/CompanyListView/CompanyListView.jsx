import React from 'react';
import './companyListView.css';

const CompanyListView = ({ companies }) => {
  if (companies.length === 0) {
    return <p className="no-companies">No companies found. Add a new company.</p>;
  }

  return (
    <div className="company-list-container">
      <table className="company-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Industry</th>
            <th>Location</th>
            <th>Contacts</th>
          </tr>
        </thead>
        <tbody>
          {companies.map((company, idx) => (
            <tr key={idx}>
              <td>{company.name}</td>
              <td>{company.industry}</td>
              <td>{company.location}</td>
              <td>{company.contactsCount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CompanyListView;
