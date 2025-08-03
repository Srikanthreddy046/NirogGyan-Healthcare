const express = require('express');
const Appointment = require('../models/Appointment');
const router = express.Router();

// Book appointment
router.post('/', async (req, res) => {
  const { doctorId, patientName, email, dateTime } = req.body;
  const appointment = new Appointment({ doctorId, patientName, email, dateTime });
  await appointment.save();
  res.json({ success: true, appointment });
});

// Get all appointments
router.get('/', async (req, res) => {
  const appointments = await Appointment.find({});
  res.json(appointments);
});

// Delete appointment by ID
router.delete('/:id', async (req, res) => {
  await Appointment.findByIdAndDelete(req.params.id);
  res.json({ success: true });
});

module.exports = router;
