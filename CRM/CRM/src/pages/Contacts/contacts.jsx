import React, { useState, useMemo } from 'react';
import './contacts.css';

import AddContactModal from '/src/components/Contacts/AddContactModal/AddContactModal';
import ContactListView from '/src/components/Contacts/ContactListView/ContactListView';
import FilterBar from '/src/components/Contacts/FilterBar/FilterBar';

const initialDummyContacts = [
  {
    name: 'Alice Johnson',
    email: 'alice.johnson@example.com',
    phone: '+1 555 123 4567',
    company: 'Acme Corp',
    role: 'Marketing Manager',
  },
  {
    name: 'Bob Smith',
    email: 'bob.smith@example.com',
    phone: '+1 555 987 6543',
    company: 'Global Solutions',
    role: 'Software Engineer',
  },
  {
    name: 'Charlie Davis',
    email: 'charlie.davis@example.com',
    phone: '+1 555 555 7890',
    company: 'Tech Innovators',
    role: 'Product Owner',
  },
];

const Contacts = () => {
  const [contacts, setContacts] = useState(initialDummyContacts);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [filterText, setFilterText] = useState('');

  const handleAddContact = (newContact) => {
    setContacts([...contacts, newContact]);
    setIsModalOpen(false);
  };

  const filteredContacts = useMemo(() => {
    if (!filterText) return contacts;

    return contacts.filter(({ name, email, company, role }) => {
      const lowerFilter = filterText.toLowerCase();
      return (
        (name && name.toLowerCase().includes(lowerFilter)) ||
        (email && email.toLowerCase().includes(lowerFilter)) ||
        (company && company.toLowerCase().includes(lowerFilter)) ||
        (role && role.toLowerCase().includes(lowerFilter))
      );
    });
  }, [contacts, filterText]);

  return (
    <div className="contacts-container">
      <div className="contacts-header">
        <h2>Contacts</h2>
        <button className="add-contact-btn" onClick={() => setIsModalOpen(true)}>
          + Add Contact
        </button>
      </div>

      <FilterBar onFilterChange={setFilterText} />
      <ContactListView contacts={filteredContacts} />

      {isModalOpen && (
        <AddContactModal
          onClose={() => setIsModalOpen(false)}
          onAddContact={handleAddContact}
        />
      )}
    </div>
  );
};

export default Contacts;
