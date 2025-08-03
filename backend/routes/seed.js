const express = require('express');
const Doctor = require('../models/Doctor');
const router = express.Router();

// Seed doctors for demo
router.post('/', async (req, res) => {
  await Doctor.deleteMany({});
  await Doctor.insertMany([
    {
      name: 'Dr. Asha Singh', specialization: 'Cardiologist', profileImage: 'https://randomuser.me/api/portraits/women/44.jpg', available: true,
    },
    {
      name: 'Dr. Rajiv Kumar', specialization: 'Dermatologist', profileImage: 'https://randomuser.me/api/portraits/men/46.jpg', available: false,
    },
    {
      name: 'Dr. Priya Mehra', specialization: 'Pediatrician', profileImage: 'https://randomuser.me/api/portraits/women/47.jpg', available: true,
    },
    {
      name: 'Dr. Sunil Sharma', specialization: 'Orthopedic', profileImage: 'https://randomuser.me/api/portraits/men/48.jpg', available: true,
    },
    {
      name: 'Dr. Neha Gupta', specialization: 'Gynecologist', profileImage: 'https://randomuser.me/api/portraits/women/49.jpg', available: false,
    },
    {
      name: 'Dr. Amit Verma', specialization: 'Neurologist', profileImage: 'https://randomuser.me/api/portraits/men/50.jpg', available: true,
    },
    {
      name: 'Dr. Kavita Joshi', specialization: 'ENT Specialist', profileImage: 'https://randomuser.me/api/portraits/women/51.jpg', available: true,
    },
    {
      name: 'Dr. Manoj Patel', specialization: 'General Physician', profileImage: 'https://randomuser.me/api/portraits/men/52.jpg', available: false,
    },
    {
      name: 'Dr. Ritu Agarwal', specialization: 'Psychiatrist', profileImage: 'https://randomuser.me/api/portraits/women/53.jpg', available: true,
    },
    {
      name: 'Dr. Suresh Nair', specialization: 'Urologist', profileImage: 'https://randomuser.me/api/portraits/men/54.jpg', available: true,
    },
  ]);
  res.json({ success: true });
});

module.exports = router;
