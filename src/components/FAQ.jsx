import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import './FAQ.css';

const FAQItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className={`faq-item ${isOpen ? 'active' : ''}`}>
      <button 
        className="faq-question" 
        onClick={onClick}
        aria-expanded={isOpen}
      >
        <span>{question}</span>
        <ChevronDown className="faq-icon" size={20} />
      </button>
      <div className="faq-answer-wrapper">
        <div className="faq-answer">
          <div className="faq-answer-content">
            {answer}
          </div>
        </div>
      </div>
    </div>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);
  
  // Configurable Devfolio URL
  const devfolioUrl = "https://aurex26.devfolio.co/";

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      q: "1. What is AUREX’26?",
      a: <p><strong>Aurex’26 – தொழில்நுட்பப் படைப்பாக்கப் போட்டி</strong> is a lingual-based technical hackathon initiative that brings together students to develop innovative technology solutions for real-world problem statements.</p>
    },
    {
      q: "2. Is there any registration fee?",
      a: <p>No. Registration for Aurex’26 is completely free.</p>
    },
    {
      q: "3. Can I participate individually?",
      a: <p>No. Individual participation is not allowed. All participants must register as a team.</p>
    },
    {
      q: "4. How many members should be in a team?",
      a: <p>Each team must consist of exactly <strong>3 members</strong>.</p>
    },
    {
      q: "5. Is knowledge of Tamil compulsory?",
      a: <p>At least <strong>one member in every team should know Tamil</strong>, as Aurex’26 is a lingual-based technical initiative.</p>
    },
    {
      q: "6. Is there any requirement regarding female participation?",
      a: <p>Teams are preferably encouraged to include <strong>at least one female participant</strong>.</p>
    },
    {
      q: "7. How can we register for Aurex’26?",
      a: <p>Teams can register through <a href={devfolioUrl} target="_blank" rel="noopener noreferrer" className="devfolio-link">Devfolio</a>. Participants are also advised to regularly check the official Aurex’26 website for announcements, guidelines, problem statements, and updates.</p>
    },
    {
      q: "8. What is the last date for registration?",
      a: (
        <>
          <p>The registration deadline is <strong>September 1, 2026 at 12:00 AM</strong>.</p>
          <p>Participants are strongly encouraged to register well before the deadline.</p>
        </>
      )
    },
    {
      q: "9. How many participants will be selected?",
      a: <p>Aurex’26 will host a maximum of <strong>60 teams</strong>, with <strong>3 participants per team</strong>, making a total of <strong>180 participants</strong>.</p>
    },
    {
      q: "10. How many tracks are available in Aurex’26?",
      a: <p>The hackathon consists of <strong>6 different tracks</strong>, covering different areas of innovation and technology.</p>
    },
    {
      q: "11. Can teams submit their own problem statements?",
      a: <p>No. Teams must develop their ideas and solutions based on the <strong>official problem statements provided under the six tracks</strong>.</p>
    },
    {
      q: "12. Can we modify the given problem statement?",
      a: <p>The proposed solution should remain relevant to the selected problem statement. Teams may approach the problem creatively, but the final idea must address the <strong>core problem specified by the organizers</strong>.</p>
    },
    {
      q: "13. Can we choose any one of the six tracks?",
      a: <p>Yes. Teams can select a track and work on the corresponding problem statement based on their interest and technical expertise, subject to the official hackathon guidelines.</p>
    },
    {
      q: "14. What kind of solution is expected from participants?",
      a: <p>Teams are expected to develop an <strong>innovative, practical and technology-driven solution</strong> that effectively addresses their chosen problem statement.</p>
    },
    {
      q: "15. How will projects be evaluated?",
      a: (
        <>
          <p>Solutions may be evaluated based on factors such as:</p>
          <ul>
            <li>Innovation</li>
            <li>Relevance to the problem statement</li>
            <li>Technical implementation</li>
            <li>Feasibility</li>
            <li>Usability</li>
            <li>Impact</li>
            <li>Presentation</li>
            <li>Scalability</li>
          </ul>
        </>
      )
    },
    {
      q: "16. Will all participants receive certificates?",
      a: <p>Yes. All eligible participants will receive a <strong>Central Institute of Classical Tamil (CICT) certificate</strong> for their participation in Aurex’26.</p>
    },
    {
      q: "17. What is the first prize?",
      a: (
        <>
          <p>The team securing <strong>First Place</strong> will receive:</p>
          <h3>₹30,000</h3>
        </>
      )
    },
    {
      q: "18. What is the second prize?",
      a: (
        <>
          <p>The team securing <strong>Second Place</strong> will receive:</p>
          <h3>₹20,000</h3>
        </>
      )
    },
    {
      q: "19. What is the third prize?",
      a: (
        <>
          <p>The team securing <strong>Third Place</strong> will receive:</p>
          <h3>₹10,000</h3>
        </>
      )
    },
    {
      q: "20. What is the total prize pool?",
      a: (
        <>
          <p>Aurex’26 offers a total cash prize pool of:</p>
          <h1>₹60,000</h1>
          <p>Distributed as:</p>
          <ul>
            <li><strong>1st Prize — ₹30,000</strong></li>
            <li><strong>2nd Prize — ₹20,000</strong></li>
            <li><strong>3rd Prize — ₹10,000</strong></li>
          </ul>
        </>
      )
    }
  ];

  return (
    <section className="faq-section" id="faq">
      <div className="container">
        <div className="faq-container">
          <h2 className="faq-title animate-slide-up">Frequently Asked Questions</h2>
          <p className="faq-subtitle animate-slide-up delay-100">
            <strong>Everything you need to know about AUREX’26.</strong>
          </p>
          
          <div className="faq-list animate-slide-up delay-200">
            {faqs.map((faq, index) => (
              <FAQItem 
                key={index} 
                question={faq.q} 
                answer={faq.a} 
                isOpen={openIndex === index}
                onClick={() => handleToggle(index)}
              />
            ))}
          </div>

          <div className="faq-footer animate-slide-up delay-300">
            <p className="faq-footer-note">
              <strong>Participants should follow the official Aurex’26 website and Devfolio page for the latest announcements, detailed rules, problem statements, schedules and event-related information.</strong>
            </p>
            <div className="mt-4">
              <p className="mb-2 font-medium">Have more questions?</p>
              <a href={devfolioUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                Visit Devfolio →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
