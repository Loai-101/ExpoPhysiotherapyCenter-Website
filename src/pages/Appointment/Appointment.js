import React, { useState } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import './Appointment.css';

const Appointment = () => {
  const { language } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    service: '',
    doctor: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', or null

  const content = {
    en: {
      form: {
        title: "Appointment Request Form",
        subtitle: "Fill out the form below and we'll get back to you within 24 hours",
        name: "Full Name *",
        email: "Email Address *",
        phone: "Phone Number *",
        date: "Preferred Date *",
        time: "Preferred Time *",
        service: "Service Needed *",
        doctor: "Choose Doctor *",
        submit: "Request Appointment",
        required: "* Required fields",
        submitting: "Sending Request...",
        success: "Appointment request sent successfully! We'll contact you within 24 hours.",
        error: "Failed to send appointment request. Please try again or call us directly."
      },
      services: {
        title: "Our Services",
        items: [
          "General Physical Therapy",
          "Sports Injury Rehabilitation", 
          "Neurological Rehabilitation",
          "Manual Therapy",
          "Pediatric Physical Therapy",
          "Prenatal & Postnatal Physiotherapy",
          "Dry Needling",
          "Kinesio Taping",
          "Cupping Therapy",
          "Therapeutic Exercises",
          "Chronic Pain Management",
          "Therapeutic Modalities"
        ]
      },
      times: [
        "9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM",
        "12:00 PM", "12:30 PM", "1:00 PM", "1:30 PM", "2:00 PM", "2:30 PM",
        "3:00 PM", "3:30 PM", "4:00 PM", "4:30 PM", "5:00 PM", "5:30 PM",
        "6:00 PM", "6:30 PM", "7:00 PM", "7:30 PM", "8:00 PM"
      ],
      doctors: [
        "Dyaa Zeidan - Physical Therapy Specialist",
        "Menatallah Helal - Physical Therapy Specialist", 
        "Mustafa Mohamed - Physical Therapy Specialist"
      ],
      contact: {
        title: "Prefer to Call?",
        phone: "Call us directly",
        whatsapp: "WhatsApp us",
        phoneNumber: "+97313630665",
        whatsappNumber: "+97332260665",
        hours: "Working Hours: Saturday to Thursday 9 AM - 9 PM"
      },
      info: {
        title: "What to Expect",
        items: [
          "We'll confirm your appointment within 24 hours",
          "Please arrive 15 minutes early for your first visit",
          "Bring any relevant medical reports or X-rays",
          "Wear comfortable clothing for your session",
          "Initial consultation is 60 minutes"
        ]
      }
    },
    ar: {
      form: {
        title: "نموذج طلب الموعد",
        subtitle: "املأ النموذج أدناه وسنرد عليك خلال 24 ساعة",
        name: "الاسم الكامل *",
        email: "عنوان البريد الإلكتروني *",
        phone: "رقم الهاتف *",
        date: "التاريخ المفضل *",
        time: "الوقت المفضل *",
        service: "الخدمة المطلوبة *",
        doctor: "اختر الطبيب *",
        submit: "طلب الموعد",
        required: "* الحقول المطلوبة",
        submitting: "جاري الإرسال...",
        success: "تم إرسال طلب الموعد بنجاح! سنتواصل معك خلال 24 ساعة.",
        error: "فشل في إرسال طلب الموعد. يرجى المحاولة مرة أخرى أو الاتصال بنا مباشرة."
      },
      services: {
        title: "خدماتنا",
        items: [
          "العلاج الطبيعي العام",
          "إعادة تأهيل الإصابات الرياضية",
          "إعادة التأهيل العصبي",
          "العلاج اليدوي",
          "العلاج الطبيعي للأطفال",
          "العلاج الطبيعي للحوامل وما بعد الولادة",
          "العلاج بالأبر الجافة",
          "العلاج باللاصق الرياضي",
          "الحجامة الجافة والنبوية",
          "التمارين العلاجية",
          "إدارة الألم المزمن",
          "العلاج بالأجهزة العلاجية"
        ]
      },
      times: [
        "9:00 ص", "9:30 ص", "10:00 ص", "10:30 ص", "11:00 ص", "11:30 ص",
        "12:00 م", "12:30 م", "1:00 م", "1:30 م", "2:00 م", "2:30 م",
        "3:00 م", "3:30 م", "4:00 م", "4:30 م", "5:00 م", "5:30 م",
        "6:00 م", "6:30 م", "7:00 م", "7:30 م", "8:00 م"
      ],
      doctors: [
        "ضياء زيدان - أخصائي علاج طبيعي",
        "منه الله هلال - أخصائية علاج طبيعي",
        "مصطفى محمد - أخصائي علاج طبيعي"
      ],
      contact: {
        title: "تفضل الاتصال؟",
        phone: "اتصل بنا مباشرة",
        whatsapp: "راسلنا عبر الواتساب",
        phoneNumber: "+97313630665",
        whatsappNumber: "+97332260665",
        hours: "ساعات العمل: السبت إلى الخميس 9 صباحًا - 9 مساءً"
      },
      info: {
        title: "ما يمكن توقعه",
        items: [
          "سنؤكد موعدك خلال 24 ساعة",
          "يرجى الحضور قبل 15 دقيقة من موعدك الأول",
          "أحضر أي تقارير طبية أو أشعة ذات صلة",
          "ارتدِ ملابس مريحة لجلستك",
          "الاستشارة الأولية 60 دقيقة"
        ]
      }
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Prepare form data for FormSubmit
      const formDataToSend = new FormData();
      formDataToSend.append('name', formData.name);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('phone', formData.phone);
      formDataToSend.append('appointment_date', formData.date);
      formDataToSend.append('appointment_time', formData.time);
      formDataToSend.append('service', formData.service);
      formDataToSend.append('doctor', formData.doctor);
      formDataToSend.append('language', language === 'ar' ? 'Arabic' : 'English');
      formDataToSend.append('_subject', language === 'ar' 
        ? 'طلب حجز موعد - مركز إكسبو للعلاج الطبيعي'
        : 'New Appointment Request - Expo Physiotherapy Center');
      formDataToSend.append('_captcha', 'false');
      formDataToSend.append('_template', 'table');

      // Send to FormSubmit
      const response = await fetch('https://formsubmit.co/q9g8moh@gmail.com', {
        method: 'POST',
        body: formDataToSend,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setSubmitStatus('success');
        
        // Reset form after successful submission
        setFormData({
          name: '',
          email: '',
          phone: '',
          date: '',
          time: '',
          service: '',
          doctor: ''
        });
      } else {
        throw new Error('Form submission failed');
      }

    } catch (error) {
      console.error('FormSubmit Error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const getMinDate = () => {
    const today = new Date();
    return today.toISOString().split('T')[0];
  };

  return (
    <div className="appointment-page">
      {/* Main Content */}
      <section className="appointment-main">
        <div className="appointment-container">
          <div className="appointment-layout">
            {/* Appointment Form */}
            <div className="appointment-form-section">
              <div className="appointment-form-container">
                <h2 className="appointment-form-title">{content[language].form.title}</h2>
                <p className="appointment-form-subtitle">{content[language].form.subtitle}</p>
                
                <form onSubmit={handleSubmit} className="appointment-form">
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="name">{content[language].form.name}</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="form-input"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">{content[language].form.email}</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="form-input"
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="phone">{content[language].form.phone}</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="form-input"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="date">{content[language].form.date}</label>
                      <input
                        type="date"
                        id="date"
                        name="date"
                        value={formData.date}
                        onChange={handleInputChange}
                        min={getMinDate()}
                        required
                        className="form-input"
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="time">{content[language].form.time}</label>
                      <select
                        id="time"
                        name="time"
                        value={formData.time}
                        onChange={handleInputChange}
                        required
                        className="form-select"
                      >
                        <option value="">{language === 'ar' ? 'اختر الوقت' : 'Select Time'}</option>
                        {content[language].times.map((time, index) => (
                          <option key={index} value={time}>{time}</option>
                        ))}
                      </select>
                    </div>
                    <div className="form-group">
                      <label htmlFor="service">{content[language].form.service}</label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        required
                        className="form-select"
                      >
                        <option value="">{language === 'ar' ? 'اختر الخدمة' : 'Select Service'}</option>
                        {content[language].services.items.map((service, index) => (
                          <option key={index} value={service}>{service}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="doctor">{content[language].form.doctor}</label>
                    <select
                      id="doctor"
                      name="doctor"
                      value={formData.doctor}
                      onChange={handleInputChange}
                      required
                      className="form-select"
                    >
                      <option value="">{language === 'ar' ? 'اختر الطبيب' : 'Select Doctor'}</option>
                      {content[language].doctors.map((doctor, index) => (
                        <option key={index} value={doctor}>{doctor}</option>
                      ))}
                    </select>
                  </div>

                  <p className="form-required">{content[language].form.required}</p>
                  
                  {/* Status Messages */}
                  {submitStatus === 'success' && (
                    <div className="form-status success">
                      <span className="status-icon">✓</span>
                      {content[language].form.success}
                    </div>
                  )}
                  
                  {submitStatus === 'error' && (
                    <div className="form-status error">
                      <span className="status-icon">✗</span>
                      {content[language].form.error}
                    </div>
                  )}
                  
                  <button 
                    type="submit" 
                    className="form-submit-button"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? content[language].form.submitting : content[language].form.submit}
                  </button>
                </form>
              </div>
            </div>

            {/* Sidebar */}
            <div className="appointment-sidebar">
              {/* Contact Info */}
              <div className="sidebar-section">
                <h3 className="sidebar-title">{content[language].contact.title}</h3>
                <div className="contact-methods">
                  <a href={`tel:${content[language].contact.phoneNumber}`} className="contact-method">
                    <span className="contact-icon">📞</span>
                    <div>
                      <strong>{content[language].contact.phone}</strong>
                      <p>{content[language].contact.phoneNumber}</p>
                    </div>
                  </a>
                  
                  <a href={`https://wa.me/${content[language].contact.whatsappNumber.replace('+', '')}`} className="contact-method">
                    <span className="contact-icon">💬</span>
                    <div>
                      <strong>{content[language].contact.whatsapp}</strong>
                      <p>{content[language].contact.whatsappNumber}</p>
                    </div>
                  </a>
                </div>
                <p className="working-hours">{content[language].contact.hours}</p>
              </div>

              {/* What to Expect */}
              <div className="sidebar-section">
                <h3 className="sidebar-title">{content[language].info.title}</h3>
                <ul className="expectation-list">
                  {content[language].info.items.map((item, index) => (
                    <li key={index} className="expectation-item">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Appointment;
