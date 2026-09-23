import React, { useState, useEffect } from 'react';
import { useHackathonTimer } from '../hooks/useHackathonTimer';
import { pad2 } from '../components/timer/timerUtils';
import './LiveDisplay.css';

// ── Sub-views ─────────────────────────────────────────────────────────────────

const LDProgress = ({ progress }) => {
  const clamped = Math.min(100, Math.max(0, progress));
  const rounded = Math.round(clamped);
  return (
    <div className="ld-progress-wrapper" aria-label={`${rounded}% complete`}>
      <div className="ld-progress-ends" aria-hidden="true">
        <span className="ld-progress-end-label">Start</span>
        <span className="ld-progress-end-label">Finish</span>
      </div>
      <div
        className="ld-progress-track"
        role="progressbar"
        aria-valuenow={rounded}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        <div className="ld-progress-fill" style={{ width: `${clamped}%` }}>
          <div className="ld-progress-dot" aria-hidden="true" />
        </div>
      </div>
      <p className="ld-progress-pct">{rounded}% Complete</p>
    </div>
  );
};

// ── Before-event countdown ─────────────────────────────────────────────────────

const LDCountdown = ({ timer }) => {
  const { days, hours, minutes, seconds, config } = timer;

  return (
    <div>
      <p className="ld-event-name">{config.eventName}</p>
      <p className="ld-headline">The Innovation Begins In</p>

      <div
        className="ld-digits-row"
        role="timer"
        aria-label="Time until the hackathon begins"
        aria-live="off"
      >
        {days > 0 && (
          <>
            <div className="ld-digit-block">
              <span className="ld-digit" aria-label={`${days} days`}>{pad2(days)}</span>
              <span className="ld-digit-label" aria-hidden="true">Days</span>
            </div>
            <span className="ld-colon" aria-hidden="true">:</span>
          </>
        )}
        <div className="ld-digit-block">
          <span className="ld-digit" aria-label={`${hours} hours`}>{pad2(hours)}</span>
          <span className="ld-digit-label" aria-hidden="true">Hours</span>
        </div>
        <span className="ld-colon" aria-hidden="true">:</span>
        <div className="ld-digit-block">
          <span className="ld-digit" aria-label={`${minutes} minutes`}>{pad2(minutes)}</span>
          <span className="ld-digit-label" aria-hidden="true">Min</span>
        </div>
        <span className="ld-colon" aria-hidden="true">:</span>
        <div className="ld-digit-block">
          <span className="ld-digit" aria-label={`${seconds} seconds`}>{pad2(seconds)}</span>
          <span className="ld-digit-label" aria-hidden="true">Sec</span>
        </div>
      </div>

      <div className="ld-divider" aria-hidden="true" />
      <p className="ld-date-label">23–24 September 2026</p>
    </div>
  );
};

// ── Live hackathon view ────────────────────────────────────────────────────────

const LDLive = ({ timer }) => {
  const { hours, minutes, seconds, progress, currentPhase, config } = timer;

  return (
    <div>
      <div className="ld-live-badge" role="status" aria-label="Hackathon is live">
        <span className="ld-live-dot" aria-hidden="true" />
        Live
      </div>

      <p className="ld-event-name">{config.eventName}</p>
      <p className="ld-headline">The Clock Is Running.</p>

      <div
        className="ld-digits-row"
        role="timer"
        aria-label="Time remaining in the hackathon"
        aria-live="off"
      >
        <div className="ld-digit-block">
          <span className="ld-digit" aria-label={`${hours} hours`}>{pad2(hours)}</span>
          <span className="ld-digit-label" aria-hidden="true">Hours</span>
        </div>
        <span className="ld-colon" aria-hidden="true">:</span>
        <div className="ld-digit-block">
          <span className="ld-digit" aria-label={`${minutes} minutes`}>{pad2(minutes)}</span>
          <span className="ld-digit-label" aria-hidden="true">Minutes</span>
        </div>
        <span className="ld-colon" aria-hidden="true">:</span>
        <div className="ld-digit-block">
          <span className="ld-digit" aria-label={`${seconds} seconds`}>{pad2(seconds)}</span>
          <span className="ld-digit-label" aria-hidden="true">Seconds</span>
        </div>
      </div>

      <p className="ld-remaining-label">Hackathon Time Remaining</p>

      <LDProgress progress={progress} />

      {currentPhase && (
        <div className="ld-phase-block" role="status" aria-live="polite" aria-label={`Current phase: ${currentPhase.name}`}>
          <p className="ld-phase-label">Current Phase</p>
          <p className="ld-phase-name">{currentPhase.name}</p>
          <p className="ld-phase-subtitle">{currentPhase.subtitle}</p>
        </div>
      )}

      <p className="ld-tagline">Build • Test • Ship</p>
    </div>
  );
};

