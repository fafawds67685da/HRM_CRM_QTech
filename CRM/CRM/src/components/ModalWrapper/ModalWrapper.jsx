import React from 'react';
import './ModalWrapper.css';

const ModalWrapper = ({ children, onClose }) => {
  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-container" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>&times;</button>
        {children}
      </div>
    </div>
  );
};

export default ModalWrapper;
