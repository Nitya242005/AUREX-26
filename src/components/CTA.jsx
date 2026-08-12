import React from 'react';
import './CTA.css';

const CTA = () => {
  return (
    <section className="cta-section">
      <div className="container">
        <h2 className="cta-title animate-slide-up">Ready to Choose Your Challenge?</h2>
        <p className="cta-desc animate-slide-up delay-100">
          Explore the six tracks and find the challenge that matches your idea.
        </p>
        <div className="animate-fade-in delay-200">
          <a href="#" className="btn btn-primary">Explore Tracks →</a>
        </div>
      </div>
    </section>
  );
};

export default CTA;
