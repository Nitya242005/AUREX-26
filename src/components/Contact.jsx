import React, { useEffect, useRef, useState } from 'react';
import { Phone } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.15,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  const coordinators = [
    { name: "Senthil Kumar", role: "Coordinator", phone: "+91 98948 27639" },
    { name: "Murugaswaminathan", role: "Coordinator", phone: "+91 95002 32942" }
  ];

  const organizers = [
    { name: "Dinesh", role: "Organizer", phone: "+91 81108 68683" },
    { name: "Hariyanka", role: "Organizer", phone: "+91 99400 12746" },
    { name: "Shanjay Akash", role: "Organizer", phone: "+91 93607 45895" }
  ];

  return (
    <section className={`contact-section ${isVisible ? 'is-visible' : ''}`} id="contact" ref={sectionRef}>
      <div className="container">
        <h2 className="contact-title animate-on-scroll fade-up">CONTACT US</h2>
        <p className="contact-subtitle animate-on-scroll fade-up delay-100">
          Have questions about AUREX’26? Reach out to our coordinators and organizers.
        </p>

        <div className="contact-list-container">
          {/* COORDINATORS GROUP */}
          <div className="contact-group animate-on-scroll fade-up delay-200">
            <h3 className="contact-group-title">COORDINATORS</h3>
            {coordinators.map((contact, index) => (
              <div key={index} className={`contact-row animate-on-scroll fade-up delay-${(index + 2) * 100}`}>
                <div className="contact-info">
                  <span className="contact-name">{contact.name}</span>
                  <span className="contact-role">{contact.role}</span>
                </div>
                <a href={`tel:${contact.phone.replace(/\s+/g, '')}`} className="contact-phone">
                  <Phone size={18} />
                  {contact.phone}
                </a>
              </div>
            ))}
          </div>

          {/* ORGANIZERS GROUP */}
          <div className="contact-group animate-on-scroll fade-up delay-400">
            <h3 className="contact-group-title">ORGANIZERS</h3>
            {organizers.map((contact, index) => (
              <div key={index} className={`contact-row animate-on-scroll fade-up delay-${(index + 4) * 100}`}>
                <div className="contact-info">
                  <span className="contact-name">{contact.name}</span>
                  <span className="contact-role">{contact.role}</span>
                </div>
                <a href={`tel:${contact.phone.replace(/\s+/g, '')}`} className="contact-phone">
                  <Phone size={18} />
                  {contact.phone}
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* SOCIAL MEDIA */}
        <div className="social-media-container animate-on-scroll fade-up delay-600">
          <p className="text-muted">Stay updated with the latest announcements, guidelines, and schedules.</p>
          <div className="social-links">
            <a 
              href="https://www.instagram.com/aurex26.cict/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-icon-btn"
              aria-label="Instagram"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
            <a 
              href="https://www.facebook.com/profile.php?id=61593299366418" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-icon-btn"
              aria-label="Facebook"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </a>
          </div>
        </div>

        {/* PLATFORM SPONSOR */}
        <div className="platform-sponsor-container animate-on-scroll fade-up delay-600">
          <h3 className="platform-sponsor-title">Platform Sponsor</h3>
          <img
            src="/devfolio-logo.svg"
            alt="DEVFOLIO LOGO"
            className="platform-sponsor-logo"
            draggable="false"
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;
