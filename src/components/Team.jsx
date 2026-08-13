import React, { useEffect, useRef, useState } from 'react';
import './Team.css';

const Team = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.15,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  const organizers = [
    { name: "Dinesh", role: "Organizer", img: "/team/Dinesh.png?v=2" },
    { name: "Hariyanka", role: "Organizer", img: "/team/Hariyanka.png?v=2" },
    { name: "Nityasri", role: "Organizer", img: "/team/Nityasri.png" },
    { name: "Avanthika", role: "Organizer", img: "/team/Avanthika.png" },
    { name: "Shanjay", role: "Organizer", img: "/team/Shanjay.png" }
  ];

  return (
    <section className={`team-section section-padding bg-alt ${isVisible ? 'is-visible' : ''}`} id="team" ref={sectionRef}>
      <div className="container">

        {/* DIRECTOR */}
        <div className="team-group animate-on-scroll fade-up delay-100">
          <h3 className="team-group-title">CHIEF PATRON</h3>
          <div className="team-tier tier-director">
            <div className="team-card card-director">
              <div className="img-container">
                <img src="/team/Director-Photos.jpeg?v=2" alt="Prof. R. Chandrasekaran" />
              </div>
              <div className="team-info">
                <h3 className="team-name">Prof. R. Chandrasekaran</h3>
                <p className="team-role">Director</p>
              </div>
            </div>
          </div>
        </div>

        {/* REGISTRAR */}
        <div className="team-group animate-on-scroll fade-up delay-200">
          <h3 className="team-group-title">PATRON</h3>
          <div className="team-tier tier-registrar">
            <div className="team-card card-registrar">
              <div className="img-container">
                <img src="/team/registrar.jpeg" alt="Dr. R. Bhuvaneshwari" />
              </div>
              <div className="team-info">
                <h3 className="team-name">Dr. R. Bhuvaneshwari</h3>
                <p className="team-role">Registrar</p>
              </div>
            </div>
          </div>
        </div>

        {/* COORDINATORS */}
        <div className="team-group animate-on-scroll fade-up delay-300">
          <h3 className="team-group-title">COORDINATORS</h3>
          <div className="team-tier tier-coordinators">
            <div className="team-card card-coordinator">
              <div className="img-container">
                <img src="/team/Senthil.png?v=2" alt="Senthil Kumar" />
              </div>
              <div className="team-info">
                <h3 className="team-name">Senthil Kumar</h3>
                <p className="team-role">Coordinator</p>
              </div>
            </div>
            <div className="team-card card-coordinator">
              <div className="img-container">
                <img src="/team/murugaswaminathan.png" alt="Murugaswaminathan" />
              </div>
              <div className="team-info">
                <h3 className="team-name">Murugaswaminathan</h3>
                <p className="team-role">Associate Coordinator</p>
              </div>
            </div>
          </div>
        </div>

        {/* ORGANIZERS */}
        <div className="team-group animate-on-scroll fade-up delay-400" style={{ marginTop: '2rem' }}>
          <div className="text-center mb-10">
            <p className="section-subtitle mb-2" style={{ textTransform: 'uppercase' }}>Organizing Committee</p>
            <h2 className="section-title" style={{ fontSize: '2.5rem' }}>MEET THE TEAM</h2>
          </div>
          <div className="team-tier tier-organizers">
            {organizers.map((org, index) => (
              <div className="team-card card-organizer" key={index}>
                <div className="img-container">
                  <img src={org.img} alt={org.name} />
                </div>
                <div className="team-info">
                  <h3 className="team-name">{org.name}</h3>
                  <p className="team-role">{org.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Team;
