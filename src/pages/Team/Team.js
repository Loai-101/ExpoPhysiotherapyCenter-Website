import React, { useState, useEffect } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { FaInstagram, FaFacebook, FaWhatsapp, FaEnvelope, FaYoutube } from 'react-icons/fa';
import { FaTiktok } from 'react-icons/fa6';
import './Team.css';

const Team = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const { language } = useLanguage();
  const currentLanguage = language || 'en';

  useEffect(() => {
    // Set visible immediately when component mounts
    setIsVisible(true);
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('team');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const doctors = [
    {
      id: 1,
      name: {
        en: "Dyaa Zeidan",
        ar: "ضياء زيدان"
      },
      jobTitle: {
        en: "Physical Therapy Specialist",
        ar: "أخصائي علاج طبيعي"
      },
      experience: {
        en: "8+ years",
        ar: "أكثر من 8 سنوات"
      },
      specialty: {
        en: "Motor Rehabilitation & Manual Therapy",
        ar: "إعادة التأهيل الحركي والعلاج اليدوي"
      },
      specialties: {
        en: ["Motor Rehabilitation", "Manual Therapy", "Joint Mobilization", "Pain Management", "Postural Correction", "Movement Assessment"],
        ar: ["إعادة التأهيل الحركي", "العلاج اليدوي", "تحريك المفاصل", "إدارة الألم", "تصحيح القوام", "تقييم الحركة"]
      },
      description: {
        en: "Has extensive experience in motor rehabilitation and manual therapy. He adopts a precise and customized approach for each case to ensure the best therapeutic outcomes.",
        ar: "يتميز بخبرة واسعة في إعادة التأهيل الحركي والعلاج اليدوي، ويعتمد نهجًا دقيقًا ومخصصًا لكل حالة لضمان أفضل نتائج علاجية."
      },
      image: "https://res.cloudinary.com/dvybb2xnc/image/upload/w_300,h_300,c_fill,g_face/v1758610688/%D8%AA%D8%B5%D9%85%D9%8A%D9%85_%D8%A8%D8%AF%D9%88%D9%86_%D8%B9%D9%86%D9%88%D8%A7%D9%86_4_xdlopu.png"
    },
    {
      id: 2,
      name: {
        en: "Menatallah Helal",
        ar: "منه الله هلال"
      },
      jobTitle: {
        en: "Physical Therapy Specialist",
        ar: "أخصائية علاج طبيعي"
      },
      experience: {
        en: "6+ years",
        ar: "أكثر من 6 سنوات"
      },
      specialty: {
        en: "Neurological & Muscular Conditions",
        ar: "الحالات العصبية والعضلية"
      },
      specialties: {
        en: ["Neurological Rehabilitation", "Muscle Therapy", "Stroke Recovery", "Balance Training", "Gait Training", "Cognitive Therapy"],
        ar: ["إعادة التأهيل العصبي", "العلاج العضلي", "تعافي الجلطات", "تدريب التوازن", "تدريب المشي", "العلاج المعرفي"]
      },
      description: {
        en: "Specializes in treating neurological and muscular conditions. She has high skills in communicating with patients and providing comprehensive care that considers their individual needs.",
        ar: "متخصصة في علاج الحالات العصبية والعضلية، وتتمتع بمهارات عالية في التواصل مع المرضى وتقديم رعاية شاملة تراعي احتياجاتهم الفردية."
      },
      image: "https://res.cloudinary.com/dvybb2xnc/image/upload/w_300,h_300,c_fill,g_face/v1758613943/%D8%AA%D8%B5%D9%85%D9%8A%D9%85_%D8%A8%D8%AF%D9%88%D9%86_%D8%B9%D9%86%D9%88%D8%A7%D9%86_5_igdtp7.png"
    },
    {
      id: 3,
      name: {
        en: "Mustafa Mohamed",
        ar: "مصطفى محمد"
      },
      jobTitle: {
        en: "Physical Therapy Specialist",
        ar: "أخصائي علاج طبيعي"
      },
      experience: {
        en: "5+ years",
        ar: "أكثر من 5 سنوات"
      },
      specialty: {
        en: "Sports Injuries & Motor Performance",
        ar: "الإصابات الرياضية والأداء الحركي"
      },
      specialties: {
        en: ["Sports Rehabilitation", "Injury Prevention", "Performance Enhancement", "Athletic Training", "Kinesio Taping", "Functional Movement"],
        ar: ["إعادة تأهيل الرياضيين", "الوقاية من الإصابات", "تحسين الأداء", "التدريب الرياضي", "اللاصق الرياضي", "الحركة الوظيفية"]
      },
      description: {
        en: "Focuses on rehabilitating sports injuries and improving motor performance. He uses modern techniques to achieve effective and sustainable results.",
        ar: "يركز على تأهيل الإصابات الرياضية وتحسين الأداء الحركي، ويستخدم تقنيات حديثة لتحقيق نتائج فعالة ومستدامة."
      },
      image: "https://res.cloudinary.com/dvybb2xnc/image/upload/w_300,h_300,c_fill,g_face/v1758615309/%D8%AA%D8%B5%D9%85%D9%8A%D9%85_%D8%A8%D8%AF%D9%88%D9%86_%D8%B9%D9%86%D9%88%D8%A7%D9%86_6_exz01y.png"
    }
  ];

  const openPopup = (doctor) => {
    setSelectedDoctor(doctor);
  };

  const closePopup = () => {
    setSelectedDoctor(null);
  };

  return (
    <div className="team-page">
      {/* Team Hero Section */}
      <section className="team-hero">
        <div className="team-hero-container">
          <div className="team-hero-content">
            {/* Social Media Icons */}
            <div className="team-hero-social-icons">
              <a 
                href="https://www.instagram.com/expo_physiotherapy_bh?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                target="_blank"
                rel="noopener noreferrer"
                className="team-hero-social-icon"
                title="Follow us on Instagram"
              >
                <FaInstagram />
              </a>
              
              <a 
                href="https://www.facebook.com/profile.php?id=61552938691116&sk=photos"
                target="_blank"
                rel="noopener noreferrer"
                className="team-hero-social-icon"
                title="Follow us on Facebook"
              >
                <FaFacebook />
              </a>
              
              <a 
                href="https://www.youtube.com/@expophysiotherapy/shorts"
                target="_blank"
                rel="noopener noreferrer"
                className="team-hero-social-icon"
                title="Subscribe to our YouTube channel"
              >
                <FaYoutube />
              </a>
              
              <a 
                href="https://www.tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                className="team-hero-social-icon"
                title="Follow us on TikTok"
              >
                <FaTiktok />
              </a>
              
              <a 
                href="https://wa.me/97332260665"
                target="_blank"
                rel="noopener noreferrer"
                className="team-hero-social-icon"
                title="Contact us on WhatsApp"
              >
                <FaWhatsapp />
              </a>
              
              <a 
                href="mailto:expo.physiotherapy@gmail.com"
                className="team-hero-social-icon"
                title="Send us an email"
              >
                <FaEnvelope />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="team" className={`team ${isVisible ? 'team-visible' : ''}`}>
        <div className="team-container">
          <div className="team-header">
            <h1 className="team-title">
              {currentLanguage === 'ar' ? 'فريقنا الطبي' : 'Our Medical Team'}
            </h1>
          </div>
          
          <div className="team-content">
            <div className="doctors-grid">
              {doctors.map((doctor, index) => (
                <div 
                  key={doctor.id}
                  className="doctor-card"
                  onClick={() => openPopup(doctor)}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="doctor-image">
                    {doctor.image.startsWith('http') ? (
                      <img 
                        src={doctor.image} 
                        alt={doctor.name}
                        className="doctor-avatar-image"
                      />
                    ) : (
                      <span className="doctor-avatar">{doctor.image}</span>
                    )}
                  </div>
                  
                  <div className="doctor-info">
                    <h3 className="doctor-name">
                      {doctor.name && doctor.name[currentLanguage] ? doctor.name[currentLanguage] : doctor.name?.en || 'Doctor'}
                    </h3>
                    <p className="doctor-specialty">
                      {doctor.jobTitle && doctor.jobTitle[currentLanguage] ? doctor.jobTitle[currentLanguage] : doctor.jobTitle?.en || 'Specialist'}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Insurance Moving Bar */}
      <section className="insurance-moving-bar">
        <div className="insurance-section">
          <h3 className="insurance-title">
            {currentLanguage === 'ar' ? 'شركاء التأمين' : 'Insurance Partners'}
          </h3>
          <div className="insurance-moving-content">
            <img src="https://res.cloudinary.com/dvybb2xnc/image/upload/v1759043856/health_lbuhna.jpg" alt="Health Insurance" className="insurance-logo" />
            <img src="https://res.cloudinary.com/dvybb2xnc/image/upload/v1759043856/images_2_fbizvi.png" alt="Insurance" className="insurance-logo" />
            <img src="https://res.cloudinary.com/dvybb2xnc/image/upload/v1759043859/Nextcare-Newlogo_ghvlr4.jpg" alt="Nextcare" className="insurance-logo" />
            <img src="https://res.cloudinary.com/dvybb2xnc/image/upload/v1759043859/MetLife_zmylyp.jpg" alt="MetLife" className="insurance-logo" />
            <img src="https://res.cloudinary.com/dvybb2xnc/image/upload/v1759043861/mednet_ikfjux.jpg" alt="MedNet" className="insurance-logo" />
          </div>
        </div>
      </section>

      {/* Doctor Popup */}
      {selectedDoctor && (
        <div className="doctor-popup-overlay" onClick={closePopup}>
          <div className="doctor-popup" onClick={(e) => e.stopPropagation()}>
            <button className="popup-close-btn" onClick={closePopup}>×</button>
            
            <div className="popup-content">
                             <div className="popup-header">
                 {selectedDoctor.image.startsWith('http') ? (
                   <img 
                     src={selectedDoctor.image} 
                     alt={selectedDoctor.name}
                     className="popup-avatar-image"
                   />
                 ) : (
                   <span className="popup-avatar">{selectedDoctor.image}</span>
                 )}
                 <h3 className="popup-name">
                   {selectedDoctor.name && selectedDoctor.name[currentLanguage] ? selectedDoctor.name[currentLanguage] : selectedDoctor.name?.en || 'Doctor'}
                 </h3>
                 <p className="popup-specialty">
                   {selectedDoctor.jobTitle && selectedDoctor.jobTitle[currentLanguage] ? selectedDoctor.jobTitle[currentLanguage] : selectedDoctor.jobTitle?.en || 'Specialist'}
                 </p>
               </div>
              
              <div className="popup-details">
                <div className="popup-experience">
                  <h4>{currentLanguage === 'ar' ? 'الخبرة' : 'Experience'}</h4>
                  <p>
                    {selectedDoctor.experience && selectedDoctor.experience[currentLanguage] 
                      ? selectedDoctor.experience[currentLanguage] 
                      : selectedDoctor.experience?.en || 'Experience not available'}
                  </p>
                </div>
                
                <div className="popup-description">
                  <h4>{currentLanguage === 'ar' ? 'الوصف' : 'Description'}</h4>
                  <p>
                    {selectedDoctor.description && selectedDoctor.description[currentLanguage] 
                      ? selectedDoctor.description[currentLanguage] 
                      : selectedDoctor.description?.en || 'Description not available'}
                  </p>
                </div>
                
                {selectedDoctor.specialties && selectedDoctor.specialties[currentLanguage] && Array.isArray(selectedDoctor.specialties[currentLanguage]) && (
                  <div className="popup-specialties">
                    <h4>{currentLanguage === 'ar' ? 'التخصصات' : 'Specialties'}</h4>
                    <div className="specialties-grid">
                      {selectedDoctor.specialties[currentLanguage].map((specialty, index) => (
                        <span key={index} className="specialty-tag">
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}


    </div>
  );
};

export default Team;
