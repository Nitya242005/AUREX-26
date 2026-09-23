import React from 'react';
import { pad2 } from './timerUtils';

// Same URL as Navbar.jsx — registration link for AUREX'26
const REGISTER_URL =
  "https://unstop.com/o/DkrRFb2?lb=useeBTT8&utm_medium=Share&utm_source=online_coding_challenge&utm_campaign=Euqfzjgm31807";

const HackathonCountdown = ({ timer }) => {
  const { days, hours, minutes, seconds, config } = timer;

  return (
    <div className="ht-countdown">
      <p className="ht-event-name">{config.eventName}</p>
      <p className="ht-headline">The Innovation Begins In</p>

      <div
        className="ht-digits-row"
        role="timer"
        aria-label="Time remaining until the hackathon begins"
        aria-live="off"
      >
        {days > 0 && (
          <>
            <div className="ht-digit-block">
              <span className="ht-digit" aria-label={`${days} days`}>{pad2(days)}</span>
              <span className="ht-digit-label" aria-hidden="true">Days</span>
            </div>
            <span className="ht-colon" aria-hidden="true">:</span>
          </>
        )}
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

      <div className="ht-divider" aria-hidden="true" />
      <p className="ht-date-display">23–24 September 2026</p>

      <a
        href={REGISTER_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="ht-cta-link"
        aria-label="Register for AUREX'26 hackathon"
      >
        Register Now →
      </a>
    </div>
  );
};

export default HackathonCountdown;
