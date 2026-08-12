import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
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
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
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
    </>
  );
}

export default App;
