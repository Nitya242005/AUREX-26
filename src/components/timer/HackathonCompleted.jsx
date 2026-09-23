import React from 'react';

const HackathonCompleted = ({ timer }) => {
  const { config } = timer;
  const message = config.completedMessage || "24 Hours. 60 Teams. One Innovation Journey.";
  const hasResults    = Boolean(config.resultsLink);
  const hasHighlights = Boolean(config.highlightsLink);

  return (
    <div className="ht-completed">
      <p className="ht-event-name">{config.eventName}</p>

      <div className="ht-completed-check" aria-hidden="true">✓</div>

      <h2 className="ht-completed-title">Hacking Time Completed</h2>

      <p className="ht-completed-message">{message}</p>

      {(hasResults || hasHighlights) && (
        <div className="ht-completed-actions">
          {hasResults && (
            <a
              href={config.resultsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="ht-btn-gold"
              aria-label="View hackathon results"
            >
              View Results →
            </a>
          )}
          {hasHighlights && (
            <a
              href={config.highlightsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="ht-btn-outline-light"
              aria-label="View hackathon highlights"
            >
              View Highlights →
            </a>
          )}
        </div>
      )}

      {!hasResults && (
        <p className="ht-results-soon">Results will be announced soon.</p>
      )}
    </div>
  );
};

export default HackathonCompleted;
