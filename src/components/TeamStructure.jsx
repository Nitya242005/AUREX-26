import React from 'react';
import { ArrowRight } from 'lucide-react';
import './TeamStructure.css';

const TeamStructure = () => {
  return (
    <section className="section-padding bg-alt">
      <div className="container">
        <div className="max-w-3xl text-center">
          <p className="section-subtitle">Build Your Team</p>
          <h2 className="section-title">Team Structure & Requirements</h2>
        </div>

        <div className="team-flow animate-slide-up">
          <div className="flow-step">
            <span className="flow-value">3</span>
            <span className="flow-label">Members</span>
          </div>
          <ArrowRight className="flow-arrow" size={32} />
          <div className="flow-step">
            <span className="flow-value">1</span>
            <span className="flow-label">Team</span>
          </div>
          <ArrowRight className="flow-arrow" size={32} />
          <div className="flow-step">
            <span className="flow-value">60</span>
            <span className="flow-label">Teams</span>
          </div>
          <ArrowRight className="flow-arrow" size={32} />
          <div className="flow-step">
            <span className="flow-value">180</span>
            <span className="flow-label">Participants</span>
          </div>
        </div>

        <div className="team-rules-grid">
          <div className="rule-card animate-slide-up delay-100">
            <h3 className="rule-title">3 Members</h3>
            <p className="rule-desc">Compulsory per team. Each team must have exactly 3 members to participate in the hackathon.</p>
          </div>
          
          <div className="rule-card animate-slide-up delay-200">
            <h3 className="rule-title">Preferably 1 Girl</h3>
            <p className="rule-desc">Preferred team composition to encourage diverse perspectives and inclusive participation.</p>
          </div>
          
          <div className="rule-card animate-slide-up delay-300">
            <h3 className="rule-title">At Least 1 Tamil-Knowing Member</h3>
            <p className="rule-desc">For better understanding of the Tamil/classical Tamil challenges and resources.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamStructure;
