const mongoose = require('mongoose');

const doctorSchema = new mongoose.Schema({
  name: String,
  specialization: String,
  profileImage: String,
  available: Boolean,
});

module.exports = mongoose.model('Doctor', doctorSchema);
