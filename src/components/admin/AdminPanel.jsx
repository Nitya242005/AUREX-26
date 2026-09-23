import React, { useState, useEffect, useCallback } from 'react';
import { DEFAULT_TIMER_CONFIG, STORAGE_KEY, ADMIN_PASSWORD } from '../../timerConfig';
import './AdminPanel.css';

// ── Helpers ───────────────────────────────────────────────────────────────────

// Compute a snapshot event status from config values (no live tick — admin use only)
function snapshotStatus(config) {
  if (!config.isEnabled) return 'DISABLED';
  const now      = Date.now();
  const startMs  = new Date(config.startDatetime).getTime();
  const endMs    = new Date(config.endDatetime).getTime();
  if (isNaN(startMs) || isNaN(endMs)) return 'UNKNOWN';
  if (now < startMs)  return 'BEFORE_EVENT';
  if (now < endMs)    return 'LIVE';
  return 'COMPLETED';
}

const STATUS_LABELS = {
  DISABLED:     { text: 'Timer Disabled',   color: '#888' },
  BEFORE_EVENT: { text: 'Counting Down',    color: '#6366F1' },
  LIVE:         { text: 'Live Now',         color: '#EF4444' },
  COMPLETED:    { text: 'Event Completed',  color: '#16A34A' },
  UNKNOWN:      { text: 'Check Dates',      color: '#F59E0B' },
};

const LIVE_DISPLAY_URL = '/aurex26/live';

function loadConfig() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) return { ...DEFAULT_TIMER_CONFIG, ...JSON.parse(stored) };
  } catch {}
  return { ...DEFAULT_TIMER_CONFIG };
}

// Convert a stored ISO 8601 string like "2026-09-23T09:00:00+05:30"
// to the format expected by <input type="datetime-local">: "2026-09-23T09:00"
function isoToLocal(isoStr) {
  if (!isoStr) return '';
  const match = isoStr.match(/^(\d{4}-\d{2}-\d{2}T\d{2}:\d{2})/);
  return match ? match[1] : '';
}

// Convert datetime-local value back to a full ISO 8601 string with IST offset.
// We always treat the admin-entered local times as IST (Asia/Kolkata, +05:30).
function localToIso(localStr) {
  if (!localStr) return '';
  return `${localStr}:00+05:30`;
}

// ── Component ─────────────────────────────────────────────────────────────────

