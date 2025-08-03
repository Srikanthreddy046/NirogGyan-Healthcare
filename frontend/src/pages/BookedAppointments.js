import React, { useEffect, useState } from 'react';

const BookedAppointments = ({ onBack }) => {
  const [appointments, setAppointments] = useState([]);
  const [doctors, setDoctors] = useState({});

  useEffect(() => {
    fetch('/api/appointments')
      .then(res => res.json())
      .then(data => setAppointments(data));
    fetch('/api/doctors')
      .then(res => res.json())
      .then(data => {
        const docMap = {};
        data.forEach(doc => { docMap[doc._id] = doc; });
        setDoctors(docMap);
      });
  }, []);

  const fetchAppointments = () => {
    fetch('/api/appointments')
      .then(res => res.json())
      .then(data => setAppointments(data));
  };

  const handleDelete = async (id) => {
    const confirmed = window.confirm('Are you sure you want to delete this appointment?');
    if (!confirmed) return;
    await fetch(`/api/appointments/${id}`, { method: 'DELETE' });
    fetchAppointments();
  };

  useEffect(() => {
    fetchAppointments();
    fetch('/api/doctors')
      .then(res => res.json())
      .then(data => {
        const docMap = {};
        data.forEach(doc => { docMap[doc._id] = doc; });
        setDoctors(docMap);
      });
  }, []);

  return (
    <div className="booked-appointments">
      <h2>Booked Appointments</h2>
      <button onClick={onBack}>Go Back</button>
      <ul>
        {appointments.length === 0 && <li>No appointments booked.</li>}
        {appointments.map(app => {
          let doc = doctors[app.doctorId];
          // Fallback for stringified ObjectId
          if (!doc && typeof app.doctorId === 'object' && app.doctorId.$oid) {
            doc = doctors[app.doctorId.$oid];
          }
          return (
            <li key={app._id} className="appointment-card">
              <div className="appointment-card-header">
                {doc ? (
                  <>
                    <img src={doc.profileImage} alt={doc.name} className="doctor-img" />
                    <div>
                      <strong>{doc.name}</strong> <br />
                      <span>{doc.specialization}</span>
                    </div>
                  </>
                ) : (
                  <div><strong>Doctor details not found</strong></div>
                )}
              </div>
              <div className="appointment-card-details">
                <span>Patient: {app.patientName}</span><br />
                <span>Email: {app.email}</span><br />
                <span>Booked Date: {new Date(app.dateTime).toLocaleString()}</span>
              </div>
              <button className="delete-btn" onClick={() => handleDelete(app._id)}>Delete</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default BookedAppointments;
