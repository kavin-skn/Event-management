// BookingForm.js

import React, { useState } from 'react';
import '../css/BookingForm.css'; // Add your CSS file for BookingForm styling if needed

function BookingForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    eventDate: '',
    additionalComments: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to handle form submission, such as sending data to a server or triggering another action
    console.log('Form submitted:', formData);
  };

  return (
    <div className="booking-form-container">
      <h1 className="booking-form-title">Book Your Spot for the Party </h1>
      <form onSubmit={handleSubmit}>
        <label>
          Full Name:
          <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} required />
        </label>

        <label>
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </label>

        <label>
          Phone:
          <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
        </label>

        <label>
          Event Date:
          <input type="date" name="eventDate" value={formData.eventDate} onChange={handleChange} required />
        </label>

        <label>
          Additional Comments:
          <textarea name="additionalComments" value={formData.additionalComments} onChange={handleChange} />
        </label>

        <button type="submit">Book Now</button>
      </form>
    </div>
  );
}

export default BookingForm;
