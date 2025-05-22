import React from 'react';
import './contactListView.css';

const ContactListView = ({ contacts }) => {
  if (contacts.length === 0) {
    return <p className="no-contacts">No contacts available. Add a contact to get started.</p>;
  }

  return (
    <div className="contact-list-container">
      <table className="contact-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Company</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact, index) => (
            <tr key={index}>
              <td>{contact.name}</td>
              <td>{contact.email}</td>
              <td>{contact.phone}</td>
              <td>{contact.company}</td>
              <td>{contact.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ContactListView;
