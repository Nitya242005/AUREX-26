import React from 'react';
import './Highlights.css';

const Highlights = () => {
  const stats = [
    { value: "24 HOURS", label: "Hackathon Duration" },
    { value: "₹60,000", label: "Total Prize Pool" },
    { value: "6", label: "Tracks" },
    { value: "60", label: "Teams Capacity" },
    { value: "180", label: "Participants" }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container">
        <div className="max-w-3xl text-center">
          <p className="section-subtitle">Hackathon Highlights</p>
          <h2 className="section-title">Everything you need to know</h2>
        </div>
        
        <div className="highlights-grid">
          {stats.map((stat, index) => (
            <div key={index} className="highlight-card animate-slide-up" style={{ animationDelay: `${index * 100}ms` }}>
              <div className="highlight-value">{stat.value}</div>
              <div className="highlight-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Highlights;
