import React, { useState, useEffect } from 'react';

const AppointmentForm = ({ doctorId, onConfirm, onCancel, onBack }) => {
  const [patientName, setPatientName] = useState('');
  const [email, setEmail] = useState('');
  const [dateTime, setDateTime] = useState('');
  const [success, setSuccess] = useState(false);
  const [doctor, setDoctor] = useState(null);

  useEffect(() => {
    if (doctorId) {
      fetch(`/api/doctors/${doctorId}`)
        .then(res => res.json())
        .then(data => setDoctor(data));
    }
  }, [doctorId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const confirmed = window.confirm('Are you sure you want to book this appointment?');
    if (!confirmed) return;
    const res = await fetch('/api/appointments', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ doctorId, patientName, email, dateTime }),
    });
    const data = await res.json();
    if (data.success) {
      setSuccess(true);
      onConfirm();
    }
  };

  if (success) return (
    <div className="appointment-form">
      <h3 className="success-title">Appointment booked successfully!</h3>
      {doctor && (
        <div className="doctor-success-details">
          <img src={doctor.profileImage} alt={doctor.name} className="doctor-img" />
          <div className="doctor-success-name"><strong>{doctor.name}</strong> <br />{doctor.specialization}</div>
        </div>
      )}
      <div className="success-details">
        <span>Patient: {patientName}</span><br />
        <span>Email: {email}</span><br />
        <span>Booked Date: {new Date(dateTime).toLocaleString()}</span>
      </div>
      <br />
      <button onClick={onBack}>Go Back</button>
    </div>
  );

  return (
    <form className="appointment-form" onSubmit={handleSubmit}>
      <h2>Book Appointment</h2>
      {doctor && (
        <div className="doctor-success-details">
          <img src={doctor.profileImage} alt={doctor.name} className="doctor-img" />
          <div className="doctor-success-name"><strong>{doctor.name}</strong> <br />{doctor.specialization}</div>
        </div>
      )}
      <input
        type="text"
        placeholder="Patient Name"
        value={patientName}
        onChange={e => setPatientName(e.target.value)}
        required
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        required
      />
      <input
        type="datetime-local"
        value={dateTime}
        onChange={e => setDateTime(e.target.value)}
        required
      />
      <button type="submit">Confirm</button>
      <button type="button" onClick={onCancel}>Cancel</button>
      <button type="button" onClick={onBack}>Go Back</button>
    </form>
  );
};

export default AppointmentForm;
