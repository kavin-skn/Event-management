import React, { useState } from 'react';

function Events() {
  const [events, setEvents] = useState([
    {
      title: 'Friends Reunion Party',
      date: '2024-02-15',
      description: 'Join us for a night filled with laughter, memories, and joy!',
      image: 'https://images.pexels.com/photos/2263410/pexels-photo-2263410.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
    },
    {
      title: 'Summer BBQ Bash',
      date: '2024-06-20',
      description: 'Celebrate the warmth of summer with delicious food and great company!',
      image: 'https://images.pexels.com/photos/2735037/pexels-photo-2735037.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      title: 'Holiday Extravaganza',
      date: '2024-12-25',
      description: 'Experience the magic of the holidays with festive decorations ',
      image: 'https://images.pexels.com/photos/625644/pexels-photo-625644.jpeg',
    },
    {
      title: 'New Year\'s Eve Gala',
      date: '2024-12-31',
      description: 'Count down to the new year with a unforgettable moments!',
      image: 'https://images.pexels.com/photos/1120162/pexels-photo-1120162.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      title: 'Family Movie Night',
      date: '2024-09-08',
      description: 'Grab your popcorn and join us for a cozy family movie night under the stars!',
      image: 'https://images.pexels.com/photos/2034851/pexels-photo-2034851.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    // Add more events as needed
  ]);

  const [updateIndex, setUpdateIndex] = useState(null);
  const [newTitle, setNewTitle] = useState('');
  const [newDate, setNewDate] = useState('');
  const [newDescription, setNewDescription] = useState('');

  const handleDelete = (index) => {
    const updatedEvents = [...events];
    updatedEvents.splice(index, 1);
    setEvents(updatedEvents);
  };

  const handleUpdate = (index) => {
    setUpdateIndex(index);
    setNewTitle(events[index].title);
    setNewDate(events[index].date);
    setNewDescription(events[index].description);
  };

  const handleUpdateSubmit = () => {
    if (updateIndex !== null) {
      const updatedEvents = [...events];
      updatedEvents[updateIndex] = {
        title: newTitle,
        date: newDate,
        description: newDescription,
        image: events[updateIndex].image,
      };
      setEvents(updatedEvents);
      setUpdateIndex(null);
      setNewTitle('');
      setNewDate('');
      setNewDescription('');
    }
  };

  return (
    <div style={styles.eventsContainer}>
      <h1 style={styles.title}>Upcoming Events</h1>
      {events.map((event, index) => (
        <div key={index} style={styles.eventCard}>
          <img src={event.image} alt={event.title} style={styles.eventImage} />
          <div style={styles.eventDetails}>
            <p style={styles.eventTitle}>{event.title}</p>
            <p style={styles.eventDate}>{event.date}</p>
            <p style={styles.eventDescription}>{event.description}</p>
            <button onClick={() => handleUpdate(index)} style={styles.eventButton}>Update Event</button>
            <button onClick={() => handleDelete(index)} style={styles.eventButton}>Delete Event</button>
          </div>
        </div>
      ))}

      {/* Modal for Update */}
      {updateIndex !== null && (
        <div style={styles.modal}>
          <h2>Update Event</h2>
          <label>Title:</label>
          <input type="text" value={newTitle} onChange={(e) => setNewTitle(e.target.value)} />
          <br />
          <label>Date:</label>
          <input type="text" value={newDate} onChange={(e) => setNewDate(e.target.value)} />
          <br />
          <label>Description:</label>
          <input type="text" value={newDescription} onChange={(e) => setNewDescription(e.target.value)} />
          <br />
          <button onClick={handleUpdateSubmit}>Submit</button>
        </div>
      )}
    </div>
  );
}

const styles = {
  eventsContainer: {
    padding: '20px',
    textAlign: 'center',
  },
  eventCard: {
    backgroundColor: '#fff',
    border: '1px solid #ddd',
    borderRadius: '10px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    overflow: 'hidden',
    transition: 'transform 0.2s',
    margin: '20px',
    display: 'inline-block',
    width: '300px',
    ':hover': {
      transform: 'translateY(-5px)',
    },
  },
  eventImage: {
    width: '100%',
    height: '200px',
    objectFit: 'cover',
  },
  eventDetails: {
    padding: '15px',
  },
  title: {
    fontSize: '24px',
    color: '#333',
  },
  eventTitle: {
    fontSize: '20px',
    fontWeight: 'bold',
    color: '#333',
    marginBottom: '8px',
  },
  eventDate: {
    fontSize: '14px',
    color: '#555',
  },
  eventDescription: {
    fontSize: '16px',
    color: '#333',
    marginTop: '10px',
  },
  eventButton: {
    backgroundColor: '#007bff',
    color: '#fff',
    padding: '10px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
    margin: '5px',
    ':hover': {
      backgroundColor: '#0056b3',
    },
  },
  modal: {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    zIndex: '1000',
  },
};

export default Events;
