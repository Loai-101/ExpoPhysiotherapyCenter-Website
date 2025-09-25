import React, { useState, useEffect } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { FaInstagram, FaFacebook, FaWhatsapp, FaEnvelope, FaYoutube } from 'react-icons/fa';
import { FaTiktok } from 'react-icons/fa6';
import './Contact.css';

const Contact = () => {
  const { language } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('contact');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const content = {
    en: {
      heroTitle: "Contact Us",
      heroDescription: "Get in touch with us to schedule your appointment or ask any questions about our physiotherapy services",
      heroButton1: "Call Now",
      heroButton2: "WhatsApp",
      address: {
        title: "Clinic's Official Address",
        clinic: "Expo Physiotherapy Center",
        details: "Flat 42 – Building 59 – Road 2901 – Block 329",
        location: "Al Zinj, Manama – Bahrain (Gulf Medical Complex - 4th Floor)"
      },
      contact: {
        title: "Contact Information",
        phone: "+97313630665",
        whatsapp: "+97332260665",
        email: "expo.physiotherapy@gmail.com"
      },
      hours: {
        title: "Working Hours",
        weekdays: "Saturday to Thursday: 9 AM – 9 PM",
        friday: "Friday: Closed"
      },
      map: {
        title: "Find Us",
        subtitle: "Al Zinj, Manama – Bahrain (Gulf Medical Complex - 4th Floor)",
        linkText: "Open in Google Maps"
      },
      movingBar: [
        "Expo Physiotherapy Center",
        "Flat 42 – Building 59 – Road 2901 – Block 329",
        "Al Zinj, Manama – Bahrain",
        "Gulf Medical Complex - 4th Floor",
        "Phone: +97313630665",
        "WhatsApp: +97332260665",
        "Email: expo.physiotherapy@gmail.com",
        "Saturday to Thursday: 9 AM – 9 PM",
        "Friday: Closed"
      ]
    },
    ar: {
      heroTitle: "تواصل معنا",
      heroDescription: "تواصل معنا لحجز موعدك أو طرح أي أسئلة حول خدمات العلاج الطبيعي لدينا",
      heroButton1: "اتصل الآن",
      heroButton2: "واتساب",
      address: {
        title: "العنوان الرسمي للعيادة",
        clinic: "Expo Physiotherapy Center",
        details: "Flat 42 – Building 59 – Road 2901 – Block 329",
        location: "الزنج، المنامة – البحرين (مجمج الخليج الطبيي - الطابق الرابع)"
      },
      contact: {
        title: "معلومات التواصل",
        phone: "+97313630665",
        whatsapp: "+97332260665",
        email: "expo.physiotherapy@gmail.com"
      },
      hours: {
        title: "ساعات العمل",
        weekdays: "من السبت إلى الخميس: من الساعة 9 صباحًا حتى 9 مساءً",
        friday: "الجمعة: مغلق"
      },
      map: {
        title: "اعثر علينا",
        subtitle: "الزنج، المنامة – البحرين (مجمج الخليج الطبيي - الطابق الرابع)",
        linkText: "فتح في خرائط جوجل"
      },
      movingBar: [
        "مركز إكسبو للعلاج الطبيعي",
        "Flat 42 – Building 59 – Road 2901 – Block 329",
        "الزنج، المنامة – البحرين",
        "مجمج الخليج الطبيي - الطابق الرابع",
        "الهاتف: +97313630665",
        "الواتساب: +97332260665",
        "البريد الإلكتروني: expo.physiotherapy@gmail.com",
        "من السبت إلى الخميس: 9 صباحًا – 9 مساءً",
        "الجمعة: مغلق"
      ]
    }
  };

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="contact-hero-video">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="hero-video"
          >
            <source src="https://res.cloudinary.com/dvybb2xnc/video/upload/v1758447078/WhatsApp_Video_2025-09-21_at_11.59.34_a2fc0416_ni3huk.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="contact-hero-overlay"></div>
        <div className="contact-hero-container">
          <div className={`contact-hero-content ${language === 'ar' ? 'rtl' : 'ltr'}`}>
            <h1 className="contact-hero-title">{content[language].heroTitle}</h1>
            <p className="contact-hero-description">{content[language].heroDescription}</p>
            <div className="contact-hero-buttons">
              <a href="tel:+97313630665" className="contact-hero-button-primary">
                {content[language].heroButton1}
              </a>
              <a href="https://wa.me/97332260665" className="contact-hero-button-secondary">
                {content[language].heroButton2}
              </a>
            </div>
            
            {/* Social Media Icons */}
            <div className="contact-social-icons">
              <a 
                href="https://www.instagram.com/expo_physiotherapy_bh?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                target="_blank"
                rel="noopener noreferrer"
                className="contact-social-icon"
                title="Follow us on Instagram"
              >
                <FaInstagram />
              </a>
              
              <a 
                href="https://www.facebook.com/profile.php?id=61552938691116&sk=photos"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-social-icon"
                title="Follow us on Facebook"
              >
                <FaFacebook />
              </a>
              
              <a 
                href="https://www.youtube.com/@expophysiotherapy/shorts"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-social-icon"
                title="Subscribe to our YouTube channel"
              >
                <FaYoutube />
              </a>
              
              <a 
                href="https://www.tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-social-icon"
                title="Follow us on TikTok"
              >
                <FaTiktok />
              </a>
              
              <a 
                href="https://wa.me/97332260665"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-social-icon"
                title="Contact us on WhatsApp"
              >
                <FaWhatsapp />
              </a>
              
              <a 
                href="mailto:expo.physiotherapy@gmail.com"
                className="contact-social-icon"
                title="Send us an email"
              >
                <FaEnvelope />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Moving Bar */}
      <div className="contact-moving-bar">
        <div className={`contact-moving-content ${language === 'ar' ? 'rtl' : 'ltr'}`}>
          {content[language].movingBar.map((item, index) => (
            <span key={index} className="contact-moving-item">
              {item}
            </span>
          ))}
        </div>
      </div>

      <section id="contact" className={`contact ${isVisible ? 'contact-visible' : ''}`}>
        <div className="contact-container">
          <div className="contact-content">
                         <div className="contact-info">
               <div className="contact-cards">
                  <div className="contact-card">
                    <div className="contact-card-icon">📍</div>
                    <h4 className="contact-card-title">{content[language].address.title}</h4>
                    <div className="contact-card-value">
                      <strong>{content[language].address.clinic}</strong><br />
                      {content[language].address.details}<br />
                      {content[language].address.location}
                    </div>
                  </div>
                  
                  <div className="contact-card">
                    <div className="contact-card-icon">📞</div>
                    <h4 className="contact-card-title">{content[language].contact.title}</h4>
                    <div className="contact-card-value">
                      <a href={`tel:${content[language].contact.phone}`} className="contact-link">
                        📞 {content[language].contact.phone}
                      </a><br />
                      <a href={`https://wa.me/${content[language].contact.whatsapp.replace('+', '')}`} className="contact-link">
                        💬 {content[language].contact.whatsapp}
                      </a><br />
                      <a href={`mailto:${content[language].contact.email}`} className="contact-link">
                        ✉️ {content[language].contact.email}
                      </a>
                    </div>
                  </div>
                  
                  <div className="contact-card">
                    <div className="contact-card-icon">🕘</div>
                    <h4 className="contact-card-title">{content[language].hours.title}</h4>
                    <div className="contact-card-value">
                      {content[language].hours.weekdays}<br />
                      {content[language].hours.friday}
                    </div>
                  </div>
               </div>
            </div>
            
                         {/* Map Section */}
             <div className="contact-map-section">
               <h3 className="map-title">{content[language].map.title}</h3>
               <p className="map-address">{content[language].map.subtitle}</p>
               <div className="map-container">
                 <iframe
                   src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d230120.0!2d50.5853!3d26.0667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbh!4v1234567890123"
                   width="100%"
                   height="400"
                   style={{ border: 0 }}
                   allowFullScreen=""
                   loading="lazy"
                   referrerPolicy="no-referrer-when-downgrade"
                   title="Bahrain Map"
                   className="contact-map"
                 ></iframe>
                 <div className="map-overlay">
                   <a 
                     href="https://maps.app.goo.gl/cvZfRsqXwS9X5v8h6?g_st=iw" 
                     target="_blank" 
                     rel="noopener noreferrer"
                     className="map-link"
                   >
                     <div className="map-link-content">
                       <span className="map-link-icon">🗺️</span>
                       <span className="map-link-text">{content[language].map.linkText}</span>
                     </div>
                   </a>
                 </div>
               </div>
             </div>

          </div>
        </div>
      </section>


    </div>
  );
};

export default Contact;
