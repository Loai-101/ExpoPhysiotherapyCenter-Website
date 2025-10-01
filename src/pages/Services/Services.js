import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import { 
  FaRunning,
  FaChild,
  FaDumbbell,
  FaBrain,
  FaHandsHelping,
  FaBolt,
  FaUserNurse,
  FaHeartbeat,
  FaWalking,
  FaInstagram,
  FaFacebook,
  FaWhatsapp,
  FaEnvelope,
  FaYoutube
} from 'react-icons/fa';
import { FaTiktok } from 'react-icons/fa6';
import './Services.css';

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
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

    const element = document.getElementById('services');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const openServicePopup = (service) => {
    setSelectedService(service);
  };

  const closeServicePopup = () => {
    setSelectedService(null);
  };

  const services = [
    {
      id: 1,
      name: {
        en: "Orthopedic Rehabilitation",
        ar: "إعادة التأهيل العظمي"
      },
      description: {
        en: "Customized therapeutic programs for muscle and joint injuries such as the knee, back, and shoulder, in addition to post-surgical care.",
        ar: "برامج علاجية مخصصة لإصابات العضلات والمفاصل مثل الركبة، الظهر، والكتف، بالإضافة إلى الرعاية بعد العمليات الجراحية."
      },
      provider: {
        en: "One of the clinic's qualified physical therapy specialists.",
        ar: "أحد أخصائيي العلاج الطبيعي المؤهلين في العيادة"
      },
      treatments: {
        en: [
          "Joint Mobilization",
          "Muscle strengthening exercises",
          "Posture correction",
          "Gait training",
          "Mulligan and Thrust techniques",
          "Manual therapy",
          "Therapeutic exercises",
          "Electrotherapy & Ultrasound"
        ],
        ar: [
          "التحريك المفصلي",
          "تمارين تقوية العضلات",
          "تصحيح القوام",
          "تدريب المشي",
          "تقنيات Mulligan وThrust",
          "العلاج اليدوي",
          "العلاج بالتمارين العلاجية",
          "العلاج بالأجهزة (Electrotherapy & Ultrasound)"
        ]
      },
      doctors: [
        {
          name: {
            en: "Dyaa Zeidan",
            ar: "ضياء زيدان"
          },
          specialty: {
            en: "Motor Rehabilitation & Manual Therapy",
            ar: "إعادة التأهيل الحركي والعلاج اليدوي"
          },
          image: "https://res.cloudinary.com/dvybb2xnc/image/upload/w_300,h_300,c_fill,g_face/v1758610688/%D8%AA%D8%B5%D9%85%D9%8A%D9%85_%D8%A8%D8%AF%D9%88%D9%86_%D8%B9%D9%86%D9%88%D8%A7%D9%86_4_xdlopu.png"
        }
      ],
      icon: <FaRunning />
    },
    {
      id: 2,
      name: {
        en: "Sports Injury Rehabilitation",
        ar: "إعادة تأهيل الإصابات الرياضية"
      },
      description: {
        en: "Assessment and treatment of injuries resulting from athletic activity, with programs to improve performance and prevent recurrence.",
        ar: "تقييم وعلاج الإصابات الناتجة عن النشاط الرياضي، مع برامج لتحسين الأداء والوقاية من الانتكاسات."
      },
      provider: {
        en: "One of the clinic's qualified physical therapy specialists.",
        ar: "أحد أخصائيي العلاج الطبيعي المؤهلين في العيادة"
      },
      treatments: {
        en: [
          "Injury assessment",
          "Rehabilitative exercises",
          "Kinesiotape",
          "IASTM techniques",
          "Tissue release techniques",
          "Muscle strengthening",
          "Improving motor performance"
        ],
        ar: [
          "تقييم الإصابة",
          "تمارين تأهيلية",
          "kinesiotape",
          "تقنيات IASTM",
          "تقنيات تحرير الأنسجة",
          "تقوية العضلات",
          "تحسين الأداء الحركي"
        ]
      },
      doctors: [
        {
          name: {
            en: "Mustafa Mohamed",
            ar: "مصطفى محمد"
          },
          specialty: {
            en: "Sports Injuries & Motor Performance",
            ar: "الإصابات الرياضية والأداء الحركي"
          },
          image: "https://res.cloudinary.com/dvybb2xnc/image/upload/w_300,h_300,c_fill,g_face/v1758615309/%D8%AA%D8%B5%D9%85%D9%8A%D9%85_%D8%A8%D8%AF%D9%88%D9%86_%D8%B9%D9%86%D9%88%D8%A7%D9%86_6_exz01y.png"
        }
      ],
      icon: <FaDumbbell />
    },
    {
      id: 3,
      name: {
        en: "Neurological Rehabilitation",
        ar: "إعادة التأهيل العصبي"
      },
      description: {
        en: "Comprehensive treatment for neurological conditions such as strokes, Parkinson's disease, and multiple sclerosis, using stimulating techniques and functional exercises.",
        ar: "علاج شامل للحالات العصبية مثل الجلطات الدماغية، باركنسون، والتصلب المتعدد، باستخدام تقنيات تحفيزية وتمارين وظيفية."
      },
      provider: {
        en: "One of the clinic's qualified physical therapy specialists.",
        ar: "أحد أخصائيي العلاج الطبيعي المؤهلين في العيادة"
      },
      treatments: {
        en: [
          "Cognitive training",
          "Motor re-learning",
          "Manual therapy",
          "Functional exercises",
          "Electrical stimulation",
          "Balance and coordination sessions"
        ],
        ar: [
          "تدريب الإدراك",
          "إعادة تنظيم الحركة",
          "العلاج اليدوي",
          "تمارين وظيفية",
          "تحفيز كهربائي",
          "جلسات توازن وتنسيق"
        ]
      },
      doctors: [
        {
          name: {
            en: "Menatallah Helal",
            ar: "منه الله هلال"
          },
          specialty: {
            en: "Neurological & Muscular Conditions",
            ar: "الحالات العصبية والعضلية"
          },
          image: "https://res.cloudinary.com/dvybb2xnc/image/upload/w_300,h_300,c_fill,g_face/v1758613943/%D8%AA%D8%B5%D9%85%D9%8A%D9%85_%D8%A8%D8%AF%D9%88%D9%86_%D8%B9%D9%86%D9%88%D8%A7%D9%86_5_igdtp7.png"
        }
      ],
      icon: <FaBrain />
    },
    {
      id: 4,
      name: {
        en: "Manual Therapy",
        ar: "العلاج اليدوي"
      },
      description: {
        en: "Advanced manual techniques to relieve pain, relax muscles, and improve joint movement, including Mulligan and Thrust.",
        ar: "تقنيات يدوية متقدمة لتخفيف الألم، ترخية العضلات، وتحسين حركة المفاصل، تشمل Mulligan وThrust."
      },
      provider: {
        en: "One of the clinic's qualified physical therapy specialists.",
        ar: "أحد أخصائيي العلاج الطبيعي المؤهلين في العيادة"
      },
      treatments: {
        en: [
          "Muscle relaxation",
          "Tissue release",
          "Joint mobilization",
          "Trigger point therapy",
          "Mulligan and Thrust techniques",
          "Myofascial release techniques"
        ],
        ar: [
          "ترخية العضلات",
          "تحرير الأنسجة",
          "تحريك المفاصل",
          "علاج العقد العضلية",
          "تقنيات Mulligan وThrust",
          "تقنيات ترخية وتحرير الأنسجة العضلية"
        ]
      },
      doctors: [
        {
          name: {
            en: "Dyaa Zeidan",
            ar: "ضياء زيدان"
          },
          specialty: {
            en: "Motor Rehabilitation & Manual Therapy",
            ar: "إعادة التأهيل الحركي والعلاج اليدوي"
          },
          image: "https://res.cloudinary.com/dvybb2xnc/image/upload/w_300,h_300,c_fill,g_face/v1758610688/%D8%AA%D8%B5%D9%85%D9%8A%D9%85_%D8%A8%D8%AF%D9%88%D9%86_%D8%B9%D9%86%D9%88%D8%A7%D9%86_4_xdlopu.png"
        }
      ],
      icon: <FaHandsHelping />
    },
    {
      id: 5,
      name: {
        en: "Dry Needling",
        ar: "العلاج بالأبر الجافة"
      },
      description: {
        en: "An effective technique for treating muscular pain points, including electrical stimulation to enhance results.",
        ar: "تقنية فعالة لعلاج نقاط الألم العضلي، تشمل التحفيز الكهربائي لتحسين النتائج."
      },
      provider: {
        en: "One of the clinic's qualified physical therapy specialists.",
        ar: "أحد أخصائيي العلاج الطبيعي المؤهلين في العيادة"
      },
      treatments: {
        en: [
          "Dry needling",
          "Dry needling with electrical stimulation",
          "Myofascial trigger point treatment",
          "Precise pain relief techniques"
        ],
        ar: [
          "الأبر الجافة",
          "الأبر الجافة بالتحفيز الكهربائي",
          "علاج نقاط الزناد العضلي",
          "تقنيات دقيقة لتخفيف الألم"
        ]
      },
      doctors: [
        {
          name: {
            en: "Dyaa Zeidan",
            ar: "ضياء زيدان"
          },
          specialty: {
            en: "Motor Rehabilitation & Manual Therapy",
            ar: "إعادة التأهيل الحركي والعلاج اليدوي"
          },
          image: "https://res.cloudinary.com/dvybb2xnc/image/upload/w_300,h_300,c_fill,g_face/v1758610688/%D8%AA%D8%B5%D9%85%D9%8A%D9%85_%D8%A8%D8%AF%D9%88%D9%86_%D8%B9%D9%86%D9%88%D8%A7%D9%86_4_xdlopu.png"
        }
      ],
      icon: <FaUserNurse />
    },
    {
      id: 6,
      name: {
        en: "Kinesio Taping",
        ar: "العلاج باللاصق الرياضي"
      },
      description: {
        en: "Supporting muscles and joints and improving movement using flexible therapeutic tapes.",
        ar: "دعم العضلات والمفاصل وتحسين الحركة باستخدام شرائط علاجية مرنة."
      },
      provider: {
        en: "One of the clinic's qualified physical therapy specialists.",
        ar: "أحد أخصائيي العلاج الطبيعي المؤهلين في العيادة"
      },
      treatments: {
        en: [
          "Kinesiotape application",
          "Joint support",
          "Inflammation reduction",
          "Improving motor performance"
        ],
        ar: [
          "تطبيق kinesiotape",
          "دعم المفاصل",
          "تقليل الالتهابات",
          "تحسين الأداء الحركي"
        ]
      },
      doctors: [
        {
          name: {
            en: "Mustafa Mohamed",
            ar: "مصطفى محمد"
          },
          specialty: {
            en: "Sports Injuries & Motor Performance",
            ar: "الإصابات الرياضية والأداء الحركي"
          },
          image: "https://res.cloudinary.com/dvybb2xnc/image/upload/w_300,h_300,c_fill,g_face/v1758615309/%D8%AA%D8%B5%D9%85%D9%8A%D9%85_%D8%A8%D8%AF%D9%88%D9%86_%D8%B9%D9%86%D9%88%D8%A7%D9%86_6_exz01y.png"
        }
      ],
      icon: <FaHeartbeat />
    },
    {
      id: 7,
      name: {
        en: "Cupping Therapy",
        ar: "الحجامة الجافة والنبوية"
      },
      description: {
        en: "A traditional treatment to stimulate blood circulation and relieve muscle tension, using modern and safe techniques.",
        ar: "علاج تقليدي لتحفيز الدورة الدموية وتخفيف التوتر العضلي، باستخدام تقنيات حديثة وآمنة."
      },
      provider: {
        en: "Diaa Zidan - Physical Therapy Specialist",
        ar: "ضياء زيدان - اخصائي علاج طبيعي"
      },
      treatments: {
        en: [
          "Dry cupping",
          "Prophetic cupping",
          "Blood circulation activation",
          "Muscle detoxification"
        ],
        ar: [
          "الحجامة الجافة",
          "الحجامة النبوية",
          "تنشيط الدورة الدموية",
          "إزالة السموم العضلية"
        ]
      },
      doctors: [
        {
          name: {
            en: "Dyaa Zeidan",
            ar: "ضياء زيدان"
          },
          specialty: {
            en: "Motor Rehabilitation & Manual Therapy",
            ar: "إعادة التأهيل الحركي والعلاج اليدوي"
          },
          image: "https://res.cloudinary.com/dvybb2xnc/image/upload/w_300,h_300,c_fill,g_face/v1758610688/%D8%AA%D8%B5%D9%85%D9%8A%D9%85_%D8%A8%D8%AF%D9%88%D9%86_%D8%B9%D9%86%D9%88%D8%A7%D9%86_4_xdlopu.png"
        }
      ],
      icon: <FaWalking />
    },
    {
      id: 8,
      name: {
        en: "Therapeutic Exercises",
        ar: "التمارين العلاجية"
      },
      description: {
        en: "Customized exercise programs to improve posture, strengthen muscles, and treat muscle tension.",
        ar: "برامج تمارين مخصصة لتحسين القوام، تقوية العضلات، وعلاج الشد العضلي."
      },
      provider: {
        en: "One of the clinic's qualified physical therapy specialists.",
        ar: "أحد أخصائيي العلاج الطبيعي المؤهلين في العيادة"
      },
      treatments: {
        en: [
          "Exercises for posture improvement",
          "Muscle strengthening",
          "Muscle tension treatment",
          "Guided functional exercises"
        ],
        ar: [
          "تمارين لتحسين القوام",
          "تقوية العضلات",
          "علاج الشد العضلي",
          "تمارين وظيفية موجهة"
        ]
      },
      doctors: [
        {
          name: {
            en: "Menatallah Helal",
            ar: "منه الله هلال"
          },
          specialty: {
            en: "Neurological & Muscular Conditions",
            ar: "الحالات العصبية والعضلية"
          },
          image: "https://res.cloudinary.com/dvybb2xnc/image/upload/w_300,h_300,c_fill,g_face/v1758613943/%D8%AA%D8%B5%D9%85%D9%8A%D9%85_%D8%A8%D8%AF%D9%88%D9%86_%D8%B9%D9%86%D9%88%D8%A7%D9%86_5_igdtp7.png"
        }
      ],
      icon: <FaRunning />
    },
    {
      id: 9,
      name: {
        en: "Pediatric Physical Therapy",
        ar: "العلاج الطبيعي للأطفال"
      },
      description: {
        en: "Specialized therapeutic sessions for children with developmental delays or motor challenges, using stimulating and interactive techniques.",
        ar: "جلسات علاجية مخصصة للأطفال الذين يعانون من تأخر نمائي أو تحديات حركية، باستخدام تقنيات تحفيزية وتفاعلية."
      },
      provider: {
        en: "One of the clinic's qualified physical therapy specialists.",
        ar: "أحد أخصائيي العلاج الطبيعي المؤهلين في العيادة"
      },
      treatments: {
        en: [
          "Motor skills development",
          "Balance and coordination training",
          "Sensory integration",
          "Guided functional exercises",
          "Supporting normal motor development"
        ],
        ar: [
          "تنمية المهارات الحركية",
          "تدريب التوازن والتنسيق",
          "التكامل الحسي",
          "تمارين وظيفية موجهة",
          "دعم النمو الحركي الطبيعي"
        ]
      },
      doctors: [
        {
          name: {
            en: "Menatallah Helal",
            ar: "منه الله هلال"
          },
          specialty: {
            en: "Neurological & Muscular Conditions",
            ar: "الحالات العصبية والعضلية"
          },
          image: "https://res.cloudinary.com/dvybb2xnc/image/upload/w_300,h_300,c_fill,g_face/v1758613943/%D8%AA%D8%B5%D9%85%D9%8A%D9%85_%D8%A8%D8%AF%D9%88%D9%86_%D8%B9%D9%86%D9%88%D8%A7%D9%86_5_igdtp7.png"
        }
      ],
      icon: <FaChild />
    },
    {
      id: 10,
      name: {
        en: "Prenatal & Postnatal Physiotherapy",
        ar: "العلاج الطبيعي للحوامل وما بعد الولادة"
      },
      description: {
        en: "Supporting women during and after pregnancy to improve posture, relieve pain, and promote motor recovery.",
        ar: "دعم النساء خلال فترة الحمل وبعد الولادة لتحسين القوام، تخفيف الألم، وتعزيز التعافي الحركي."
      },
      provider: {
        en: "One of the clinic's qualified physical therapy specialists.",
        ar: "أحد أخصائيي العلاج الطبيعي المؤهلين في العيادة"
      },
      treatments: {
        en: [
          "Pelvic floor muscle strengthening exercises",
          "Back and hip pain treatment",
          "Posture improvement",
          "Postpartum recovery support",
          "Relaxation and balance sessions"
        ],
        ar: [
          "تمارين تقوية عضلات الحوض",
          "علاج آلام الظهر والورك",
          "تحسين القوام",
          "دعم التعافي بعد الولادة",
          "جلسات استرخاء وتوازن"
        ]
      },
      doctors: [
        {
          name: {
            en: "Menatallah Helal",
            ar: "منه الله هلال"
          },
          specialty: {
            en: "Neurological & Muscular Conditions",
            ar: "الحالات العصبية والعضلية"
          },
          image: "https://res.cloudinary.com/dvybb2xnc/image/upload/w_300,h_300,c_fill,g_face/v1758613943/%D8%AA%D8%B5%D9%85%D9%8A%D9%85_%D8%A8%D8%AF%D9%88%D9%86_%D8%B9%D9%86%D9%88%D8%A7%D9%86_5_igdtp7.png"
        }
      ],
      icon: <FaBolt />
    },
    {
      id: 11,
      name: {
        en: "Chronic Pain Management",
        ar: "إدارة الألم المزمن"
      },
      description: {
        en: "Customized treatment programs to alleviate chronic pain and improve quality of life using multiple techniques.",
        ar: "برامج علاجية مخصصة لتخفيف الألم المزمن وتحسين جودة الحياة باستخدام تقنيات متعددة."
      },
      provider: {
        en: "One of the clinic's qualified physical therapy specialists.",
        ar: "أحد أخصائيي العلاج الطبيعي المؤهلين في العيادة"
      },
      treatments: {
        en: [
          "Manual therapy",
          "Electrical stimulation",
          "Tissue release techniques",
          "Therapeutic exercises",
          "Cupping therapy",
          "Dry needling"
        ],
        ar: [
          "العلاج اليدوي",
          "التحفيز الكهربائي",
          "تقنيات تحرير الأنسجة",
          "تمارين علاجية",
          "الحجامة",
          "الإبر الجافة"
        ]
      },
      doctors: [
        {
          name: {
            en: "Mustafa Mohamed",
            ar: "مصطفى محمد"
          },
          specialty: {
            en: "Sports Injuries & Motor Performance",
            ar: "الإصابات الرياضية والأداء الحركي"
          },
          image: "https://res.cloudinary.com/dvybb2xnc/image/upload/w_300,h_300,c_fill,g_face/v1758615309/%D8%AA%D8%B5%D9%85%D9%8A%D9%85_%D8%A8%D8%AF%D9%88%D9%86_%D8%B9%D9%86%D9%88%D8%A7%D9%86_6_exz01y.png"
        }
      ],
      icon: <FaHeartbeat />
    },
    {
      id: 12,
      name: {
        en: "Therapeutic Modalities",
        ar: "العلاج بالأجهزة العلاجية"
      },
      description: {
        en: "Using advanced devices such as electrical stimulation and ultrasound to accelerate recovery and relieve pain.",
        ar: "استخدام أجهزة متقدمة مثل التحفيز الكهربائي والموجات فوق الصوتية لتسريع التعافي وتخفيف الألم."
      },
      provider: {
        en: "One of the clinic's qualified physical therapy specialists.",
        ar: "أحد أخصائيي العلاج الطبيعي المؤهلين في العيادة"
      },
      treatments: {
        en: [
          "Electrical stimulation (TENS)",
          "Ultrasound therapy",
          "Heat and cold therapy",
          "Guided sessions based on the condition"
        ],
        ar: [
          "التحفيز الكهربائي (TENS)",
          "العلاج بالموجات فوق الصوتية",
          "العلاج بالحرارة والبرودة",
          "جلسات موجهة حسب الحالة"
        ]
      },
      doctors: [
        {
          name: {
            en: "Mustafa Mohamed",
            ar: "مصطفى محمد"
          },
          specialty: {
            en: "Sports Injuries & Motor Performance",
            ar: "الإصابات الرياضية والأداء الحركي"
          },
          image: "https://res.cloudinary.com/dvybb2xnc/image/upload/w_300,h_300,c_fill,g_face/v1758615309/%D8%AA%D8%B5%D9%85%D9%8A%D9%85_%D8%A8%D8%AF%D9%88%D9%86_%D8%B9%D9%86%D9%88%D8%A7%D9%86_6_exz01y.png"
        }
      ],
      icon: <FaBolt />
    },
    {
      id: 13,
      name: {
        en: "Advanced Mobility Techniques",
        ar: "تقنيات متقدمة لتحسين الحركة"
      },
      description: {
        en: "Applying modern techniques such as Mulligan and Thrust to improve joint function and natural movement.",
        ar: "تطبيق تقنيات حديثة مثل Mulligan وThrust لتحسين وظيفة المفاصل والحركة الطبيعية."
      },
      provider: {
        en: "One of the clinic's qualified physical therapy specialists.",
        ar: "أحد أخصائيي العلاج الطبيعي المؤهلين في العيادة"
      },
      treatments: {
        en: [
          "Mulligan mobilization",
          "Thrust manipulation",
          "Joint mobilization",
          "Posture correction",
          "Functional movement training"
        ],
        ar: [
          "Mulligan Mobilization",
          "Thrust Manipulation",
          "التحريك المفصلي",
          "تصحيح القوام",
          "تدريب الحركة الوظيفية"
        ]
      },
      doctors: [
        {
          name: {
            en: "Dyaa Zeidan",
            ar: "ضياء زيدان"
          },
          specialty: {
            en: "Motor Rehabilitation & Manual Therapy",
            ar: "إعادة التأهيل الحركي والعلاج اليدوي"
          },
          image: "https://res.cloudinary.com/dvybb2xnc/image/upload/w_300,h_300,c_fill,g_face/v1758610688/%D8%AA%D8%B5%D9%85%D9%8A%D9%85_%D8%A8%D8%AF%D9%88%D9%86_%D8%B9%D9%86%D9%88%D8%A7%D9%86_4_xdlopu.png"
        }
      ],
      icon: <FaHandsHelping />
    }
  ];

  return (
    <div className="services-page">
      {/* Hero Section */}
      <section className="services-hero">
        <div className="services-hero-video">
          <video autoPlay muted loop playsInline>
            <source
              src="https://res.cloudinary.com/dvybb2xnc/video/upload/v1758447065/WhatsApp_Video_2025-09-21_at_11.59.30_74414ac2_pap0wv.mp4"
              type="video/mp4"
            />
          </video>
        </div>
        <div className="services-hero-overlay"></div>
        <div className="services-hero-container">
          <div className={`services-hero-content ${currentLanguage === 'ar' ? 'rtl' : 'ltr'}`}>
            <h1 className="services-hero-title">
              {currentLanguage === 'ar' ? 'خدماتنا' : 'Our Services'}
            </h1>
            <p className="services-hero-description">
              {currentLanguage === 'ar' 
                ? 'نقدم مجموعة شاملة من خدمات العلاج الطبيعي المتخصصة لمساعدتك على التعافي والعودة إلى حياتك الطبيعية'
                : 'We provide a comprehensive range of specialized physiotherapy services to help you recover and return to your normal life'
              }
            </p>
            <div className="services-hero-buttons">
              <Link to="/appointment" className="services-hero-button-primary">
                {currentLanguage === 'ar' ? 'احجز موعد' : 'Book Appointment'}
              </Link>
              <Link to="/team" className="services-hero-button-secondary">
                {currentLanguage === 'ar' ? 'فريقنا الطبي' : 'Our Medical Team'}
              </Link>
            </div>
            
            {/* Social Media Icons */}
            <div className="services-social-icons">
              <a 
                href="https://www.instagram.com/expo_physiotherapy_bh?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                target="_blank"
                rel="noopener noreferrer"
                className="services-social-icon"
                title="Follow us on Instagram"
              >
                <FaInstagram />
              </a>
              
              <a 
                href="https://www.facebook.com/profile.php?id=61552938691116&sk=photos"
                target="_blank"
                rel="noopener noreferrer"
                className="services-social-icon"
                title="Follow us on Facebook"
              >
                <FaFacebook />
              </a>
              
              <a 
                href="https://www.youtube.com/@expophysiotherapy/shorts"
                target="_blank"
                rel="noopener noreferrer"
                className="services-social-icon"
                title="Subscribe to our YouTube channel"
              >
                <FaYoutube />
              </a>
              
              <a 
                href="https://www.tiktok.com/@expo.physiotherap"
                target="_blank"
                rel="noopener noreferrer"
                className="services-social-icon"
                title="Follow us on TikTok"
              >
                <FaTiktok />
              </a>
              
              <a 
                href="https://wa.me/97332260665"
                target="_blank"
                rel="noopener noreferrer"
                className="services-social-icon"
                title="Contact us on WhatsApp"
              >
                <FaWhatsapp />
              </a>
              
              <a 
                href="mailto:expo.physiotherapy@gmail.com"
                className="services-social-icon"
                title="Send us an email"
              >
                <FaEnvelope />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Moving Services Bar */}
      <div className="moving-services-bar">
        <div className="moving-services-content">
          {services.map((service, index) => (
            <React.Fragment key={index}>
              <span>{service.name && service.name[currentLanguage] ? service.name[currentLanguage] : service.name?.en || 'Service'}</span>
              <span>•</span>
            </React.Fragment>
          ))}
          {services.map((service, index) => (
            <React.Fragment key={`repeat-${index}`}>
              <span>{service.name && service.name[currentLanguage] ? service.name[currentLanguage] : service.name?.en || 'Service'}</span>
              <span>•</span>
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Services Section */}
      <section id="services" className={`services ${isVisible ? 'services-visible' : ''}`}>
        <div className="services-container">
          
          <div className="services-grid">
            {services.map((service, index) => (
              <div 
                key={service.id}
                className="service-card"
                onClick={() => openServicePopup(service)}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="service-icon">
                  <span className="service-icon-text">{service.icon}</span>
                </div>
                
                <div className="service-content">
                  <h3 className="service-name">{service.name && service.name[currentLanguage] ? service.name[currentLanguage] : service.name?.en || 'Service'}</h3>
                  <p className="service-description">{service.description && service.description[currentLanguage] ? service.description[currentLanguage] : service.description?.en || 'Description not available'}</p>
                  

                  
                  <div className="service-features">
                    <h4 className="features-title">{currentLanguage === 'ar' ? 'العلاجات المشمولة:' : 'Included Treatments:'}</h4>
                    <ul className="features-list">
                      {service.treatments && service.treatments[currentLanguage] && service.treatments[currentLanguage].slice(0, 4).map((treatment, treatmentIndex) => (
                        <li key={treatmentIndex} className="feature-item">
                          {treatment}
                        </li>
                      ))}
                      {service.treatments && service.treatments[currentLanguage] && service.treatments[currentLanguage].length > 4 && (
                        <li className="feature-item more-treatments">
                          {currentLanguage === 'ar' ? `+${service.treatments[currentLanguage].length - 4} علاجات أخرى` : `+${service.treatments[currentLanguage].length - 4} more treatments`}
                        </li>
                      )}
                    </ul>
                  </div>
                  
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Doctors Popup */}
      {selectedService && selectedService.name && (
        <div className="service-popup-overlay" onClick={closeServicePopup}>
          <div className="service-popup" onClick={(e) => e.stopPropagation()}>
            <button className="service-popup-close-btn" onClick={closeServicePopup}>×</button>
            
            <div className="service-popup-content">
              <div className="service-popup-header">
                <div className="service-popup-icon">
                  {selectedService.iconImage ? (
                    <img 
                      src={selectedService.iconImage} 
                      alt={selectedService.name?.en || selectedService.name || 'Service'}
                      className="service-popup-icon-image"
                    />
                  ) : (
                    <span className="service-popup-icon-text">{selectedService.icon}</span>
                  )}
                </div>
                <h3 className="service-popup-name">{selectedService.name && selectedService.name[currentLanguage] ? selectedService.name[currentLanguage] : selectedService.name?.en || 'Service'}</h3>
                <p className="service-popup-description">{selectedService.description && selectedService.description[currentLanguage] ? selectedService.description[currentLanguage] : selectedService.description?.en || 'Description not available'}</p>
                
                {selectedService.provider && selectedService.provider[currentLanguage] && (
                  <div className="service-popup-provider">
                    <h4 className="provider-title">{currentLanguage === 'ar' ? 'المقدم:' : 'Provided by:'}</h4>
                    <p className="provider-text">{selectedService.provider[currentLanguage]}</p>
                  </div>
                )}
                
                {selectedService.treatments && selectedService.treatments[currentLanguage] && Array.isArray(selectedService.treatments[currentLanguage]) && (
                  <div className="service-popup-treatments">
                    <h4 className="treatments-title">{currentLanguage === 'ar' ? 'العلاجات المشمولة:' : 'Included Treatments:'}</h4>
                    <ul className="treatments-list">
                      {selectedService.treatments[currentLanguage].map((treatment, index) => (
                        <li key={index} className="treatment-item">
                          {treatment}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
              
              {/* Doctors who perform this service */}
              <div className="service-popup-doctors">
                <h4 className="doctors-title">{currentLanguage === 'ar' ? 'الأطباء الذين يقدمون هذه الخدمة:' : 'Doctors who perform this service:'}</h4>
                <div className="doctors-grid">
                  {console.log('Selected Service:', selectedService)}
                  {console.log('Doctors:', selectedService.doctors)}
                  {selectedService.doctors && Array.isArray(selectedService.doctors) && selectedService.doctors.length > 0 ? (
                    selectedService.doctors.map((doctor, index) => {
                      console.log('Doctor:', doctor);
                      console.log('Doctor Name:', doctor.name);
                      console.log('Doctor Specialty:', doctor.specialty);
                      return (
                        <div key={index} className="doctor-card-new">
                          <div className="doctor-image-new">
                            <img 
                              src={doctor.image || '/default-doctor.jpg'} 
                              alt={doctor.name && doctor.name[currentLanguage] ? doctor.name[currentLanguage] : 'Doctor'}
                              className="doctor-avatar-new"
                              onError={(e) => {
                                e.target.src = '/default-doctor.jpg';
                              }}
                            />
                          </div>
                          <div className="doctor-content-new">
                            <h5 className="doctor-name-new" style={{color: '#6A1B9A', fontSize: '1.2rem', fontWeight: '700', display: 'block', visibility: 'visible', opacity: '1'}}>
                              {doctor.name && doctor.name[currentLanguage] ? doctor.name[currentLanguage] : 'Doctor Name'}
                            </h5>
                            <p className="doctor-specialty-new" style={{color: '#9C27B0', fontSize: '1rem', fontWeight: '500', display: 'block', visibility: 'visible', opacity: '1'}}>
                              {doctor.specialty && doctor.specialty[currentLanguage] ? doctor.specialty[currentLanguage] : 'Specialty'}
                            </p>
                          </div>
                        </div>
                      );
                    })
                  ) : (
                    <p className="no-doctors">{currentLanguage === 'ar' ? 'لا توجد معلومات الأطباء متاحة' : 'No doctor information available'}</p>
                  )}
                </div>
              </div>
              
            </div>
          </div>
        </div>
      )}


    </div>
  );
};

export default Services;
