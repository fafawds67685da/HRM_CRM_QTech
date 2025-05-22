import React, { useState } from 'react';
import './profileSettings.css';

const ProfileSettings = () => {
  const [formData, setFormData] = useState({
    fullName: 'John Doe',
    email: 'john.doe@example.com',
    phone: '+1 555-123-4567',
    title: 'Sales Manager',
    profilePic: ''
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'profilePic') {
      setFormData({ ...formData, profilePic: URL.createObjectURL(files[0]) });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Profile updated successfully!');
  };

  return (
    <div className="profile-settings-container">
      <h2>Profile Settings</h2>
      <form onSubmit={handleSubmit} className="profile-form">
        <div className="profile-picture-section">
          <img
            src={formData.profilePic || 'https://via.placeholder.com/100'}
            alt="Profile"
            className="profile-picture"
          />
          <input type="file" name="profilePic" accept="image/*" onChange={handleChange} />
        </div>

        <div className="form-group">
          <label>Full Name</label>
          <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} />
        </div>

        <div className="form-group">
          <label>Email Address</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
        </div>

        <div className="form-group">
          <label>Phone Number</label>
          <input type="text" name="phone" value={formData.phone} onChange={handleChange} />
        </div>

        <div className="form-group">
          <label>Job Title</label>
          <input type="text" name="title" value={formData.title} onChange={handleChange} />
        </div>

        <button type="submit" className="save-btn">Save Changes</button>
      </form>
    </div>
  );
};

export default ProfileSettings;
