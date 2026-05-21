import React from 'react';
import './Education.css';

const Education = () => {
  const education = [
  
    {
      degree: 'Diploma In Computer Engineering',
      institution: 'Model Polytechnic College Vadakara',
      period: '2020 - 2023',
      grade: 'CGPA: 7.33'
    },
    {
      degree: 'Higher Secondary - Commerce',
      institution: 'G G H S S Koyilandy',
      period: '2018 - 2020',
      grade: 'Percentage: 68%'
    },
    {
      degree: 'SSLC',
      institution: 'G G H S S Koyilandy',
      period: '2017 - 2018',
      grade: 'Percentage: 88%'
    }
  ];

  return (
    <section id="education" className="section education" data-testid="education-section">
       <div className="section-container">
      <h2 className="section-title" data-testid="education-title">Education</h2>
      <div className="education-grid">
        {education.map((edu, index) => (
          <div key={index} className="education-card card" data-testid={`education-${index}`}>
            <div className="education-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
                <path d="M6 12v5c3 3 9 3 12 0v-5"/>
              </svg>
            </div>
            <h3 className="education-degree">{edu.degree}</h3>
            <h4 className="education-institution">{edu.institution}</h4>
            <p className="education-location">{edu.location}</p>
            <p className="education-period">{edu.period}</p>
            {edu.grade && <p className="education-grade">{edu.grade}</p>}
            {edu.status && <span className="education-status">{edu.status}</span>}
          </div>
        ))}
      </div>
      </div>
    </section>
  );
};

export default Education;