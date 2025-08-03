import React, { useState, useEffect } from 'react';
import DoctorCard from '../components/DoctorCard';
import './LandingPage.css';

const LandingPage = ({ onSelectDoctor, onShowAppointments }) => {
  const [doctors, setDoctors] = useState([]);
  const [search, setSearch] = useState('');
  const [showAvailable, setShowAvailable] = useState(false);

  useEffect(() => {
    fetch(`/api/doctors?search=${search}`)
      .then(res => res.json())
      .then(data => setDoctors(data));
  }, [search]);

  const filteredDoctors = showAvailable ? doctors.filter(doc => doc.available) : doctors;

  return (
    <div className="landing-page">
      <h1>Find a Doctor</h1>
      <button onClick={onShowAppointments}>Your Appointments</button>
      <button
        onClick={() => setShowAvailable(v => !v)}
        className={showAvailable ? 'active' : ''}
      >
        {showAvailable ? 'Show All Doctors' : 'Show Available Doctors'}
      </button>
      <input
        type="text"
        placeholder="Search by name or specialization"
        value={search}
        onChange={e => setSearch(e.target.value)}
      />
      <div className="doctor-list">
        {filteredDoctors.map(doc => (
          <DoctorCard key={doc._id} doctor={doc} onViewProfile={onSelectDoctor} />
        ))}
      </div>
    </div>
  );
};

export default LandingPage;
