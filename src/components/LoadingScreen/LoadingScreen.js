import React from 'react';
import './LoadingScreen.css';

const LoadingScreen = ({ fadeOut }) => {
  return (
    <div className={`loading-screen ${fadeOut ? 'fade-out' : ''}`}>
      <div className="loading-content">
        <div className="loading-logo">
          <img 
            src="https://res.cloudinary.com/dvybb2xnc/image/upload/v1758792444/40e4dc9c-28ff-4fd9-83da-87e1c3d89d6d_mh1ghi.png" 
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
