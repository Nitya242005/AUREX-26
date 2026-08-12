import React from 'react';
import './About.css';

const About = () => {
  const focusAreas = [
    "Tamil Language",
    "Classical Tamil",
    "Tamil Digital Resources",
    "Tamil Learning",
    "Literature",
    "Language Technology",
    "Digital Preservation",
    "AI-powered Knowledge Discovery",
    "CICT-related Needs"
  ];

  return (
    <section className="section-padding bg-alt" id="about">
      <div className="container">
        <div className="max-w-3xl text-center">
          <p className="section-subtitle">About AUREX’26</p>
          <h2 className="section-title">CICT’s First Lingual Tech Hackathon</h2>
          
          <p className="about-text">
            <strong>AUREX’26 — Golden Innovation</strong> is a 24-hour innovation challenge focused on building useful technology solutions that bridge the gap between classical heritage and modern technology.
          </p>
          
          <p className="about-text">
            The hackathon now contains <strong>6 tracks</strong>, allowing participants to explore different areas of language technology and digital innovation. Build, innovate, and transform the digital future of the Tamil language.
          </p>
          
          <div className="about-list">
            {focusAreas.map((area, index) => (
              <span key={index} className="about-tag">{area}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
