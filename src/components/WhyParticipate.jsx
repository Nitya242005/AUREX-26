import React from 'react';
import { Lightbulb, Code2, Compass, BookOpen, Users, Trophy } from 'lucide-react';
import './WhyParticipate.css';

const WhyParticipate = () => {
  const reasons = [
    { icon: <Code2 size={32} />, title: "BUILD", desc: "Turn your idea into a working technology solution." },
    { icon: <Lightbulb size={32} />, title: "INNOVATE", desc: "Solve meaningful problems through technology." },
    { icon: <Compass size={32} />, title: "EXPLORE", desc: "Work with Tamil language and classical Tamil resources." },
    { icon: <BookOpen size={32} />, title: "LEARN", desc: "Gain practical experience while building your solution." },
    { icon: <Users size={32} />, title: "COLLABORATE", desc: "Work with a team and combine different skills." },
    { icon: <Trophy size={32} />, title: "SHOWCASE", desc: "Present your innovation and demonstrate your solution." }
  ];

  return (
    <section className="section-padding bg-alt">
      <div className="container">
        <div className="max-w-3xl text-center">
          <p className="section-subtitle">Join the Challenge</p>
          <h2 className="section-title">Why Participate?</h2>
        </div>

        <div className="reasons-grid">
          {reasons.map((reason, index) => (
            <div 
              key={index} 
              className="reason-card animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="reason-icon-wrapper">
                {reason.icon}
              </div>
              <h3 className="reason-title">{reason.title}</h3>
              <p className="reason-desc">{reason.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyParticipate;
