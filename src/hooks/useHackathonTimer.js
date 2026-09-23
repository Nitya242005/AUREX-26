import { useState, useEffect } from 'react';
import { DEFAULT_TIMER_CONFIG, PHASES, STORAGE_KEY } from '../timerConfig';

function loadConfig() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) return { ...DEFAULT_TIMER_CONFIG, ...JSON.parse(stored) };
  } catch {}
  return { ...DEFAULT_TIMER_CONFIG };
}

function computeStatus(now, startMs, endMs) {
  if (now < startMs) return 'BEFORE_EVENT';
  if (now < endMs)   return 'LIVE';
  return 'COMPLETED';
}

function getCurrentPhase(progress) {
  for (const phase of PHASES) {
    if (progress >= phase.start && progress < phase.end) return phase;
  }
  return PHASES[PHASES.length - 1];
}

// Possible status values:
//   DISABLED      — timer is turned off in admin settings
//   BEFORE_EVENT  — currentTime < startTime
//   LIVE          — startTime <= currentTime < endTime
//   COMPLETED     — currentTime >= endTime
//
// alwaysRun: when true, skips the DISABLED check (used by the live display page
// so it keeps showing the real timer state even if isEnabled is false).
export function useHackathonTimer({ alwaysRun = false } = {}) {
  const [config, setConfig] = useState(() => loadConfig());
  // Tick stored as a timestamp integer so only one state update drives re-renders
  const [now, setNow] = useState(() => Date.now());

  // Reload config when admin saves (same tab) or when another tab saves (cross-tab)
  useEffect(() => {
    const onUpdate  = () => setConfig(loadConfig());
    const onStorage = (e) => { if (e.key === STORAGE_KEY) setConfig(loadConfig()); };
    window.addEventListener('aurex_timer_updated', onUpdate);
    window.addEventListener('storage', onStorage);
    return () => {
      window.removeEventListener('aurex_timer_updated', onUpdate);
      window.removeEventListener('storage', onStorage);
    };
  }, []);

  // Tick every second — only updates `now`, not config
  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);

  if (!config.isEnabled && !alwaysRun) return { status: 'DISABLED', config };

  const startMs = new Date(config.startDatetime).getTime();
  const endMs   = new Date(config.endDatetime).getTime();

  const status = computeStatus(now, startMs, endMs);

  let diffMs   = 0;
  let progress = 0;

  if (status === 'BEFORE_EVENT') {
    diffMs = startMs - now;
  } else if (status === 'LIVE') {
    diffMs   = Math.max(0, endMs - now);
    const total   = endMs - startMs;
    const elapsed = now - startMs;
    progress = Math.min(100, Math.max(0, (elapsed / total) * 100));
  } else {
    progress = 100;
  }

  const totalSec = Math.floor(diffMs / 1000);
  const days     = Math.floor(totalSec / 86400);
  const hours    = Math.floor((totalSec % 86400) / 3600);
  const minutes  = Math.floor((totalSec % 3600) / 60);
  const seconds  = totalSec % 60;

  const currentPhase = status === 'LIVE' ? getCurrentPhase(progress) : null;

  return {
    status,
    config,
    days,
    hours,
    minutes,
    seconds,
    progress,
    currentPhase,
    startMs,
    endMs,
  };
}
