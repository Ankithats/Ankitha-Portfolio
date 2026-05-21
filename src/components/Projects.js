import React from 'react';
import './Projects.css';
import legalBridgeImg from '../images/legalBridge.jpg';
import threemUi from '../images/ThreemUi.jpg';
import GmrlLab from '../images/GmrlLabImage.jpg';
import salexiImage from '../images/HR-Management-Systems.webp';
const Projects = () => {
  const projects = [
      {
      title: 'Legal Bridge',
      company: 'Personal Project',
      ProjectLink :'https://github.com/Ankithats/Legal-Bridge',
      description: 'A legal management platform designed to streamline advocate, client, and case management workflows and authentication.',
      tech: ['Django', 'Django REST Framework','React', 'JWT Authentication', 'SQLite'],
      features: [
      'Advocate and client management',
      'Role-based system structure,JWT-based login system',
      'Database integration with SQLite',
      'REST API integration'
      ],
      image: legalBridgeImg
    },
    {
      title: 'Threem UI',
      company: 'Threem Technology Solutions',
      ProjectLink : 'https://www.threemsolutions.com/threem-ui/',
      description: 'Modern enterprise-style web application interface inspired by a real company system, designed to deliver a clean, responsive, and scalable user experience for managing business workflows and communication modules.',
      tech: ['FastAPI', 'Python', 'Pydantic', 'React.js', 'Tailwind CSS', 'Axios'],
      features: [
        'Contact form system with database storage and email notifications',
        'Projects API for showcasing featured work dynamically',
        'SMTP-based automated email system with HTML templates',
      ],
      image: threemUi
    },
    {
      title: 'SalexiHR System',
      company: 'Threem Technology Solutions',
      description: 'Comprehensive HR management system with employee leave management, role-based authentication and complete applicant tracking.',
      tech: ['.NET 8', 'Angular 18', 'SQL Server', 'Azure DevOps'],
      features: [
        'Multi-factor authentication and password reset',
        'Leads/clients CRUD and job management',
        'Employee leave management module with leave application and approval workflows  '
      ],
      image: salexiImage
    },
    {
      title: 'GRML Lab Appointment Booking System',
      company: 'Personal Project',
      ProjectLink : 'https://github.com/Ankithats/GRML-LAB-Project',
      description: 'A web-based lab appointment booking system built using Django, following the MVT architecture. The system enables users to schedule and manage appointments.',
      tech: ['Django', 'Django ORM', 'SQLite','HTML5','CSS3','Bootstrap','JavaScript'],
      features: [
        'Customer booking management',
        'Room availability tracking',
        'MySQL database schema design',
        'Admin dashboard'
      ],
      image: GmrlLab
    },
    
  ];

  return (
    <section id="projects" className="section projects" data-testid="projects-section">
      <div className="section-container">
      <h2 className="section-title" data-testid="projects-title">Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card card" data-testid={`project-${index}`}>
            <div className="project-image-wrapper">
              <img src={project.image} alt={project.title} className="project-image" />
              <div className="project-overlay">
              <a href={project.ProjectLink} target="_blank" rel="noopener noreferrer" className="project-btn"data-testid={`project-view-${index}`}>
              View Project
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
              <polyline points="15 3 21 3 21 9"/>
              <line x1="10" y1="14" x2="21" y2="3"/>
              </svg>
              </a>
              </div>
            </div>
            <div className="project-content">
              <div className="project-header">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-company">{project.company}</p>
                <p className="project-period">{project.period}</p>
              </div>
              <p className="project-description">{project.description}</p>
              <div className="project-tech">
                {project.tech.map((tech, techIndex) => (
                  <span key={techIndex} className="tech-badge" data-testid={`tech-${index}-${techIndex}`}>
                    {tech}
                  </span>
                ))}
              </div>
              <ul className="project-features">
                {project.features.slice(0, 3).map((feature, featureIndex) => (
                  <li key={featureIndex} data-testid={`feature-${index}-${featureIndex}`}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    <span>{feature}</span>
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

export default Projects;