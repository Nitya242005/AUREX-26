import React from 'react';
import { useHackathonTimer } from '../../hooks/useHackathonTimer';
import HackathonCountdown from './HackathonCountdown';
import HackathonLiveTimer from './HackathonLiveTimer';
import HackathonCompleted from './HackathonCompleted';
import './HackathonTimer.css';

const HackathonTimer = () => {
  const timer = useHackathonTimer();

  if (timer.status === 'DISABLED') return null;

  const { status, config } = timer;

  // Don't render the dark section if no content would be shown
  const hasContent =
    (status === 'BEFORE_EVENT' && config.showPreEventCountdown) ||
    (status === 'LIVE'         && config.showLiveTimer) ||
    status === 'COMPLETED';

  if (!hasContent) return null;

  return (
    <section
      className="ht-section"
      id="timer"
      aria-label="AUREX'26 Hackathon Timer"
    >
      {/* Background decorations */}
      <div className="ht-bg-grid"         aria-hidden="true" />
      <div className="ht-bg-glow ht-bg-glow--left"  aria-hidden="true" />
      <div className="ht-bg-glow ht-bg-glow--right" aria-hidden="true" />

      <div className="container ht-container">
        {status === 'BEFORE_EVENT' && config.showPreEventCountdown && (
          <HackathonCountdown timer={timer} />
        )}

        {status === 'LIVE' && config.showLiveTimer && (
          <HackathonLiveTimer timer={timer} />
        )}

        {status === 'COMPLETED' && (
          <HackathonCompleted timer={timer} />
        )}

        {/* Optional banner: only when fullscreen display is enabled and event is LIVE */}
        {status === 'LIVE' && config.fullscreenLiveEnabled && (
          <a
            href="/aurex26/live"
            target="_blank"
            rel="noopener noreferrer"
            className="ht-live-display-banner"
            aria-label="Open AUREX'26 full-screen live display"
          >
            <span className="ht-live-display-dot" aria-hidden="true" />
            AUREX'26 IS LIVE — View Live Display →
          </a>
        )}
      </div>
    </section>
  );
};

export default HackathonTimer;
