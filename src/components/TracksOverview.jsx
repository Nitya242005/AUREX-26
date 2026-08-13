import React from 'react';
import './TracksOverview.css';

const TracksOverview = () => {
  const tracks = [
    { num: "01", title: "LMS / LLL Website", desc: "Workshop & Learning Management Portal" },
    { num: "02", title: "OCR", desc: "Digitizing Tamil Knowledge Resources" },
    { num: "03", title: "WordNet", desc: "Explore Tamil Words Across Literature and Context" },
    { num: "04", title: "Learning Portal", desc: "Learn Tamil from the Beginning" },
    { num: "05", title: "Open Innovation", desc: "Build Something Useful for Classical Tamil" },
    { 
      num: "06", 
      title: "Chatbot", 
      desc: "AI-Powered Multilingual Knowledge Discovery",
      featured: true
    }
  ];

  return (
    <section className="section-padding bg-white" id="tracks">
      <div className="container">
        <div className="max-w-3xl text-center">
          <p className="section-subtitle">Challenge Areas</p>
          <h2 className="section-title">Six Tracks Overview</h2>
          <p className="about-text">Explore the six tracks and find the challenge that matches your idea.</p>
        </div>

        <div className="tracks-grid">
          {tracks.map((track, index) => (
            <div 
              key={index} 
              className={`track-card animate-slide-up ${track.featured ? 'featured-track' : ''}`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="track-number">{track.num}</div>
              <h3 className="track-title">{track.title}</h3>
              <p className="track-desc">{track.desc}</p>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12 animate-fade-in delay-500">
          <a href="/AUREX26_Hackathon_Problem_Statements.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-outline">Explore All Tracks →</a>
        </div>
      </div>
    </section>
  );
};

export default TracksOverview;
