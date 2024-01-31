import React from 'react';
import '../css/Userhome.css';
import User from './User';

function Userhome() {
  const imageUrl =
    'https://images.pexels.com/photos/698907/pexels-photo-698907.jpeg?auto=compress&cs=tinysrgb&w=600';

  const allUpcomingEvents = [
    
    {
      title: 'Event 1',
      date: '2024-02-15',
      description: 'Description for Event 1',
    },
    {
      title: 'Event 2',
      date: '2024-02-16',
      description: 'Description for Event 2',
    },
    {
      title: 'Event 3',
      date: '2024-02-17',
      description: 'Description for Event 3',
    },
    {
      title: 'Event 4',
      date: '2024-02-18',
      description: 'Description for Event 4',
    },
    {
      title: 'Event 5',
      date: '2024-02-19',
      description: 'Description for Event 5',
    },
    // Add more events as needed
  ];

  return (
    <div>
      <User />
      <div className="userhome-container">
        {/* Left side image */}
        <div className="userhome-image-container">
          <img src={imageUrl} alt="Friends Reunion" className="userhome-image" />
        </div>

        {/* Right side upcoming events menu */}
        <div className="upcoming-events-container">
          <h1 className="userhome-title">Welcome to the Friends Reunion Party!</h1>
          <br></br>
          <p className="userhome-message">
            We are excited to have you here. Get ready for a fantastic time filled with laughter, memories, and joy.
          </p>
          <p>Join us for a night filled with laughter, memories, and the spirit of friendship.</p>
          <br></br>
          <p>It's not just a party; it's a Friends reunion! Save the Date</p>

          {/* Combined Upcoming Events Table */}
          <div className="upcoming-event-menu">
            <h2>New Upcoming Events</h2>
            <table className="upcoming-events-table">
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Date</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                {allUpcomingEvents.map((event, index) => (
                  <tr key={index}>
                    <td>{event.title}</td>
                    <td>{event.date}</td>
                    <td>{event.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Book Your Date Button Section */}
          <div className="book-date-section">
            <button className="book-date-button">Book Your Date</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Userhome;
