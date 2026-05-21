import React from 'react';
import './About.css';
import aboutImage from '../images/about1.jpeg';
const About = () => {
  return (
    <section id="about" className="section about" data-testid="about-section">
      <div className="section-container">
      <h2 className="section-title" data-testid="about-title">About Me</h2>
      <div className="about-content">
        <div className="about-image">
          <div className="about-image-wrapper">
            <img 
              src={aboutImage}
              alt="Gokul JN"
              className="about-img"
            />
            <div className="about-decoration"></div>
          </div>
        </div>
        <div className="about-text">
          <p className="about-description" data-testid="about-description">
            I'm a <strong>Software Developer</strong>  with experience in<strong> Python, Django, REST APIs, SQL, and modern web technologies</strong>.with a growing focus on backend engineering and application architecture. My work involves handling API workflows, authentication systems, database integration, and creating smooth interactions between frontend and backend services.
          </p>
          <p className="about-description">
            Currently working at <strong>Threem Technology Solutions</strong> I contribute to backend development, role-based access control, and database-driven applications within Agile development environments while continuously exploring cleaner coding practices and modern approaches to web development.
</p>
          <div className="about-stats">
            <div className="stat-card" data-testid="stat-experience">
              <h3 className="stat-number">1.5+</h3>
              <p className="stat-label">Years Experience</p>
            </div>
            <div className="stat-card" data-testid="stat-projects">
              <h3 className="stat-number">3+</h3>
              <p className="stat-label">Projects Completed</p>
            </div>
            <div className="stat-card" data-testid="stat-tech">
              <h3 className="stat-number">15+</h3>
              <p className="stat-label">Technologies</p>
            </div>
          </div>
          <div className="about-info">
            <div className="info-item">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
              <span>Kochi,Kerala</span>
            </div>
           
            <div className="info-item">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
              <span>ankithats7@gmail.com</span>
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default About;