import React from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram, FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaWhatsapp } from 'react-icons/fa';
import { useLanguage } from '../../contexts/LanguageContext';
import './Footer.css';

const Footer = () => {
  const { language } = useLanguage();

  const content = {
    en: {
      aboutTitle: "About the Clinic",
      aboutText: "Your trusted medical partner for bone and movement health. We are committed to providing comprehensive therapeutic care, using the latest technologies, in a comfortable and safe environment.",
      quickLinksTitle: "Quick Links",
      quickLinks: [
        { text: "Home Page", to: "/" },
        { text: "About Us", to: "/about" },
        { text: "Our Services", to: "/services" },
        { text: "Book an Appointment", to: "/contact" },
        { text: "Contact Us", to: "/contact" },
        { text: "Our Medical Team", to: "/team" },
        { text: "FAQs (Frequently Asked Questions)", to: "/faq" }
      ],
      servicesTitle: "Our Services",
      serviceCategories: {
        "General Services": [
          "General Physical Therapy",
          "Manual Therapy",
          "Therapeutic Exercises",
          "Chronic Pain Management"
        ],
        "Specialized Rehabilitation": [
          "Sports Injury Rehabilitation",
          "Neurological Rehabilitation",
          "Pediatric Physical Therapy",
          "Physical Therapy for Pregnant Women"
        ],
        "Advanced Therapies": [
          "Dry Needling Therapy",
          "Kinesio Taping Therapy",
          "Dry and Prophetic Cupping Therapy",
          "Instrument-Assisted Therapy"
        ]
      },
      contactTitle: "Contact Information",
      location: "Al Zinj, Manama – Bahrain",
      workingHours: "Saturday to Thursday: 9 AM – 9 PM",
      phone: "+97313630665",
      whatsapp: "+97332260665",
      email: "expo.physiotherapy@gmail.com",
      instagram: "expo_physiotherapy_bh"
    },
    ar: {
      aboutTitle: "عن العيادة",
      aboutText: "شريكك الطبي الموثوق لصحة العظام والحركة. نلتزم بتقديم رعاية علاجية متكاملة، باستخدام أحدث التقنيات، في بيئة مريحة وآمنة.",
      quickLinksTitle: "روابط سريعة",
      quickLinks: [
        { text: "الصفحة الرئيسية", to: "/" },
        { text: "من نحن", to: "/about" },
        { text: "خدماتنا", to: "/services" },
        { text: "احجز موعد", to: "/contact" },
        { text: "تواصل معنا", to: "/contact" },
        { text: "فريقنا الطبي", to: "/team" },
        { text: "الأسئلة الشائعة", to: "/faq" }
      ],
      servicesTitle: "خدماتنا",
      serviceCategories: {
        "الخدمات العامة": [
          "العلاج الطبيعي العام",
          "العلاج اليدوي",
          "التمارين العلاجية",
          "إدارة الألم المزمن"
        ],
        "التأهيل المتخصص": [
          "إعادة تأهيل الإصابات الرياضية",
          "إعادة التأهيل العصبي",
          "العلاج الطبيعي للأطفال",
          "العلاج الطبيعي للحوامل"
        ],
        "العلاجات المتقدمة": [
          "العلاج بالأبر الجافة",
          "العلاج باللاصق الرياضي",
          "الحجامة الجافة والنبوية",
          "العلاج بالأجهزة"
        ]
      },
      contactTitle: "معلومات التواصل",
      location: "الزنج، المنامة – البحرين",
      workingHours: "السبت إلى الخميس: 9 صباحًا – 7 مساءً",
      phone: "+97313630665",
      whatsapp: "+97332260665",
      email: "expo.physiotherapy@gmail.com",
      instagram: "expo_physiotherapy_bh"
    }
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section footer-about">
          <h3>{content[language].aboutTitle}</h3>
          <p>{content[language].aboutText}</p>
        </div>

        <div className="footer-section footer-quick-links">
          <h3>{content[language].quickLinksTitle}</h3>
          <ul className="footer-links">
            {content[language].quickLinks.map((link, index) => (
              <li key={index} className="footer-link-item">
                <Link to={link.to} className="footer-link">
                  {link.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-section footer-services">
          <h3>{content[language].servicesTitle}</h3>
          <div className="footer-service-categories">
            {Object.entries(content[language].serviceCategories).map(([category, services]) => (
              <div key={category} className="footer-service-category">
                <h4 className="footer-category-title">{category}</h4>
                <ul className="footer-links">
                  {services.map((service, index) => (
                    <li key={index}>
                      <span className="footer-service-item">{service}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="footer-section footer-contact">
          <h3>{content[language].contactTitle}</h3>
          <p><FaMapMarkerAlt /> {content[language].location}</p>
          <p><FaClock /> {content[language].workingHours}</p>
          <div className="footer-contact-icons">
            <a href="tel:+97313630665" className="footer-contact-icon" title="Call Us">
              <FaPhone />
            </a>
            <a href="https://wa.me/97332260665" target="_blank" rel="noopener noreferrer" className="footer-contact-icon" title="WhatsApp">
              <FaWhatsapp />
            </a>
            <a href="mailto:expo.physiotherapy@gmail.com" className="footer-contact-icon" title="Email Us">
              <FaEnvelope />
            </a>
            <a 
              href="https://www.instagram.com/expo_physiotherapy_bh?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" 
              target="_blank" 
              rel="noopener noreferrer"
              className="footer-contact-icon"
              title="Follow on Instagram"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

             <div className="footer-bottom">
         <div className="footer-bottom-content">
           <span>&copy; 2023 Expo Physiotherapy Center. All rights reserved.</span>
           <span className="footer-separator">|</span>
           <a href="/privacy-policy" className="footer-link">Privacy Policy</a>
           <span className="footer-separator">|</span>
           <a href="/terms-of-service" className="footer-link">Terms of Service</a>
           <span className="footer-separator">|</span>
                                   <a 
              href="https://it-solutions.pmi-me.net/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="pmi-developer"
            >
              <span className="developed-by">Developed by PMI</span>
              <img 
                src="https://res.cloudinary.com/dvybb2xnc/image/upload/f_auto,q_auto/v1756121005/PMI_Purple_j8wvsj" 
                alt="PMI Logo" 
                className="pmi-logo"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'inline';
                }}
              />
              <span className="pmi-logo-text" style={{display: 'none'}}>PMI</span>
            </a>
         </div>
       </div>
    </footer>
  );
};

export default Footer;