// ── Completed view ─────────────────────────────────────────────────────────────

const LDCompleted = ({ timer }) => {
  const { config } = timer;
  const message = config.completedMessage || "24 Hours. 60 Teams. One Innovation Journey.";

  return (
    <div>
      <p className="ld-event-name">{config.eventName}</p>

      <div className="ld-completed-check" aria-hidden="true">✓</div>

      <h1 className="ld-completed-headline">24 Hours Complete</h1>
      <p className="ld-completed-sub">Thank You, Innovators.</p>
      <p className="ld-completed-message">{message}</p>
    </div>
  );
};

// ── Root page component ────────────────────────────────────────────────────────

const LiveDisplay = () => {
  // alwaysRun: show real timer state even when isEnabled is false on the main site
  const timer = useHackathonTimer({ alwaysRun: true });
  const [isFullscreen, setIsFullscreen] = useState(false);

  // Update document title
  useEffect(() => {
    const prev = document.title;
    document.title = "AUREX'26 — Live Display";
    return () => { document.title = prev; };
  }, []);

  // Track fullscreen state via browser API events
  useEffect(() => {
    const onChange = () => setIsFullscreen(!!document.fullscreenElement);
    document.addEventListener('fullscreenchange', onChange);
    document.addEventListener('webkitfullscreenchange', onChange);
    return () => {
      document.removeEventListener('fullscreenchange', onChange);
      document.removeEventListener('webkitfullscreenchange', onChange);
    };
  }, []);

  const enterFullscreen = () => {
    const el = document.documentElement;
    if (el.requestFullscreen) {
      el.requestFullscreen().catch(() => {});
    } else if (el.webkitRequestFullscreen) {
      el.webkitRequestFullscreen();
    }
  };

  const exitFullscreen = () => {
    if (document.exitFullscreen) {
      document.exitFullscreen().catch(() => {});
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    }
  };

  const { status } = timer;

  return (
    <div className="ld-page">
      {/* ── Background layers ─────────────────────────── */}
      <div className="ld-bg-grid"          aria-hidden="true" />
      <div className="ld-glow ld-glow--tl" aria-hidden="true" />
      <div className="ld-glow ld-glow--br" aria-hidden="true" />
      <div className="ld-glow ld-glow--center" aria-hidden="true" />

      {/* Tamil character atmosphere */}
      <div className="ld-tamil ld-tamil--1" aria-hidden="true">அ</div>
      <div className="ld-tamil ld-tamil--2" aria-hidden="true">ஃ</div>

      {/* Giant AUREX'26 watermark */}
      <div className="ld-watermark" aria-hidden="true">AUREX'26</div>

      {/* ── Foreground content ────────────────────────── */}
      <div className="ld-content">
        {status === 'BEFORE_EVENT' && <LDCountdown timer={timer} />}
        {status === 'LIVE'         && <LDLive      timer={timer} />}
        {status === 'COMPLETED'    && <LDCompleted timer={timer} />}
        {status === 'DISABLED'     && (
          <div>
            <p className="ld-event-name">AUREX'26</p>
            <p className="ld-disabled-text">Live Display Disabled</p>
          </div>
        )}
      </div>

      {/* ── Fullscreen control ────────────────────────── */}
      {!isFullscreen ? (
        <button
          className="ld-fs-btn"
          onClick={enterFullscreen}
          aria-label="Enter fullscreen"
          title="Enter fullscreen (press Esc to exit)"
        >
          ⛶ Enter Fullscreen
        </button>
      ) : (
        <button
          className="ld-fs-btn ld-fs-btn--exit"
          onClick={exitFullscreen}
          aria-label="Exit fullscreen"
          title="Exit fullscreen"
        >
          ✕ Exit
        </button>
      )}
    </div>
  );
};

export default LiveDisplay;
