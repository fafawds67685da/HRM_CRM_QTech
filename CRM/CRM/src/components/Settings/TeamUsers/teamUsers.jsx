import React, { useState } from 'react';
import './teamUsers.css';

const dummyUsers = [
  { id: 1, name: 'Alice Johnson', email: 'alice@example.com', role: 'Admin', active: true },
  { id: 2, name: 'Bob Smith', email: 'bob@example.com', role: 'Sales Rep', active: true },
  { id: 3, name: 'Carol White', email: 'carol@example.com', role: 'Manager', active: false },
];

const TeamUsers = () => {
  const [users, setUsers] = useState(dummyUsers);

  const toggleUserStatus = (id) => {
    setUsers(users.map(user => 
      user.id === id ? { ...user, active: !user.active } : user
    ));
  };

  return (
    <div className="team-users-container">
      <h2>Team & Users</h2>
      <table className="users-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Status</th>
            <th>Toggle</th>
          </tr>
        </thead>
        <tbody>
          {users.map(({ id, name, email, role, active }) => (
            <tr key={id}>
              <td>{name}</td>
              <td>{email}</td>
              <td>{role}</td>
              <td>{active ? 'Active' : 'Inactive'}</td>
              <td>
                <button onClick={() => toggleUserStatus(id)}>
                  {active ? 'Deactivate' : 'Activate'}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TeamUsers;
