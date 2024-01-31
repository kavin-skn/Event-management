// src/App.jsx
import React from 'react';
import '../css/Home.css';
import Navbar from '../components/Navbar';

const App = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="content">
          <div className="image-container">
            <img
              src="https://img.freepik.com/free-photo/happy-friends-smiling-camera_23-2147810857.jpg?size=626&ext=jpg&ga=GA1.1.954884975.1706508640&semt=ais"
              alt="Reunion Party"
              className="image"
            />
          </div>
          <div className="text-container">
            <header className="header">
              <h1>Reunion Party!</h1>
              <p>Reconnect, reminisce, and celebrate the good times</p>
              <p>“A reunion is a chance to reconnect with the people who have been a part of our lives and helped shape who we are today.”</p>
            </header>
          </div>
        </div>

      
        <div className="additional-content">
          <div className="additional-text">
            <h2>More Memories</h2>
            <p>Explore more memories and moments from the reunion party.</p>
          </div>
          <img
            src="https://images.unsplash.com/photo-1517457373958-b7bdd4587205?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Additional Content"
            className="additional-image"
          />
        </div>

      
        <div className="scroll-down-content">
          
        
        </div>
      </div>
    </>
  );
};

export default App;
