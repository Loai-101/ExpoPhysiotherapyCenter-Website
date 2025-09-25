import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import { FaInstagram, FaFacebook, FaWhatsapp, FaEnvelope, FaYoutube } from 'react-icons/fa';
import { FaTiktok } from 'react-icons/fa6';
import './Home.css';

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [counts, setCounts] = useState({
    experience: 0,
    patients: 0,
    satisfaction: 0,
    emergency: 0
  });
  const { language } = useLanguage();

  // Bilingual content
  const content = {
    en: {
      heroTitle: "Welcome to Expo Physiotherapy Center",
      heroDescription: "To relieve the patient's pain, accelerate their recovery from the injury",
      ourServices: "Our Services",
      bookAppointment: "Book Appointment",
      movingText: [
        "Physical therapy is your path to a more active life.",
        "We restore your movement and bring you comfort.",
        "Years of expertise dedicated to your health.",
        "Personalized care for every condition.",
        "We use the latest technologies in physical therapy.",
        "Tangible results and testimonials from satisfied patients.",
        "We believe that every step towards recovery begins with trust.",
        "Our specialized team is ready to support you.",
        "We care for you from the first session until full recovery.",
        "Expo Physiotherapy… where your recovery journey begins."
      ],
      statistics: {
        experience: "8+ years of experience",
        patients: "4200+ satisfied patients",
        satisfaction: "93% satisfaction rate",
        emergency: "6 days / week"
      }
    },
    ar: {
      heroTitle: "مرحباً بكم في مركز إكسبو للعلاج الطبيعي",
      heroDescription: "لتخفيف آلام المريض، وتسريع تعافيه من الإصابة",
      ourServices: "خدماتنا",
      bookAppointment: "احجز موعد",
      movingText: [
        "العلاج الطبيعي هو طريقك نحو حياة أكثر نشاطًا.",
        "نعيد لك الحركة، ونمنحك الراحة.",
        "خبرة سنوات مكرسة لخدمة صحتك.",
        "رعاية شخصية لكل حالة.",
        "نستخدم أحدث التقنيات في العلاج الطبيعي.",
        "نتائج ملموسة وشهادات من مرضى راضين.",
        "نؤمن بأن كل خطوة نحو التعافي تبدأ بالثقة.",
        "فريقنا المتخصص جاهز لدعمك.",
        "نعتني بك من أول جلسة وحتى التعافي الكامل.",
        "مركز إكسبو للعلاج الطبيعي... حيث تبدأ رحلة تعافيك."
      ],
      statistics: {
        experience: "أكثر من 8 سنوات خبرة",
        patients: "أكثر من 4200 مريض راضٍ",
        satisfaction: "93% نسبة رضا",
        emergency: "6 أيام في الأسبوع"
      }
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setIsVisible(true);
          // Start counting animation only once when statistics section becomes visible
          startCounting();
          setHasAnimated(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('stats');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [hasAnimated]);

  const startCounting = () => {
    const duration = 2000; // 2 seconds
    const steps = 60;
    const stepDuration = duration / steps;

    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      
      const progress = currentStep / steps;
      
      setCounts({
        experience: Math.floor(8 * progress),
        patients: Math.floor(4200 * progress),
        satisfaction: Math.floor(93 * progress),
        emergency: Math.floor(6 * progress)
      });

      if (currentStep >= steps) {
        clearInterval(timer);
        // Ensure final values are exact
        setCounts({
          experience: 8,
          patients: 4200,
          satisfaction: 93,
          emergency: 6
        });
      }
    }, stepDuration);
  };

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section id="home" className="hero">
        {/* Video Background */}
        <div className="hero-video-background">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="hero-video"
          >
            <source 
              src="https://res.cloudinary.com/dvybb2xnc/video/upload/v1758447071/WhatsApp_Video_2025-09-21_at_11.59.33_3234d2c8_nxhdn4.mp4" 
              type="video/mp4" 
            />
            Your browser does not support the video tag.
          </video>
          <div className="hero-video-overlay"></div>
        </div>
        
        <div className="hero-container">
          <div className={`hero-content ${language === 'ar' ? 'rtl' : 'ltr'}`}>
            <h1 className="hero-title">
              {content[language].heroTitle}
            </h1>
            <p className="hero-description">
              {content[language].heroDescription}
            </p>
            <div className="hero-buttons">
              <Link to="/services" className="hero-button hero-button-primary">
                {content[language].ourServices}
              </Link>
              <Link to="/contact" className="hero-button hero-button-secondary">
                {content[language].bookAppointment}
              </Link>
            </div>
            
            {/* Social Media Icons */}
            <div className="hero-social-icons">
              <a 
                href="https://www.instagram.com/expo_physiotherapy_bh?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                target="_blank"
                rel="noopener noreferrer"
                className="hero-social-icon"
                title="Follow us on Instagram"
              >
                <FaInstagram />
              </a>
              
              <a 
                href="https://www.facebook.com/profile.php?id=61552938691116&sk=photos"
                target="_blank"
                rel="noopener noreferrer"
                className="hero-social-icon"
                title="Follow us on Facebook"
              >
                <FaFacebook />
              </a>
              
              <a 
                href="https://www.youtube.com/@expophysiotherapy/shorts"
                target="_blank"
                rel="noopener noreferrer"
                className="hero-social-icon"
                title="Subscribe to our YouTube channel"
              >
                <FaYoutube />
              </a>
              
              <a 
                href="https://www.tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hero-social-icon"
                title="Follow us on TikTok"
              >
                <FaTiktok />
              </a>
              
              <a 
                href="https://wa.me/97332260665"
                target="_blank"
                rel="noopener noreferrer"
                className="hero-social-icon"
                title="Contact us on WhatsApp"
              >
                <FaWhatsapp />
              </a>
              
              <a 
                href="mailto:expo.physiotherapy@gmail.com"
                className="hero-social-icon"
                title="Send us an email"
              >
                <FaEnvelope />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Moving Text Bar */}
      <section className="moving-text-section">
        <div className="moving-text-container">
          <div className={`moving-text-content ${language === 'ar' ? 'rtl' : 'ltr'}`}>
            {content[language].movingText.map((text, index) => (
              <span key={index} className="moving-text-item">{text}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section id="stats" className="stats-section">
        <div className="stats-container">
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number">{counts.experience}+</div>
              <div className="stat-label">{language === 'ar' ? 'سنوات خبرة' : 'Years Experience'}</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">{counts.patients}+</div>
              <div className="stat-label">{language === 'ar' ? 'مريض راضٍ' : 'Satisfied Patients'}</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">{counts.satisfaction}%</div>
              <div className="stat-label">{language === 'ar' ? 'نسبة الرضا' : 'Satisfaction Rate'}</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">{counts.emergency}</div>
              <div className="stat-label">{language === 'ar' ? 'أيام في الأسبوع' : 'Days / Week'}</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className={`about ${isVisible ? 'about-visible' : ''}`}>
        <div className="about-container">
            <div className="about-header">
              <h2 className="about-title">
                {language === 'ar' ? 'حول عيادتنا' : 'About Our Clinic'}
              </h2>
              <p className="about-description">
                {language === 'ar' 
                  ? "مركز اكسبو للعلاج الطبيعي يختص في علاج أمراض العظام و العمود الفقري و تأهيل الإصابات الرياضية و تأهيل أمراض الأعصاب بأحدث طرق العلاج اليدوي و أحدث الأجهزة العلاجية و البروتوكولات التأهيلية العلمية"
                  : "Expo Physiotherapy Center specializes in the treatment of orthopedic and spinal diseases, and the rehabilitation of sports and neurological injuries using the latest manual therapy methods, advanced therapeutic devices, and scientific rehabilitation protocols."
                }
              </p>
            </div>
          
          <div className="about-content">
            <div className="about-text">
                <div className="about-section">
                  <h3 className="about-section-title">
                    {language === 'ar' ? 'مهمتنا' : 'Our Mission'}
                  </h3>
                  <p className="about-description">
                    {language === 'ar' 
                      ? "تخلص المريض من ألمه و سرعة شفائه من الإصابة ورجوعه لنشاط حياته اليومية الطبيعية أو رياضته المفضلة من غير ألم"
                      : "To relieve the patient's pain, accelerate their recovery from the injury, and enable them to return to their normal daily activities or favorite sport, pain-free."
                    }
                  </p>
                </div>
              
              <div className="about-section">
                <h3 className="about-section-title">
                  {language === 'ar' ? 'لماذا مركز إكسبو للعلاج الطبيعي' : 'Why Expo Physiotherapy Center'}
                </h3>
                <div className="about-features">
                  <div className="about-feature">
                    <div className="about-feature-content">
                      <h4 className="about-feature-title">
                        {language === 'ar' ? 'خبرة الفريق' : 'Team Expertise'}
                      </h4>
                      <p className="about-feature-text">
                        {language === 'ar' 
                          ? "فريقنا يضم نخبة من أخصائيي العلاج الطبيعي المؤهلين، بخبرات دولية ومعرفة محدثة بأحدث البروتوكولات العلاجية. نؤمن بأن التميز يبدأ من الكفاءة، ونحرص على تقديم رعاية مبنية على العلم والخبرة."
                          : "Our team consists of a selection of qualified physical therapy specialists with international experience and updated knowledge of the latest treatment protocols. We believe that excellence begins with competence, and we are committed to providing care based on science and expertise."
                        }
                      </p>
                    </div>
                  </div>
                  
                  <div className="about-feature">
                    <div className="about-feature-content">
                      <h4 className="about-feature-title">
                        {language === 'ar' ? 'التقنيات الحديثة' : 'Modern Technologies'}
                      </h4>
                      <p className="about-feature-text">
                        {language === 'ar' 
                          ? "نستخدم أجهزة علاجية متقدمة مثل التحفيز الكهربائي، الموجات فوق الصوتية، وتقنيات IASTM وMulligan وThrust لتحسين نتائج العلاج وتسريع التعافي."
                          : "We use advanced therapeutic devices such as electrical stimulation, ultrasound waves, and IASTM, Mulligan, and Thrust techniques to improve treatment outcomes and accelerate recovery."
                        }
                      </p>
                    </div>
                  </div>
                  
                  <div className="about-feature">
                    <div className="about-feature-content">
                      <h4 className="about-feature-title">
                        {language === 'ar' ? 'رعاية متمركزة حول المريض' : 'Patient-Centered Care'}
                      </h4>
                      <p className="about-feature-text">
                        {language === 'ar' 
                          ? "كل حالة تُعامل كأنها الأولى. نُصمم خطط علاجية فردية تتناسب مع أهداف المريض، نمط حياته، واحتياجاته الخاصة، مع متابعة دقيقة لكل مرحلة من مراحل التعافي."
                          : "Every case is treated as a priority. We design individualized treatment plans that align with the patient's goals, lifestyle, and specific needs, with close follow-up throughout every stage of recovery."
                        }
                      </p>
                    </div>
                  </div>

                  <div className="about-feature">
                    <div className="about-feature-content">
                      <h4 className="about-feature-title">
                        {language === 'ar' ? 'تنوع الخدمات' : 'Diverse Services'}
                      </h4>
                      <p className="about-feature-text">
                        {language === 'ar' 
                          ? "من العلاج الطبيعي للأطفال والحوامل، إلى إعادة التأهيل العصبي والرياضي، نقدم مجموعة متكاملة من الخدمات التي تلبي احتياجات المجتمع المحلي بمهنية عالية."
                          : "From physical therapy for children and pregnant women to neurological and sports rehabilitation, we offer a comprehensive range of services that meet the needs of the local community with high professionalism."
                        }
                      </p>
                    </div>
                  </div>

                  <div className="about-feature">
                    <div className="about-feature-content">
                      <h4 className="about-feature-title">
                        {language === 'ar' ? 'بيئة علاجية مريحة' : 'Comfortable Therapeutic Environment'}
                      </h4>
                      <p className="about-feature-text">
                        {language === 'ar' 
                          ? "العيادة مصممة لتوفير تجربة علاجية مريحة وآمنة، مع اهتمام بالتفاصيل التي تعزز شعور المريض بالثقة والطمأنينة."
                          : "The clinic is designed to provide a comfortable and safe therapeutic experience, with attention to details that enhance the patient's feeling of trust and peace of mind."
                        }
                      </p>
                    </div>
                  </div>

                  <div className="about-feature">
                    <div className="about-feature-content">
                      <h4 className="about-feature-title">
                        {language === 'ar' ? 'نتائج ملموسة وشهادات مرضى' : 'Tangible Results and Patient Testimonials'}
                      </h4>
                      <p className="about-feature-text">
                        {language === 'ar' 
                          ? "نفتخر بنسبة رضا عالية من المرضى، وشهادات حقيقية تعكس جودة الخدمة وفعالية العلاج."
                          : "We pride ourselves on a high patient satisfaction rate and genuine testimonials that reflect the quality of our service and the effectiveness of our treatment."
                        }
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


    </div>
  );
};

export default Home;
