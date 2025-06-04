// src/components/SchoolList.jsx

import React, { useState } from 'react';
import axios from 'axios';

const SchoolList = () => {
  const [userLat, setUserLat] = useState('');
  const [userLong, setUserLong] = useState('');
  const [schools, setSchools] = useState([]);
  const [error, setError] = useState('');

  const loadSchools = async () => {
    setError('');
    setSchools([]);

    if (!userLat || !userLong) {
      setError('Please enter both latitude and longitude.');
      return;
    }

    try {
      const response = await axios.get(
        `/listSchools?latitude=${parseFloat(userLat)}&longitude=${parseFloat(userLong)}`
      );
      setSchools(response.data);
    } catch (err) {
      console.error(err);
      setError(`Error: ${err.response?.data?.error || err.message}`);
    }
  };

  return (
    <div style={{ border: '1px solid #ccc', padding: '1rem' }}>
      <h2>List Schools by Distance</h2>
      <div>
        <label>Your Latitude: </label>
        <input
          type="number"
          step="any"
          value={userLat}
          onChange={(e) => setUserLat(e.target.value)}
        />
      </div>
      <div>
        <label>Your Longitude: </label>
        <input
          type="number"
          step="any"
          value={userLong}
          onChange={(e) => setUserLong(e.target.value)}
        />
      </div>
      <button onClick={loadSchools} style={{ marginTop: '1rem' }}>
        Load Schools
      </button>
      {error && <p style={{ color: 'red' }}>{error}</p>}

      {schools.length > 0 && (
        <table style={{ width: '100%', marginTop: '2rem', borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              <th style={{ border: '1px solid #ddd', padding: '8px' }}>Name</th>
              <th style={{ border: '1px solid #ddd', padding: '8px' }}>Address</th>
              <th style={{ border: '1px solid #ddd', padding: '8px' }}>Distance (km)</th>
            </tr>
          </thead>
          <tbody>
            {schools.map((sch) => (
              <tr key={sch.id}>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>{sch.name}</td>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>{sch.address}</td>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>
                  {sch.distance.toFixed(2)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default SchoolList;
