import React from 'react';
import Navbar from '../components/Navbar';

const About = () => {
  return (
    <>
      <Navbar />
      <div style={styles.container}>
        <header style={styles.header}>
          <img
            src="https://images.unsplash.com/photo-1578990628400-94f031afbe3d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Reunion Party"
            className="image"
            style={styles.image}
          />
          <h1 style={styles.title}>Reunion Party</h1>
          <p style={styles.subtitle}>Reconnect, reminisce, and celebrate the good times.</p>
        </header>

        <section style={styles.section}>
          <p>
            Welcome to our reunion party! We are excited to bring together old
            friends and create new memories. Join us for an evening filled with
            laughter, joy, and the warmth of shared stories.
          </p>
          <p>
            Our goal is to create a memorable experience that allows everyone to
            catch up, rekindle friendships, and celebrate the bonds that have
            withstood the test of time.
          </p>
        </section>
      </div>
    </>
  );
};

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    backgroundColor: 'transparent', // Set background color to transparent
    color: '#333',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    maxWidth: '800px',
    margin: '0 auto',
    border: 'none', // Remove the border
  },
  header: {
    textAlign: 'center',
  },
  image: {
    maxWidth: '100%',
    height: '20%',
    marginBottom: '20px', // Adjust as needed
  },
  title: {
    color: 'black', // Change the color to black
    fontSize: '28px',
    marginBottom: '8px',
  },
  subtitle: {
    color: '#666',
    fontSize: '18px',
  },
  section: {
    marginTop: '20px',
    fontSize: '18px',
    lineHeight: '1.6',
  },
};

export default About;
