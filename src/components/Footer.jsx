import React from 'react';
import { Phone } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  const phoneNumbers = [
    "+91 98948 27639",
    "+91 81108 68683",
    "+91 99400 12746",
    "+91 93607 45895"
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <h3 className="footer-title">AUREX’26 — Golden Innovation</h3>
            <p className="footer-subtitle">CICT’s First Lingual Tech Hackathon</p>
          </div>
          
          <div className="footer-contact">
            <h4>Contact Us</h4>
            <div className="footer-phones">
              {phoneNumbers.map((number, index) => (
                <a key={index} href={`tel:${number.replace(/\s+/g, '')}`} className="footer-phone-link">
                  <Phone size={16} />
                  {number}
                </a>
              ))}
            </div>
            
            <div className="footer-socials">
              <a 
                href="https://www.instagram.com/aurex26.cict/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="footer-social-link"
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
                className="footer-social-link"
                aria-label="Facebook"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Central Institute of Classical Tamil. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
