// src/components/AddSchoolForm.jsx

import React, { useState } from 'react';
import axios from 'axios';

const AddSchoolForm = () => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!name || !address || !latitude || !longitude) {
      setMessage('All fields are required.');
      return;
    }

    try {
      const payload = {
        name,
        address,
        latitude: parseFloat(latitude),
        longitude: parseFloat(longitude),
      };
      const response = await axios.post('/addSchool', payload);
      setMessage(`✅ School added (ID ${response.data.id}).`);
      // Clear form
      setName('');
      setAddress('');
      setLatitude('');
      setLongitude('');
    } catch (err) {
      console.error(err);
      setMessage(`Error: ${err.response?.data?.error || err.message}`);
    }
  };

  return (
    <div style={{ border: '1px solid #ccc', padding: '1rem', marginBottom: '2rem' }}>
      <h2>Add a New School</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name: </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label>Address: </label>
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <div>
          <label>Latitude: </label>
          <input
            type="number"
            step="any"
            value={latitude}
            onChange={(e) => setLatitude(e.target.value)}
          />
        </div>
        <div>
          <label>Longitude: </label>
          <input
            type="number"
            step="any"
            value={longitude}
            onChange={(e) => setLongitude(e.target.value)}
          />
        </div>

        <button type="submit" style={{ marginTop: '1rem' }}>
          Add School
        </button>
      </form>
      {message && (
        <p style={{ marginTop: '1rem', color: message.startsWith('✅') ? 'green' : 'red' }}>
          {message}
        </p>
      )}
    </div>
  );
};

export default AddSchoolForm;
