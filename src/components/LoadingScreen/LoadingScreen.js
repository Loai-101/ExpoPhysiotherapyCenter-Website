import React from 'react';
import './LoadingScreen.css';

const LoadingScreen = ({ fadeOut }) => {
  return (
    <div className={`loading-screen ${fadeOut ? 'fade-out' : ''}`}>
      <div className="loading-content">
        <div className="loading-logo">
          <img 
            src="https://res.cloudinary.com/dvybb2xnc/image/upload/v1759230964/Screenshot_2025-09-30_141557_glwpx3.png" 
            alt="Expo Physiotherapy Center Logo" 
            className="loading-logo-image"
          />
        </div>
        <h1 className="loading-title">Expo Physiotherapy Center</h1>
      </div>
    </div>
  );
};

export default LoadingScreen;
