import React, { useEffect, useRef, useState } from 'react';
import './Prizes.css';

const Prizes = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Optional: observer.disconnect() if you only want it to animate once
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.2, // Trigger when 20% visible
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section className={`prizes-section section-padding bg-alt ${isVisible ? 'is-visible' : ''}`} id="prizes" ref={sectionRef}>
      {/* Lottie celebration effect elements */}
      <div className="celebration-container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 0 }}>
        {isVisible && (
          <dotlottie-wc
            src="https://lottie.host/1b09cdda-0000-4758-89a8-551a71061ff6/WifnBzHVSy.lottie"
            style={{ width: "300px", height: "300px" }}
            autoplay="true"
            loop="true"
          ></dotlottie-wc>
        )}
      </div>

      <div className="container relative z-10">
        <div className="text-center mb-12">
          <p className="section-subtitle animate-on-scroll fade-up">Celebrate innovation. Reward creativity.</p>
          <h2 className="section-title animate-on-scroll fade-up delay-100">PRIZES</h2>
        </div>

        <div className="text-center" style={{ marginBottom: "5rem" }}>
          <div className="total-pool-container text-center animate-on-scroll zoom-in-pulse delay-300">
            <h3 className="total-pool-label">TOTAL PRIZE POOL</h3>
            <div className="total-pool-amount">₹60,000</div>
          </div>
        </div>

        <div className="prizes-grid">
          {/* First Prize - Centered and prominent */}
          <div className="prize-card first-prize animate-on-scroll prize-zoom-in delay-1200">
            <div className="prize-medal">🥇</div>
            <h4 className="prize-title">FIRST PRIZE</h4>
            <div className="prize-amount">₹30,000</div>
          </div>
          
          {/* Second and Third Prizes - Below/Beside */}
          <div className="secondary-prizes">
            <div className="prize-card second-prize animate-on-scroll prize-zoom-in delay-1500">
              <div className="prize-medal">🥈</div>
              <h4 className="prize-title">SECOND PRIZE</h4>
              <div className="prize-amount">₹20,000</div>
            </div>
            
            <div className="prize-card third-prize animate-on-scroll prize-zoom-in delay-1800">
              <div className="prize-medal">🥉</div>
              <h4 className="prize-title">THIRD PRIZE</h4>
              <div className="prize-amount">₹10,000</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Prizes;
