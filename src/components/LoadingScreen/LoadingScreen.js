import React from 'react';
import './LoadingScreen.css';

const LoadingScreen = ({ fadeOut }) => {
  return (
    <div className={`loading-screen ${fadeOut ? 'fade-out' : ''}`}>
      <div className="loading-content">
        <div className="loading-logo">
          <img 
            src="https://res.cloudinary.com/dvybb2xnc/image/upload/v1758447860/%D8%AA%D8%B5%D9%85%D9%8A%D9%85_%D8%A8%D8%AF%D9%88%D9%86_%D8%B9%D9%86%D9%88%D8%A7%D9%86_3_nqe3si.png" 
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
