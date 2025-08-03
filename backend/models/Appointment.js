const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
  doctorId: { type: mongoose.Schema.Types.ObjectId, ref: 'Doctor' },
  patientName: String,
  email: String,
  dateTime: Date,
});

module.exports = mongoose.model('Appointment', appointmentSchema);
