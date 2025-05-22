import React, { useState } from 'react';
import './addActivityModal.css';

const AddActivityModal = ({ closeModal, onSave }) => {
  const [formData, setFormData] = useState({
    type: 'Call',
    entity: 'Lead',
    relatedTo: '',
    note: '',
    date: new Date().toISOString().slice(0, 16),
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
    closeModal();
  };

  return (
    <div className="activity-modal-overlay">
      <div className="activity-modal">
        <h3>Log New Activity</h3>
        <form onSubmit={handleSubmit}>
          <label>
            Type
            <select name="type" value={formData.type} onChange={handleChange}>
              <option value="Call">Call</option>
              <option value="Email">Email</option>
              <option value="Meeting">Meeting</option>
              <option value="Note">Note</option>
            </select>
          </label>

          <label>
            Entity
            <select name="entity" value={formData.entity} onChange={handleChange}>
              <option value="Lead">Lead</option>
              <option value="Contact">Contact</option>
              <option value="Deal">Deal</option>
              <option value="Company">Company</option>
            </select>
          </label>

          <label>
            Related To
            <input
              type="text"
              name="relatedTo"
              value={formData.relatedTo}
              onChange={handleChange}
              placeholder="e.g., John Doe"
              required
            />
          </label>

          <label>
            Note
            <textarea
              name="note"
              value={formData.note}
              onChange={handleChange}
              placeholder="Details about the activity..."
              required
            />
          </label>

          <label>
            Date & Time
            <input
              type="datetime-local"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
            />
          </label>

          <div className="modal-actions">
            <button type="submit">Save</button>
            <button type="button" onClick={closeModal} className="cancel-btn">
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddActivityModal;
