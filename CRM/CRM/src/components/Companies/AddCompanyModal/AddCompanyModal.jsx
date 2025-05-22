import React, { useState } from 'react';
import './addCompanyModal.css';

const AddCompanyModal = ({ onClose, onAddCompany }) => {
  const [companyData, setCompanyData] = useState({
    name: '',
    industry: '',
    location: '',
    contactsCount: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCompanyData((prev) => ({
      ...prev,
      [name]: name === 'contactsCount' ? Number(value) : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!companyData.name) return alert('Company name is required!');
    onAddCompany(companyData);
    setCompanyData({ name: '', industry: '', location: '', contactsCount: 0 });
  };

  return (
    <div className="add-company-modal-backdrop">
      <div className="add-company-modal">
        <h3>Add New Company</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Company Name"
            value={companyData.name}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="industry"
            placeholder="Industry"
            value={companyData.industry}
            onChange={handleChange}
          />
          <input
            type="text"
            name="location"
            placeholder="Location"
            value={companyData.location}
            onChange={handleChange}
          />
          <input
            type="number"
            name="contactsCount"
            placeholder="Number of Contacts"
            value={companyData.contactsCount}
            min={0}
            onChange={handleChange}
          />

          <div className="modal-buttons">
            <button type="submit" className="save-btn">Save</button>
            <button type="button" className="cancel-btn" onClick={onClose}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCompanyModal;
