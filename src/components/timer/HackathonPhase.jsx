import React from 'react';

const HackathonPhase = ({ phase }) => {
  if (!phase) return null;

  return (
    <div className="ht-phase-block" role="status" aria-live="polite" aria-label={`Current phase: ${phase.name}`}>
      <p className="ht-phase-label">Current Phase</p>
      <p className="ht-phase-name">{phase.name}</p>
      <p className="ht-phase-subtitle">{phase.subtitle}</p>
    </div>
  );
};

export default HackathonPhase;
