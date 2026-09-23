import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HackathonTimer from './components/timer/HackathonTimer';
import AdminPanel from './components/admin/AdminPanel';
import About from './components/About';
import Highlights from './components/Highlights';
import TeamStructure from './components/TeamStructure';
import TracksOverview from './components/TracksOverview';
import WhyParticipate from './components/WhyParticipate';
import Prizes from './components/Prizes';
import Rules from './components/Rules';
import FAQ from './components/FAQ';
import CTA from './components/CTA';
import Team from './components/Team';
import Contact from './components/Contact';
import LiveDisplay from './pages/LiveDisplay';
import './App.css';

// ── Main website (all normal sections + timer + admin) ────────────────────────
function MainSite() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <HackathonTimer />
        <About />
        <Highlights />
        <TeamStructure />
        <TracksOverview />
        <WhyParticipate />
        <Prizes />
        <Rules />
        <FAQ />
        <CTA />
        <Team />
        <Contact />
      </main>
      {/* Admin panel — hash-triggered overlay, does not appear on /aurex26/live */}
      <AdminPanel />
    </>
  );
}

// ── Router root ────────────────────────────────────────────────────────────────
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"             element={<MainSite />} />
        <Route path="/aurex26/live" element={<LiveDisplay />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
