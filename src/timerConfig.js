// Central configuration for the AUREX'26 hackathon timer.
// Admin edits are stored in localStorage and override these defaults at runtime.

export const DEFAULT_TIMER_CONFIG = {
  eventName: "AUREX'26",
  startDatetime: "2026-09-23T09:00:00+05:30",
  endDatetime: "2026-09-24T09:00:00+05:30",
  timezone: "Asia/Kolkata",
  isEnabled: true,
  showPreEventCountdown: true,
  showLiveTimer: true,
  showProgress: true,
  showPhase: true,
  completedMessage: "24 Hours. 60 Teams. One Innovation Journey.",
  resultsLink: "",
  highlightsLink: "",
  // Full-screen projector display (route: /aurex26/live)
  fullscreenLiveEnabled: false,
};

// Phases are defined as percentage ranges of total hackathon duration.
// Progress 0–100 maps to elapsed/total time.
export const PHASES = [
  { start: 0,  end: 10,  name: "PHASE 01 — IDEATE",        subtitle: "Understand • Plan • Design" },
  { start: 10, end: 60,  name: "PHASE 02 — BUILD",          subtitle: "Develop • Integrate • Test" },
  { start: 60, end: 75,  name: "PHASE 03 — MENTOR REVIEW",  subtitle: "Validate • Improve • Refine" },
  { start: 75, end: 95,  name: "PHASE 04 — FINAL SPRINT",   subtitle: "Fix • Polish • Complete" },
  { start: 95, end: 100, name: "PHASE 05 — SUBMISSION",     subtitle: "Package • Submit • Prepare" },
];

export const STORAGE_KEY = "aurex_timer_settings";

// Admin password for the settings panel.
// For a static SPA this is the only available auth mechanism.
export const ADMIN_PASSWORD = "AUREX2026ADMIN";
