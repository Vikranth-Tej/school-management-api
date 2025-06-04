const School = require('../models/schoolModel');
const getDistance = require('../utils/distance');

exports.addSchool = (req, res) => {
  const { name, address, latitude, longitude } = req.body;
  if (!name || !address || !latitude || !longitude) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  School.create({ name, address, latitude, longitude }, (err, result) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(201).json({ message: 'School added', id: result.insertId });
  });
};

exports.listSchools = (req, res) => {
  const userLat = parseFloat(req.query.latitude);
  const userLong = parseFloat(req.query.longitude);
  if (isNaN(userLat) || isNaN(userLong)) {
    return res.status(400).json({ error: 'Latitude and longitude required' });
  }

  School.findAll((err, schools) => {
    if (err) return res.status(500).json({ error: err.message });

    const sorted = schools.map((school) => ({
      ...school,
      distance: getDistance(userLat, userLong, school.latitude, school.longitude)
    })).sort((a, b) => a.distance - b.distance);

    res.json(sorted);
  });
};