const AdminPanel = () => {
  const [isVisible,      setIsVisible]      = useState(false);
  const [isAuth,         setIsAuth]         = useState(false);
  const [password,       setPassword]       = useState('');
  const [authError,      setAuthError]      = useState('');
  const [form,           setForm]           = useState(() => loadConfig());
  const [errors,         setErrors]         = useState({});
  const [saveStatus,     setSaveStatus]     = useState('idle'); // 'idle' | 'saved' | 'error'

  // Show/hide based on URL hash
  useEffect(() => {
    const check = () => setIsVisible(window.location.hash === '#admin-panel');
    check();
    window.addEventListener('hashchange', check);
    return () => window.removeEventListener('hashchange', check);
  }, []);

  // Reload config from storage each time the panel is opened
  useEffect(() => {
    if (isVisible) {
      setForm(loadConfig());
      setErrors({});
      setSaveStatus('idle');
    }
  }, [isVisible]);

  const close = () => {
    window.location.hash = '';
  };

  // Trap focus and allow Escape to close
  useEffect(() => {
    if (!isVisible) return;
    const onKey = (e) => { if (e.key === 'Escape') close(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isVisible]);

  const handleAuth = (e) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setIsAuth(true);
      setAuthError('');
    } else {
      setAuthError('Incorrect password. Please try again.');
    }
  };

  const handleField = useCallback((key, value) => {
    setForm(prev => ({ ...prev, [key]: value }));
    setErrors(prev => { const n = { ...prev }; delete n[key]; return n; });
    setSaveStatus('idle');
  }, []);

  const validate = () => {
    const errs = {};
    if (!form.startDatetime) {
      errs.startDatetime = 'Start date/time is required.';
    }
    if (!form.endDatetime) {
      errs.endDatetime = 'End date/time is required.';
    }
    if (form.startDatetime && form.endDatetime) {
      const s = new Date(form.startDatetime);
      const e = new Date(form.endDatetime);
      if (isNaN(s.getTime())) errs.startDatetime = 'Invalid start date/time.';
      if (isNaN(e.getTime())) errs.endDatetime   = 'Invalid end date/time.';
      if (!errs.startDatetime && !errs.endDatetime && e <= s) {
        errs.endDatetime = 'End time must be after the event start time.';
      }
    }
    return errs;
  };

  const handleSave = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(form));
      window.dispatchEvent(new Event('aurex_timer_updated'));
      setSaveStatus('saved');
      setTimeout(() => setSaveStatus('idle'), 3500);
    } catch {
      setSaveStatus('error');
    }
  };

  const handleReset = () => {
    if (!window.confirm('Reset all timer settings to defaults?')) return;
    localStorage.removeItem(STORAGE_KEY);
    setForm({ ...DEFAULT_TIMER_CONFIG });
    window.dispatchEvent(new Event('aurex_timer_updated'));
    setSaveStatus('saved');
    setTimeout(() => setSaveStatus('idle'), 3500);
  };

  if (!isVisible) return null;

  return (
    <div
      className="ap-overlay"
      role="dialog"
      aria-modal="true"
      aria-label="Hackathon Timer Admin Panel"
    >
      <div className="ap-panel">

        {/* ── Header ────────────────────────────────────────── */}
        <div className="ap-header">
          <div>
            <span className="ap-badge">Admin</span>
            <h1 className="ap-title">Hackathon Timer Settings</h1>
            <p className="ap-subtitle">AUREX'26 — Live Event Configuration</p>
          </div>
          <button className="ap-close" onClick={close} aria-label="Close admin panel">✕</button>
        </div>

        {/* ── Auth gate ─────────────────────────────────────── */}
        {!isAuth ? (
          <div className="ap-auth">
            <p className="ap-auth-desc">Enter the admin password to manage timer settings.</p>
            <form onSubmit={handleAuth} className="ap-auth-form">
              <label className="ap-label" htmlFor="ap-password">Admin Password</label>
              <input
                id="ap-password"
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder="Enter password"
                className="ap-input ap-input--lg"
                autoComplete="current-password"
                autoFocus
              />
              {authError && <p className="ap-error-text" role="alert">{authError}</p>}
              <button type="submit" className="ap-btn-primary">Authenticate →</button>
            </form>
          </div>

        ) : (

          /* ── Settings form ──────────────────────────────── */
          <form onSubmit={handleSave} className="ap-form" noValidate>

            {/* Timer enable/disable */}
            <div className="ap-section">
              <h2 className="ap-section-title">Timer Status</h2>
              <label className="ap-toggle-row">
                <span className="ap-toggle-label">
                  Timer Enabled
                  <span className="ap-toggle-hint">Disable to hide the timer entirely without removing it.</span>
                </span>
                <input
                  type="checkbox"
                  checked={form.isEnabled}
                  onChange={e => handleField('isEnabled', e.target.checked)}
                  className="ap-checkbox"
                  aria-label="Timer enabled"
                />
              </label>
            </div>

            {/* Event date/time — always IST */}
            <div className="ap-section">
              <h2 className="ap-section-title">Event Date &amp; Time</h2>
              <p className="ap-section-note">
                All times are interpreted as <strong>IST (Asia/Kolkata, +05:30)</strong>.
              </p>

              <div className="ap-field">
                <label className="ap-label" htmlFor="ap-start">Event Start *</label>
                <input
                  id="ap-start"
                  type="datetime-local"
                  value={isoToLocal(form.startDatetime)}
                  onChange={e => handleField('startDatetime', localToIso(e.target.value))}
                  className={`ap-input${errors.startDatetime ? ' ap-input--error' : ''}`}
                />
                {errors.startDatetime && (
                  <p className="ap-field-error" role="alert">{errors.startDatetime}</p>
                )}
              </div>

              <div className="ap-field">
                <label className="ap-label" htmlFor="ap-end">Event End *</label>
                <input
                  id="ap-end"
                  type="datetime-local"
                  value={isoToLocal(form.endDatetime)}
                  onChange={e => handleField('endDatetime', localToIso(e.target.value))}
                  className={`ap-input${errors.endDatetime ? ' ap-input--error' : ''}`}
                />
                {errors.endDatetime && (
                  <p className="ap-field-error" role="alert">{errors.endDatetime}</p>
                )}
                <p className="ap-field-hint">End must be after start. Default: 24 h after start.</p>
              </div>
            </div>

            {/* Display toggles */}
            <div className="ap-section">
              <h2 className="ap-section-title">Display Options</h2>
              {[
                { key: 'showPreEventCountdown', label: 'Show Pre-Event Countdown' },
                { key: 'showLiveTimer',         label: 'Show Live Timer' },
                { key: 'showProgress',          label: 'Show Event Progress Bar' },
                { key: 'showPhase',             label: 'Show Current Hackathon Phase' },
              ].map(({ key, label }) => (
                <label key={key} className="ap-toggle-row">
                  <span className="ap-toggle-label">{label}</span>
                  <input
                    type="checkbox"
                    checked={Boolean(form[key])}
                    onChange={e => handleField(key, e.target.checked)}
                    className="ap-checkbox"
                    aria-label={label}
                  />
                </label>
              ))}
            </div>

            {/* Post-event content */}
            <div className="ap-section">
              <h2 className="ap-section-title">Post-Event</h2>

              <div className="ap-field">
                <label className="ap-label" htmlFor="ap-msg">Completed Message</label>
                <textarea
                  id="ap-msg"
                  value={form.completedMessage}
                  onChange={e => handleField('completedMessage', e.target.value)}
                  className="ap-textarea"
                  rows={3}
                  placeholder="24 Hours. 60 Teams. One Innovation Journey."
                />
              </div>

              <div className="ap-field">
                <label className="ap-label" htmlFor="ap-results">Results Page URL</label>
                <input
                  id="ap-results"
                  type="url"
                  value={form.resultsLink}
                  onChange={e => handleField('resultsLink', e.target.value)}
                  className="ap-input"
                  placeholder="https://..."
                />
                <p className="ap-field-hint">Leave empty to show "Results will be announced soon" instead.</p>
              </div>

              <div className="ap-field">
                <label className="ap-label" htmlFor="ap-highlights">Highlights Page URL</label>
                <input
                  id="ap-highlights"
                  type="url"
                  value={form.highlightsLink}
                  onChange={e => handleField('highlightsLink', e.target.value)}
                  className="ap-input"
                  placeholder="https://..."
                />
                <p className="ap-field-hint">Leave empty to hide the Highlights button.</p>
              </div>
            </div>

            {/* ── Full-Screen Live Display ─────────────────── */}
            <div className="ap-section">
              <h2 className="ap-section-title">Full-Screen Live Display</h2>

              {/* Enable toggle */}
              <label className="ap-toggle-row">
                <span className="ap-toggle-label">
                  Enable Full-Screen Live Display
                  <span className="ap-toggle-hint">
                    Shows a "View Live Display" banner on the main site when event is LIVE.
                    The display page at <code>/aurex26/live</code> is always accessible.
                  </span>
                </span>
                <input
                  type="checkbox"
                  checked={Boolean(form.fullscreenLiveEnabled)}
                  onChange={e => handleField('fullscreenLiveEnabled', e.target.checked)}
                  className="ap-checkbox"
                  aria-label="Enable full-screen live display"
                />
              </label>

              {/* Status row */}
              <div className="ap-fs-status-row">
                <span className="ap-fs-status-key">Event Status</span>
                {(() => {
                  const s = snapshotStatus(form);
                  const info = STATUS_LABELS[s] ?? STATUS_LABELS.UNKNOWN;
                  return (
                    <span className="ap-fs-status-val" style={{ color: info.color }}>
                      {s === 'LIVE' && <span className="ap-fs-live-dot" aria-hidden="true" />}
                      {info.text}
                    </span>
                  );
                })()}
              </div>

              {/* Action buttons */}
              <div className="ap-fs-btns">
                <a
                  href={LIVE_DISPLAY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ap-btn-fs-open"
                >
                  ↗ Open Live Display
                </a>
                <a
                  href={LIVE_DISPLAY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ap-btn-fs-preview"
                >
                  Preview
                </a>
              </div>
              <p className="ap-field-hint" style={{ marginTop: '0.6rem' }}>
                Open on the projector / LED screen. Use the Fullscreen button on that page to go full-screen.
              </p>
            </div>

            {/* Save status + action bar */}
            <div className="ap-actions">
              <div className="ap-actions-status">
                {saveStatus === 'saved' && (
                  <span className="ap-status-ok" role="status">✓ Settings saved and applied.</span>
                )}
                {saveStatus === 'error' && (
                  <span className="ap-status-err" role="alert">Could not save. Check browser storage permissions.</span>
                )}
              </div>
              <div className="ap-actions-btns">
                <button
                  type="button"
                  onClick={handleReset}
                  className="ap-btn-secondary"
                >
                  Reset to Defaults
                </button>
                <button type="submit" className="ap-btn-primary">
                  Save Settings
                </button>
              </div>
            </div>

            <div className="ap-footer-note">
              <p>
                Settings are stored in this browser's localStorage and take effect immediately.
                Navigate to <code>/#admin-panel</code> to return here at any time.
              </p>
            </div>

          </form>
        )}
      </div>
    </div>
  );
};

export default AdminPanel;
