import React from 'react';

const HackathonProgress = ({ progress }) => {
  const rounded = Math.round(progress);
  const clamped = Math.min(100, Math.max(0, progress));

  return (
    <div
      className="ht-progress-wrapper"
      aria-label={`Hackathon ${rounded}% complete`}
    >
      <div className="ht-progress-labels" aria-hidden="true">
        <span className="ht-progress-label-side">Start</span>
        <span className="ht-progress-label-side">Finish</span>
      </div>

      <div
        className="ht-progress-track"
        role="progressbar"
        aria-valuenow={rounded}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label="Hackathon progress"
      >
        <div className="ht-progress-fill" style={{ width: `${clamped}%` }}>
          <div className="ht-progress-dot" aria-hidden="true" />
        </div>
      </div>

      <p className="ht-progress-pct">{rounded}% Complete</p>
    </div>
  );
};

export default HackathonProgress;
