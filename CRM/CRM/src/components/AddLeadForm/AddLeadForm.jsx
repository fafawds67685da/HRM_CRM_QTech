import React, { useState } from 'react';
import './AddLeadForm.css';

const AddLeadForm = ({ onCancel, onSave }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    source: '',
    status: 'New',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // For now, just log and call the save callback
    console.log('Lead Saved:', formData);
    onSave(formData);
  };

  return (
    <div className="add-lead-form">
      <h2>Add New Lead</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Full Name*
          <input name="fullName" type="text" required value={formData.fullName} onChange={handleChange} />
        </label>
        <label>
          Email
          <input name="email" type="email" value={formData.email} onChange={handleChange} />
        </label>
        <label>
          Phone
          <input name="phone" type="tel" value={formData.phone} onChange={handleChange} />
        </label>
        <label>
          Company
          <input name="company" type="text" value={formData.company} onChange={handleChange} />
        </label>
        <label>
          Source
          <select name="source" value={formData.source} onChange={handleChange}>
            <option value="">Select</option>
            <option value="Website">Website</option>
            <option value="Referral">Referral</option>
            <option value="Social Media">Social Media</option>
            <option value="Other">Other</option>
          </select>
        </label>
        <label>
          Status
          <select name="status" value={formData.status} onChange={handleChange}>
            <option value="New">New</option>
            <option value="Contacted">Contacted</option>
            <option value="Qualified">Qualified</option>
            <option value="Lost">Lost</option>
          </select>
        </label>
        <div className="form-buttons">
          <button type="submit" className="save-btn">Save Lead</button>
          <button type="button" className="cancel-btn" onClick={onCancel}>Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default AddLeadForm;
