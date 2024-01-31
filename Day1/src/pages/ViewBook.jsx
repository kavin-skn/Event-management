import React, { useState, useEffect } from 'react';

function ViewBook() {
  // State to hold booking information
  const [bookingData, setBookingData] = useState(null);

  // Fetch booking data when the component mounts
  useEffect(() => {
    // Example API call to retrieve booking information
    // Replace this with your actual API endpoint
    fetch('https://api.example.com/booking')
      .then(response => response.json())
      .then(data => setBookingData(data))
      .catch(error => console.error('Error fetching booking data:', error));
  }, []); // Empty dependency array ensures the effect runs only once on mount

  return (
    <div>
      <h1>Booking Information</h1>
      {bookingData ? (
        <div>
          <p>Event: {bookingData.eventName}</p>
          <p>Date: {bookingData.eventDate}</p>
          {/* Add more details as needed */}
        </div>
      ) : (
        <p>Loading booking information...</p>
      )}
    </div>
  );
}

export default ViewBook;
