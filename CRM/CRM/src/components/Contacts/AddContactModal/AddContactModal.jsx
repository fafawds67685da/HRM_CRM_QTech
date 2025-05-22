import React, { useState } from 'react';
import './addContactModal.css';

const AddContactModal = ({ onClose, onAddContact }) => {
  const [contactData, setContactData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    role: '',
  });

  const handleChange = (e) => {
    setContactData({ ...contactData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!contactData.name || !contactData.email) return alert("Name and Email are required!");
    onAddContact(contactData);
    setContactData({ name: '', email: '', phone: '', company: '', role: '' });
  };

  return (
    <div className="add-contact-modal-backdrop">
      <div className="add-contact-modal">
        <h3>Add New Contact</h3>
        <form onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Full Name" value={contactData.name} onChange={handleChange} required />
          <input type="email" name="email" placeholder="Email" value={contactData.email} onChange={handleChange} required />
          <input type="text" name="phone" placeholder="Phone" value={contactData.phone} onChange={handleChange} />
          <input type="text" name="company" placeholder="Company" value={contactData.company} onChange={handleChange} />
          <input type="text" name="role" placeholder="Role / Position" value={contactData.role} onChange={handleChange} />

          <div className="modal-buttons">
            <button type="submit" className="save-btn">Save</button>
            <button type="button" className="cancel-btn" onClick={onClose}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddContactModal;
