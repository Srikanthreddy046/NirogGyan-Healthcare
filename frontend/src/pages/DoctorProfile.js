import React, { useState, useEffect } from 'react';
import './DoctorProfile.css';

const DoctorProfile = ({ doctorId, onBook, onBack }) => {
  const [doctor, setDoctor] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/api/doctors/${doctorId}`)
      .then(res => res.json())
      .then(data => setDoctor(data));
  }, [doctorId]);

  if (!doctor) return <div>Loading...</div>;

  return (
    <div className="doctor-profile">
      <img src={doctor.profileImage} alt={doctor.name} className="doctor-img" />
      <h2>{doctor.name}</h2>
      <p><strong>Specialization:</strong> {doctor.specialization}</p>
      <p><strong>Status:</strong> <span className={doctor.available ? 'available' : 'unavailable'}>{doctor.available ? 'Available' : 'Unavailable'}</span></p>
      <button onClick={() => onBook(doctor._id)} disabled={!doctor.available}>
        Book Appointment
      </button>
      <button onClick={onBack}>Go Back</button>
    </div>
  );
};

export default DoctorProfile;
