import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#', active: true },
    { name: 'About', href: '#about' },
    { name: 'Tracks', href: '/Aurex26_Tracks_One_Per_Page%20(1).pdf', target: '_blank' },
    { name: 'Rules', href: '#rules' },
    { name: 'Prizes', href: '#prizes' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Team', href: '#team' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (!isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  };

  return (
    <header className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-container">
        <div className="navbar-brand">
          {/* AUREX Logo Placeholder / Temporary Branding */}
          <div className="aurex-logo-container">
            <img src="/aurex-logo.png" alt="AUREX'26 Logo" className="aurex-logo" />
            <h1 className="navbar-title">AUREX'26</h1>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="navbar-nav">
          {navLinks.map((link, index) => (
            <a 
              key={index} 
              href={link.href} 
              target={link.target || undefined}
              rel={link.target === '_blank' ? "noopener noreferrer" : undefined}
              className={`nav-link ${link.active ? 'active' : ''}`}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right Side Elements */}
        <div className="navbar-right">
          {/* Desktop Actions */}
          <div className="navbar-actions">
            <a href="https://aurex26.devfolio.co/" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Register Now</a>
          </div>

          {/* CICT Logo */}
          <img src="/CICT_Logo%20(1).png" alt="CICT Logo" className="cict-logo-right" />

          {/* Mobile Menu Toggle */}
          <button className="mobile-menu-btn" onClick={toggleMobileMenu} aria-label="Toggle Menu">
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Overlay */}
      <div className={`mobile-nav-overlay ${isMobileMenuOpen ? 'open' : ''}`}>
        <nav className="mobile-nav-list">
          {navLinks.map((link, index) => (
            <a 
              key={index} 
              href={link.href} 
              target={link.target || undefined}
              rel={link.target === '_blank' ? "noopener noreferrer" : undefined}
              className={`mobile-nav-link ${link.active ? 'text-primary' : ''}`}
              onClick={link.target === '_blank' ? undefined : toggleMobileMenu}
            >
              {link.name}
            </a>
          ))}
        </nav>
        <a href="https://aurex26.devfolio.co/" target="_blank" rel="noopener noreferrer" className="btn btn-primary text-center">Register Now</a>
      </div>
    </header>
  );
};

export default Navbar;
