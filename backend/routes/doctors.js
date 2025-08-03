const express = require('express');
const Doctor = require('../models/Doctor');
const router = express.Router();

// Get all doctors or search
router.get('/', async (req, res) => {
  const { search } = req.query;
  let query = {};
  if (search) {
    query = {
      $or: [
        { name: { $regex: search, $options: 'i' } },
        { specialization: { $regex: search, $options: 'i' } },
      ],
    };
  }
  const doctors = await Doctor.find(query);
  res.json(doctors);
});

// Get doctor by ID
router.get('/:id', async (req, res) => {
  const doctor = await Doctor.findById(req.params.id);
  if (!doctor) return res.status(404).json({ error: 'Doctor not found' });
  res.json(doctor);
});

module.exports = router;
