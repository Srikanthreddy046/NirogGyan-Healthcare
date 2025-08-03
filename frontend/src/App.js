import React, { useState } from 'react';
import LandingPage from './pages/LandingPage';
import DoctorProfile from './pages/DoctorProfile';
import AppointmentForm from './pages/AppointmentForm';
import BookedAppointments from './pages/BookedAppointments';
import './App.css';

function App() {
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [bookingDoctor, setBookingDoctor] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [showAppointments, setShowAppointments] = useState(false);

  const handleSelectDoctor = (doctorId) => {
    setSelectedDoctor(doctorId);
    setShowForm(false);
    setShowAppointments(false);
  };

  const handleBook = (doctorId) => {
    setBookingDoctor(doctorId);
    setShowForm(true);
    setShowAppointments(false);
  };

  const handleConfirm = () => {
    setShowForm(false);
    setBookingDoctor(null);
    setSelectedDoctor(null);
  };

  const handleCancel = () => {
    setShowForm(false);
    setBookingDoctor(null);
  };

  const handleGoBack = () => {
    setShowForm(false);
    setBookingDoctor(null);
    setSelectedDoctor(null);
    setShowAppointments(false);
  };

  const handleShowAppointments = () => {
    setShowAppointments(true);
    setShowForm(false);
    setBookingDoctor(null);
    setSelectedDoctor(null);
  };

  return (
    <div className="App" style={{background:'#e3eafc',minHeight:'100vh'}}>
      <div style={{width:'100%',display:'flex',justifyContent:'center',position:'fixed',top:0,left:0,zIndex:1000}}>
        <nav style={{
          background:'#1976d2',color:'#fff',padding:'16px 24px',borderRadius:'0',
          display:'flex',justifyContent:'space-between',alignItems:'center',
          width:'800px',maxWidth:'95vw',height:'40px'
        }}>
          <div style={{display:'flex',alignItems:'center',gap:'12px'}}>
            <img src="https://media.licdn.com/dms/image/v2/D4D0BAQGiaARpIEJqwQ/company-logo_200_200/B4DZZth6opH4AQ-/0/1745594330131/niroggyan_logo?e=1756944000&v=beta&t=A6FPAsUc4WIKj3xCzVeSBJCYG5ichI4KQf0dp2e5eEc" alt="Niroggyan Logo" style={{height:'32px',width:'32px',objectFit:'contain',borderRadius:'8px'}} />
            <span style={{fontWeight:'bold',fontSize:'1.2em'}}>Niroggyan Healthcare</span>
          </div>
          <span>Appointment Booking</span>
        </nav>
      </div>
      <div className="app-content">
        {!selectedDoctor && !showForm && !showAppointments && (
          <LandingPage onSelectDoctor={handleSelectDoctor} onShowAppointments={handleShowAppointments} />
        )}
        {selectedDoctor && !showForm && !showAppointments && (
          <DoctorProfile doctorId={selectedDoctor} onBook={handleBook} onBack={handleGoBack} />
        )}
        {showForm && !showAppointments && (
          <AppointmentForm doctorId={bookingDoctor} onConfirm={handleConfirm} onCancel={handleCancel} onBack={handleGoBack} />
        )}
        {showAppointments && (
          <BookedAppointments onBack={handleGoBack} />
        )}
      </div>
    </div>
  );
}

export default App;
