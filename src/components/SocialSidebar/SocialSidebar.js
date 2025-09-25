import React from 'react';
import { FaInstagram, FaFacebook, FaWhatsapp, FaEnvelope, FaYoutube } from 'react-icons/fa';
import { FaTiktok } from 'react-icons/fa6';
import './SocialSidebar.css';

const SocialSidebar = () => {
  return (
    <div className="social-sidebar">
      <div className="social-sidebar-content">
        <a 
          href="https://www.instagram.com/expo_physiotherapy_bh?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
          title="Follow us on Instagram"
        >
          <FaInstagram />
        </a>
        
        <a 
          href="https://www.facebook.com/profile.php?id=61552938691116&sk=photos"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
          title="Follow us on Facebook"
        >
          <FaFacebook />
        </a>
        
        <a 
          href="https://www.youtube.com/@expophysiotherapy/shorts"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
          title="Subscribe to our YouTube channel"
        >
          <FaYoutube />
        </a> 
        
        <a 
          href="https://www.tiktok.com"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
          title="Follow us on TikTok"
        >
          <FaTiktok />
        </a>
        
        <a 
          href="https://wa.me/97332260665"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
          title="Contact us on WhatsApp"
        >
          <FaWhatsapp />
        </a>
        
        <a 
          href="mailto:expo.physiotherapy@gmail.com"
          className="social-icon"
          title="Send us an email"
        >
          <FaEnvelope />
        </a>
      </div>
    </div>
  );
};

export default SocialSidebar;
