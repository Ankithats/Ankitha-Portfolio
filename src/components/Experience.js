import React from 'react';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      title: 'Software Developer',
      company: 'Threem Technology Solutions',
      location: 'Bangalore, Karnataka',
      period: 'July 2025 - Present',
      type: 'Full-time',
      achievements: [
        'Worked on backend-focused web applications involving REST APIs, authentication workflows, CRUD operations, and database-driven functionalities.',
        'Worked with Python-based backend services using FastAPI for building and maintaining REST APIs and handling server-side logic.',
        'Built systems like SalexiHR with secure authentication (JWT, MFA), CRUD modules, and Azure integrations',
        'Worked with SQL databases including MySQL, SQL Server and SQLite for data handling, queries, and relational database operations',
        'Collaborated in Agile/Scrum development environments while using Git, GitHub, Azure DevOps, and modern version control workflows.',
        ' Participated in debugging, API testing, performance improvements, and resolving application-level issues during development cycles.',
        ' Contributed to frontend-backend integration using React, JavaScript, HTML, CSS, and responsive UI development practices.'
      ]
    },
  
  ];

  return (
    <section id="experience" className="section experience" data-testid="experience-section">
      <div className="section-container">
      <h2 className="section-title" data-testid="experience-title">Professional Experience</h2>
      <div className="timeline">
        {experiences.map((exp, index) => (
          <div key={index} className="timeline-item" data-testid={`experience-${index}`}>
            <div className="timeline-dot"></div>
            <div className="timeline-content card">
              <div className="experience-header">
                <div>
                  <h3 className="experience-title">{exp.title}</h3>
                  <h4 className="experience-company">{exp.company}</h4>
                  <p className="experience-location">{exp.location}</p>
                </div>
                <div className="experience-meta">
                  <span className="experience-type">{exp.type}</span>
                  <span className="experience-period">{exp.period}</span>
                </div>
              </div>
              <ul className="experience-achievements">
                {exp.achievements.map((achievement, achIndex) => (
                  <li key={achIndex} data-testid={`achievement-${index}-${achIndex}`}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
};

export default Experience;