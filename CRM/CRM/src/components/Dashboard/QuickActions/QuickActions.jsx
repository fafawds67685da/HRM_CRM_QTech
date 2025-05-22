import React, { useState } from 'react';
import './QuickActions.css';
import { FaUserPlus, FaCalendarPlus, FaEnvelope } from 'react-icons/fa';

import ModalWrapper from '/src/components/ModalWrapper/ModalWrapper';
import AddLeadForm from '/src/components/AddLeadForm/AddLeadForm';


const QuickActions = () => {
  const [showAddForm, setShowAddForm] = useState(false);
  const toggleForm = () => setShowAddForm(!showAddForm);

  const actions = [
    { label: 'Add Lead', icon: <FaUserPlus />, onClick: () => toggleForm() },
    { label: 'Schedule Meeting', icon: <FaCalendarPlus />, onClick: () => alert('Schedule Meeting clicked') },
    { label: 'Send Email', icon: <FaEnvelope />, onClick: () => alert('Send Email clicked') },
  ];

  return (
    <div className="quick-actions-container">
      {actions.map(({ label, icon, onClick }, index) => (
        <button
          key={index}
          className="quick-action-btn"
          onClick={onClick}
          aria-label={label}
        >
          <div className="quick-action-icon">{icon}</div>
          <span className="quick-action-label">{label}</span>
        </button>
      ))}

      {
        showAddForm && (
          <ModalWrapper onClose={toggleForm}>
            <AddLeadForm
              onCancel={toggleForm}
              onSave={(leadData) => {
                console.log('New Lead:', leadData);
                toggleForm();
              }}
            />
          </ModalWrapper>
        )
      }
    </div>
  );
};

export default QuickActions;