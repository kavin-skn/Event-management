// Venues.js

import React from 'react';
import '../css/Venues.css';

function Venues() {
  const venuesList = [
    {
      name: 'Party Palace',
      location: '123 Main Street, Cityville',
      capacity: 150,
      facilities: 'Dance floor, DJ booth, Bar',
      imageUrl: 'https://images.pexels.com/photos/13644697/pexels-photo-13644697.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      name: 'Celebration Center',
      location: '456 Oak Avenue, Townsville',
      capacity: 200,
      facilities: 'Stage, Catering services, Lounge area',
      imageUrl: 'https://images.pexels.com/photos/12689027/pexels-photo-12689027.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      name: 'Grand Hall',
      location: '789 Maple Lane, Villagetown',
      capacity: 250,
      facilities: 'Banquet hall, Audio-visual equipment, Outdoor garden',
      imageUrl: 'https://images.pexels.com/photos/1035665/pexels-photo-1035665.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      name: 'The Pavilion',
      location: '101 Pine Street, Hamletville',
      capacity: 180,
      facilities: 'Open-air venue, Barbecue area, Scenic views',
      imageUrl: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=1798&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      name: 'Harmony Hall',
      location: '234 Elm Street, Riverside',
      capacity: 180,
      facilities: 'Elegant decor, Catering services, Lounge area',
      imageUrl: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGV2ZW50JTIwdmVudWV8ZW58MHx8MHx8fDA%3D',
    },
    {
      name: 'Starlight Lounge',
      location: '567 Birch Lane, Lakeside',
      capacity: 120,
      facilities: 'Cozy atmosphere, Cocktail bar, Live music',
      imageUrl: 'https://c0.wallpaperflare.com/preview/268/609/86/indoor-elegant-chair-table.jpg',
    },
    {
      name: 'Crystal Ballroom',
      location: '876 Cedar Avenue, Mountainview',
      capacity: 300,
      facilities: 'Crystal chandeliers, Dance floor, Event planning services',
      imageUrl: 'https://img.freepik.com/free-photo/decorated-banquet-hall-with-flowers_8353-10058.jpg',
    },
    {
      name: 'Golden Gardens',
      location: '321 Oak Street, Parkside',
      capacity: 200,
      facilities: 'Outdoor venue, Gazebo, Lawn seating',
      imageUrl: 'https://watermark.lovepik.com/photo/20211125/large/lovepik-western-style-party-layout-picture_501034917.jpg',
    },
    {
      name: 'Sapphire Salon',
      location: '654 Pine Avenue, Seaside',
      capacity: 150,
      facilities: 'Salon-style setup, Beauty services, Bridal suite',
      imageUrl: 'https://img.freepik.com/free-photo/decorated-hall-wedding-is-ready-celebration_8353-10236.jpg',
    },
  ];

  return (
    <div className="venues-container">
      <h1 className="venues-title">View Venues</h1>

      {/* List of Venues */}
      <div className="venues-list">
        {venuesList.map((venue, index) => (
          <div key={index} className="venue-box">
            <img src={venue.imageUrl} alt={`Venue ${index + 1}`} className="venue-image" />
            <h3>{venue.name}</h3>
            <p>Location: {venue.location}</p>
            <p>Capacity: {venue.capacity} guests</p>
            <p>Facilities: {venue.facilities}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Venues;
