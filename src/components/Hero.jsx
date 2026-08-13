import React from 'react';
import './Hero.css';
import DevfolioButton from './DevfolioButton';

const Hero = () => {
  return (
    <section className="hero">
      {/* Background patterns and shapes */}
      <div className="hero-bg-pattern"></div>
      <div className="hero-abstract-shape-1"></div>
      <div className="hero-abstract-shape-2"></div>
      
      {/* Abstract subtle Tamil characters */}
      <div className="tamil-letter tamil-letter-1" aria-hidden="true">அ</div>
      <div className="tamil-letter tamil-letter-2" aria-hidden="true">ஃ</div>

      <div className="container hero-container">
        <div className="hero-badge animate-fade-in">
          CICT’S FIRST LINGUAL TECH HACKATHON
        </div>
        
        <h1 className="hero-main-title animate-title-reveal delay-100">
          AUREX’26
        </h1>
        
        <h2 className="hero-subtitle animate-slide-up delay-200">
          தொழில்நுட்பப் படைப்பாக்கப் போட்டி
        </h2>
        
        <h3 className="hero-headline animate-slide-up delay-300">
          Build. Innovate. Transform Language Technology.
        </h3>
        
        <p className="hero-description animate-slide-up delay-400">
          A 24-hour innovation challenge where technology meets Tamil language, classical Tamil resources, learning and digital innovation.
        </p>
        
        <div className="hero-buttons animate-fade-in delay-500">
          <DevfolioButton />
          <a href="/Aurex26_Tracks_One_Per_Page%20(1).pdf" target="_blank" rel="noopener noreferrer" className="btn btn-outline">Explore Tracks</a>
        </div>
        
        <div className="hero-stats animate-fade-in delay-500">
          <div className="stat-item">
            <span className="stat-value">₹60,000</span>
            <span className="stat-label">Prize Pool</span>
          </div>
          <div className="stat-item">
            <span className="stat-value">24 HOURS</span>
            <span className="stat-label">Hackathon</span>
          </div>
          <div className="stat-item">
            <span className="stat-value">6</span>
            <span className="stat-label">Tracks</span>
          </div>
          <div className="stat-item">
            <span className="stat-value">60</span>
            <span className="stat-label">Teams</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
