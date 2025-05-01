const express = require('express');
const app = express();
const db = require('./db');
require('dotenv').config();

app.use(express.json());

const PORT = process.env.PORT || 3000;

// Add School API
app.post('/addSchool', (req, res) => {
  const { name, address, latitude, longitude } = req.body;
  if (!name || !address || !latitude || !longitude) {
    return res.status(400).json({ error: 'All fields are required' });
  }
  const sql = 'INSERT INTO schools (name, address, latitude, longitude) VALUES (?, ?, ?, ?)';
  db.query(sql, [name, address, latitude, longitude], (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json({ message: 'School added', id: result.insertId });
  });
});

// List Schools API
app.get('/listSchools', (req, res) => {
  const userLat = parseFloat(req.query.latitude);
  const userLong = parseFloat(req.query.longitude);
  if (!userLat || !userLong) {
    return res.status(400).json({ error: 'Latitude and longitude are required' });
  }

  db.query('SELECT * FROM schools', (err, results) => {
    if (err) return res.status(500).json({ error: err.message });

    const sorted = results.map((school) => {
      const distance = getDistance(userLat, userLong, school.latitude, school.longitude);
      return { ...school, distance };
    }).sort((a, b) => a.distance - b.distance);

    res.json(sorted);
  });
});

// Haversine Distance
function getDistance(lat1, lon1, lat2, lon2) {
  const toRad = (value) => value * Math.PI / 180;
  const R = 6371;
  const dLat = toRad(lat2 - lat1);
  const dLon = toRad(lon2 - lon1);
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) *
    Math.sin(dLon / 2) ** 2;
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
