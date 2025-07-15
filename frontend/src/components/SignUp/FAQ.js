import React, { useState } from 'react';
import './styles/FAQ.css';

const faqData = [
  {
    category: 'General',
    questions: [
      {
        q: 'What grades/ages do you serve?',
        a: 'We serve students in grades 1–12. If you need help for college-level or other special subjects, please contact us for a referral.'
      },
      {
        q: 'How can I contact you or schedule a session?',
        a: 'The best way to get started is by email. Please write to stemintelligencetutors@gmail.com with any questions or to book your sessions. In your email, you can mention the subject or grade level you need help with, and we will reply promptly with availability and next steps. We look forward to helping you succeed!'
      }
    ]
  },
  {
    category: 'Tutoring Sessions',
    questions: [
      {
        q: 'How do you charge for tutoring sessions?',
        a: 'We bill our tutoring sessions on an hourly basis. Each session is priced by the hour (contact us for exact rates), which means you only pay for the time you need. Our goal is to keep pricing transparent, so feel free to email us for detailed pricing or package deals.'
      },
      {
        q: 'How long is each session?',
        a: 'A standard tutoring session lasts one hour. We find that one hour is long enough to focus on topics without becoming too tiring. If more time is needed, we can always schedule additional back-to-back sessions or adjust the length, as long as it\'s agreed in advance.'
      },
      {
        q: 'Do you offer any free trial sessions?',
        a: 'Yes. We offer two free trial sessions for new students. These no-cost trial lessons allow you to experience our teaching style and see if it\'s a good fit before committing. Simply let us know you\'re a new student when booking, and we\'ll apply the free sessions to your first lessons.'
      },
      {
        q: 'Are sessions one-on-one or group-based?',
        a: 'All of our tutoring sessions are one-to-one. We focus on individualized instruction so we can tailor each lesson to the student\'s pace, learning style, and specific needs. One-on-one tutoring ensures you get personal attention and can ask as many questions as needed.'
      },
      {
        q: 'What if my child needs a different tutor?',
        a: 'We are flexible! If you need a different tutor, just let us know and we\'ll do our best to accommodate.'
      }
    ]
  },
  {
    category: 'Online Tutoring Setup',
    questions: [
      {
        q: 'How are tutoring sessions conducted?',
        a: 'All sessions are conducted online over Zoom. This means you can join from anywhere with an internet connection. During the session we use features like screen sharing, digital whiteboards, and live chat to make lessons interactive, just as if we were sitting in the same room.'
      },
      {
        q: 'What equipment do I need for a session?',
        a: 'To participate, you\'ll need a stable internet connection and a device that can run Zoom (such as a laptop, tablet, or smartphone). You should also have a working webcam and microphone for face-to-face communication, and headphones can help reduce background noise. That\'s all you need – we\'ll bring the rest (like digital materials and tools) to make the session smooth.'
      },
      {
        q: 'What if I have trouble connecting to Zoom?',
        a: 'Check your internet connection and try restarting Zoom. If issues persist, contact us for help.'
      }
    ]
  },
  {
    category: 'Policies & Scheduling',
    questions: [
      {
        q: 'What is your cancellation or rescheduling policy?',
        a: 'We understand that plans can change. We ask for at least a 24-hour notice if you need to cancel or reschedule a confirmed session. This courtesy allows us to adjust the schedule and possibly offer the time slot to another student. If you cancel with less than 24 hours\' notice, we may not be able to offer a refund or free rescheduling, so please keep this policy in mind when booking.'
      },
      {
        q: 'How do I book a lesson?',
        a: 'Fill out the form above or click "Book Now" to get started. You can also email us directly at stemintelligencetutors@gmail.com to schedule your sessions.'
      }
    ]
  },
  {
    category: 'Additional Services',
    questions: [
      {
        q: 'Do you help with standardized tests like the EQAO?',
        a: 'Yes. We provide specialized test preparation for standardized exams, including Ontario\'s EQAO assessments (for grades 3, 6, 9, and 10). Test prep sessions focus on review of key concepts, practice questions, and test-taking strategies to build confidence and skill. We tailor these lessons to the specific format and content of the EQAO tests, helping students feel ready and prepared.'
      },
      {
        q: 'Can you help with homework or assignments?',
        a: 'Absolutely. We offer homework help through a detailed solution service. For $5 per question, we will work out a step-by-step solution on paper or a digital whiteboard, record the process as a video, and send you the video. This way you can see exactly how to arrive at the answer and replay the explanation anytime. This service is great for difficult or important questions where you want to follow each step.'
      },
      {
        q: 'Do you offer any free resources or support?',
        a: 'Yes. In addition to the two free trial sessions mentioned above, we can provide supplementary study resources on request. For example, if you need practice worksheets, review notes, or a quick question answered outside of a session, just let us know. We\'re happy to share useful materials or guidance at no cost to support your learning.'
      }
    ]
  }
];

function FAQ() {
  const [open, setOpen] = useState({});

  const toggle = (catIdx, qIdx) => {
    setOpen(prev => ({
      ...prev,
      [`${catIdx}-${qIdx}`]: !prev[`${catIdx}-${qIdx}`]
    }));
  };

  return (
    <section className="faq-section" id="faq">
      <h2>Frequently Asked Questions</h2>
      {faqData.map((cat, catIdx) => (
        <div key={cat.category} className="faq-category">
          <h3>{cat.category}</h3>
          <ul>
            {cat.questions.map((item, qIdx) => (
              <li key={item.q} className="faq-item">
                <button
                  className="faq-question"
                  aria-expanded={!!open[`${catIdx}-${qIdx}`]}
                  onClick={() => toggle(catIdx, qIdx)}
                  id={`faq-q-${catIdx}-${qIdx}`}
                >
                  <span className="faq-arrow" aria-hidden="true" style={{
                    display: 'inline-block',
                    transition: 'transform 0.3s',
                    transform: open[`${catIdx}-${qIdx}`] ? 'rotate(90deg)' : 'rotate(0deg)',
                    marginRight: '0.5em'
                  }}>
                    ▶
                  </span>
                  {item.q}
                </button>
                <div
                  className={`faq-answer${open[`${catIdx}-${qIdx}`] ? ' open' : ''}`}
                  aria-hidden={!open[`${catIdx}-${qIdx}`]}
                  aria-labelledby={`faq-q-${catIdx}-${qIdx}`}
                >
                  {item.a}
                </div>
              </li>
            ))}
          </ul>
        </div>
      ))}
      <div className="faq-links">
        <a href="#signup-form">Back to Sign Up</a> | <a href="/services">See Services & Pricing</a> | <a href="mailto:stemintelligencetutors@gmail.com">Contact Us</a>
      </div>
    </section>
  );
}

export default FAQ; 