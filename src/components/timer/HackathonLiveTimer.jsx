import React from 'react';
import { pad2 } from './timerUtils';
import HackathonProgress from './HackathonProgress';
import HackathonPhase from './HackathonPhase';

const HackathonLiveTimer = ({ timer }) => {
  const { hours, minutes, seconds, progress, currentPhase, config } = timer;

  return (
    <div className="ht-live">
      <div className="ht-live-badge" role="status" aria-label="Hackathon is live">
        <span className="ht-live-dot" aria-hidden="true" />
        Live
      </div>

      <p className="ht-event-name">{config.eventName}</p>
      <p className="ht-headline">The Clock Is Running.</p>

      <div
        className="ht-digits-row"
        role="timer"
        aria-label="Time remaining in the hackathon"
        aria-live="off"
      >
        <div className="ht-digit-block">
          <span className="ht-digit" aria-label={`${hours} hours`}>{pad2(hours)}</span>
          <span className="ht-digit-label" aria-hidden="true">Hours</span>
        </div>
        <span className="ht-colon" aria-hidden="true">:</span>
        <div className="ht-digit-block">
          <span className="ht-digit" aria-label={`${minutes} minutes`}>{pad2(minutes)}</span>
          <span className="ht-digit-label" aria-hidden="true">Min</span>
        </div>
        <span className="ht-colon" aria-hidden="true">:</span>
        <div className="ht-digit-block">
          <span className="ht-digit" aria-label={`${seconds} seconds`}>{pad2(seconds)}</span>
          <span className="ht-digit-label" aria-hidden="true">Sec</span>
        </div>
      </div>

      <p className="ht-remaining-label">Hackathon Time Remaining</p>

      {config.showProgress && (
        <HackathonProgress progress={progress} />
      )}

      {config.showPhase && currentPhase && (
        <HackathonPhase phase={currentPhase} />
      )}

      <p className="ht-keep-building">Build • Test • Ship</p>
    </div>
  );
};

export default HackathonLiveTimer;
