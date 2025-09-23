import React, { useState } from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import './FAQ.css';

const FAQ = () => {
  const { language } = useLanguage();
  const [openFAQ, setOpenFAQ] = useState(null);

  const faqData = [
    {
      id: 1,
      question: {
        en: "What is physical therapy and how can it help me?",
        ar: "ما هو العلاج الطبيعي وكيف يمكن أن يساعدني؟"
      },
      answer: {
        en: "Physical therapy is a healthcare specialty that helps restore movement and function when someone is affected by injury, illness, or disability. Our therapists use various techniques including manual therapy, exercises, and modern equipment to reduce pain, improve mobility, and enhance your quality of life.",
        ar: "العلاج الطبيعي هو تخصص طبي يساعد في استعادة الحركة والوظيفة عندما يتأثر الشخص بإصابة أو مرض أو إعاقة. يستخدم أخصائيو العلاج الطبيعي لدينا تقنيات مختلفة تشمل العلاج اليدوي والتمارين والأجهزة الحديثة لتقليل الألم وتحسين الحركة وتعزيز جودة حياتك."
      }
    },
    {
      id: 2,
      question: {
        en: "How long does a typical physical therapy session last?",
        ar: "كم تستغرق جلسة العلاج الطبيعي النموذجية؟"
      },
      answer: {
        en: "A typical physical therapy session at our clinic lasts between 45-60 minutes. This includes initial assessment, treatment, and home exercise instruction. The duration may vary depending on your specific condition and treatment plan.",
        ar: "تستغرق جلسة العلاج الطبيعي النموذجية في عيادتنا ما بين 45-60 دقيقة. يشمل ذلك التقييم الأولي والعلاج وتوجيهات التمارين المنزلية. قد تختلف المدة حسب حالتك المحددة وخطة العلاج."
      }
    },
    {
      id: 3,
      question: {
        en: "Do I need a doctor's referral to start physical therapy?",
        ar: "هل أحتاج إلى إحالة من الطبيب لبدء العلاج الطبيعي؟"
      },
      answer: {
        en: "While a doctor's referral is often helpful and may be required by some insurance plans, it's not always necessary. You can schedule a consultation with our physical therapists who can assess your condition and determine if physical therapy is appropriate for your needs.",
        ar: "بينما تكون إحالة الطبيب مفيدة في كثير من الأحيان وقد تكون مطلوبة من قبل بعض خطط التأمين، إلا أنها ليست ضرورية دائماً. يمكنك تحديد موعد استشارة مع أخصائيي العلاج الطبيعي لدينا الذين يمكنهم تقييم حالتك وتحديد ما إذا كان العلاج الطبيعي مناسباً لاحتياجاتك."
      }
    },
    {
      id: 4,
      question: {
        en: "What should I wear to my physical therapy appointment?",
        ar: "ماذا يجب أن أرتدي في موعد العلاج الطبيعي؟"
      },
      answer: {
        en: "Wear comfortable, loose-fitting clothing that allows for easy movement. Athletic wear or casual clothes work well. Avoid tight jeans or restrictive clothing. We may need to access the area being treated, so consider wearing clothes that can be easily adjusted or removed if necessary.",
        ar: "ارتدي ملابس مريحة وفضفاضة تسمح بالحركة السهلة. الملابس الرياضية أو الملابس العادية مناسبة. تجنب الجينز الضيق أو الملابس المقيدة. قد نحتاج للوصول إلى المنطقة المعالجة، لذا فكر في ارتداء ملابس يمكن تعديلها أو إزالتها بسهولة إذا لزم الأمر."
      }
    },
    {
      id: 5,
      question: {
        en: "How many sessions will I need?",
        ar: "كم عدد الجلسات التي سأحتاجها؟"
      },
      answer: {
        en: "The number of sessions varies greatly depending on your condition, severity, and individual response to treatment. Some patients see improvement in 3-6 sessions, while others may need 12-20 sessions or more. Your therapist will discuss your treatment plan and expected timeline during your first visit.",
        ar: "يختلف عدد الجلسات بشكل كبير حسب حالتك وشدتها واستجابتك الفردية للعلاج. بعض المرضى يلاحظون تحسناً في 3-6 جلسات، بينما قد يحتاج آخرون إلى 12-20 جلسة أو أكثر. سيناقش أخصائي العلاج الطبيعي خطة العلاج والجدول الزمني المتوقع خلال زيارتك الأولى."
      }
    },
    {
      id: 6,
      question: {
        en: "Is physical therapy painful?",
        ar: "هل العلاج الطبيعي مؤلم؟"
      },
      answer: {
        en: "Physical therapy should not be painful, though you may experience some discomfort during certain exercises or treatments. Our therapists work within your comfort level and will adjust techniques if you experience significant pain. Some soreness after treatment is normal and usually subsides within 24-48 hours.",
        ar: "لا يجب أن يكون العلاج الطبيعي مؤلماً، رغم أنك قد تشعر ببعض الانزعاج أثناء تمارين أو علاجات معينة. يعمل أخصائيو العلاج الطبيعي لدينا ضمن مستوى راحتك وسيعدلون التقنيات إذا شعرت بألم شديد. بعض الألم بعد العلاج أمر طبيعي وعادة ما يختفي خلال 24-48 ساعة."
      }
    },
    {
      id: 7,
      question: {
        en: "What types of conditions do you treat?",
        ar: "ما أنواع الحالات التي تعالجونها؟"
      },
      answer: {
        en: "We treat a wide range of conditions including sports injuries, back and neck pain, joint problems, post-surgical rehabilitation, neurological conditions, pediatric issues, and chronic pain. Our specialized services include manual therapy, dry needling, cupping therapy, and advanced rehabilitation techniques.",
        ar: "نعالج مجموعة واسعة من الحالات تشمل الإصابات الرياضية وآلام الظهر والرقبة ومشاكل المفاصل وإعادة التأهيل بعد الجراحة والحالات العصبية ومشاكل الأطفال والألم المزمن. خدماتنا المتخصصة تشمل العلاج اليدوي والإبر الجافة والحجامة وتقنيات إعادة التأهيل المتقدمة."
      }
    },
    {
      id: 8,
      question: {
        en: "Do you accept insurance?",
        ar: "هل تقبلون التأمين؟"
      },
      answer: {
        en: "We work with most major insurance providers and can help you verify your coverage before your first visit. Please bring your insurance card and any referral forms to your appointment. Our staff will assist you with insurance verification and billing questions.",
        ar: "نعمل مع معظم شركات التأمين الرئيسية ويمكننا مساعدتك في التحقق من تغطيتك قبل زيارتك الأولى. يرجى إحضار بطاقة التأمين وأي نماذج إحالة إلى موعدك. سيساعدك موظفونا في التحقق من التأمين وأسئلة الفواتير."
      }
    },
    {
      id: 9,
      question: {
        en: "Can I do physical therapy exercises at home?",
        ar: "هل يمكنني القيام بتمارين العلاج الطبيعي في المنزل؟"
      },
      answer: {
        en: "Yes! Home exercises are an essential part of your recovery. Your therapist will provide you with a personalized home exercise program that complements your in-clinic treatment. These exercises help maintain progress between sessions and accelerate your recovery.",
        ar: "نعم! التمارين المنزلية جزء أساسي من تعافيك. سيوفر لك أخصائي العلاج الطبيعي برنامج تمارين منزلية مخصص يكمل علاجك في العيادة. هذه التمارين تساعد في الحفاظ على التقدم بين الجلسات وتسريع تعافيك."
      }
    },
    {
      id: 10,
      question: {
        en: "How do I schedule an appointment?",
        ar: "كيف يمكنني تحديد موعد؟"
      },
      answer: {
        en: "You can schedule an appointment by calling us at +973 1363 0665, sending a WhatsApp message to +973 3226 0665, or visiting our clinic in Al Zinj, Manama. We're open Saturday to Thursday from 9 AM to 7 PM. You can also contact us through our social media channels.",
        ar: "يمكنك تحديد موعد بالاتصال بنا على +973 1363 0665 أو إرسال رسالة واتساب إلى +973 3226 0665 أو زيارة عيادتنا في الزنج، المنامة. نحن مفتوحون من السبت إلى الخميس من 9 صباحاً إلى 7 مساءً. يمكنك أيضاً التواصل معنا عبر قنوات وسائل التواصل الاجتماعي."
      }
    }
  ];

  const toggleFAQ = (id) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  return (
    <div className="faq-page">
      <div className="faq-container">
        <div className="faq-header">
          <h1 className="faq-title">
            {language === 'ar' ? 'الأسئلة الشائعة' : 'Frequently Asked Questions'}
          </h1>
          <p className="faq-subtitle">
            {language === 'ar' 
              ? 'إجابات على الأسئلة الأكثر شيوعاً حول خدماتنا وعلاجاتنا'
              : 'Answers to the most common questions about our services and treatments'
            }
          </p>
        </div>

        <div className="faq-content">
          <div className="faq-list">
            {faqData.map((faq) => (
              <div key={faq.id} className="faq-item">
                <div 
                  className="faq-question"
                  onClick={() => toggleFAQ(faq.id)}
                >
                  <h3 className="faq-question-text">
                    {faq.question[language]}
                  </h3>
                  <span className={`faq-icon ${openFAQ === faq.id ? 'open' : ''}`}>
                    {language === 'ar' ? '−' : '+'}
                  </span>
                </div>
                <div className={`faq-answer ${openFAQ === faq.id ? 'open' : ''}`}>
                  <p className="faq-answer-text">
                    {faq.answer[language]}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="faq-contact">
          <h3 className="faq-contact-title">
            {language === 'ar' ? 'هل لديك سؤال آخر؟' : 'Have Another Question?'}
          </h3>
          <p className="faq-contact-text">
            {language === 'ar' 
              ? 'لا تتردد في التواصل معنا للحصول على إجابات على أسئلتك'
              : "Don't hesitate to contact us for answers to your questions"
            }
          </p>
          <div className="faq-contact-buttons">
            <a href="tel:+97313630665" className="faq-contact-btn primary">
              {language === 'ar' ? 'اتصل بنا' : 'Call Us'}
            </a>
            <a href="https://wa.me/97332260665" className="faq-contact-btn secondary">
              {language === 'ar' ? 'واتساب' : 'WhatsApp'}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
