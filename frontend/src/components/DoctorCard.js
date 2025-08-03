import React from 'react';
import './DoctorCard.css';

const DoctorCard = ({ doctor, onViewProfile }) => (
  <div className="doctor-card">
    <img src={doctor.profileImage} alt={doctor.name} className="doctor-img" />
    <h3>{doctor.name}</h3>
    <p>{doctor.specialization}</p>
    <p>Status: <span className={doctor.available ? 'available' : 'unavailable'}>{doctor.available ? 'Available' : 'Unavailable'}</span></p>
    <button onClick={() => onViewProfile(doctor._id)}>View Profile</button>
  </div>
);

export default DoctorCard;
