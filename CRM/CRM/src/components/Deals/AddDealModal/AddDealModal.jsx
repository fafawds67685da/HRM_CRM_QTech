import React, { useState } from 'react';
import './addDealModal.css';

const dealStages = ['Prospecting', 'Qualification', 'Proposal', 'Negotiation', 'Closed Won', 'Closed Lost'];

const AddDealModal = ({ onClose, onAddDeal }) => {
  const [formData, setFormData] = useState({
    name: '',
    amount: '',
    stage: '',
    closeDate: '',
    company: '',
    contact: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation
    if (!formData.name || !formData.amount || !formData.stage || !formData.closeDate) {
      alert('Please fill all required fields.');
      return;
    }

    const newDeal = {
      ...formData,
      amount: parseFloat(formData.amount),
    };

    onAddDeal(newDeal);
  };

  return (
    <div className="modal-overlay">
      <div className="deal-modal">
        <h3>Add New Deal</h3>
        <form onSubmit={handleSubmit} className="deal-form">
          <label>
            Deal Name *
            <input type="text" name="name" value={formData.name} onChange={handleChange} required />
          </label>

          <label>
            Amount ($) *
            <input type="number" name="amount" value={formData.amount} onChange={handleChange} required />
          </label>

          <label>
            Stage *
            <select name="stage" value={formData.stage} onChange={handleChange} required>
              <option value="">Select Stage</option>
              {dealStages.map((stage) => (
                <option key={stage} value={stage}>{stage}</option>
              ))}
            </select>
          </label>

          <label>
            Close Date *
            <input type="date" name="closeDate" value={formData.closeDate} onChange={handleChange} required />
          </label>

          <label>
            Company
            <input type="text" name="company" value={formData.company} onChange={handleChange} />
          </label>

          <label>
            Contact Person
            <input type="text" name="contact" value={formData.contact} onChange={handleChange} />
          </label>

          <div className="modal-buttons">
            <button type="submit">Add Deal</button>
            <button type="button" className="cancel-btn" onClick={onClose}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddDealModal;
