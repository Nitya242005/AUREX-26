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
        <div className="cta-actions animate-fade-in delay-200">
          <a href="/AUREX26_Hackathon_Problem_Statements.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Explore Tracks →</a>
        </div>
      </div>
    </section>
  );
};

export default CTA;
