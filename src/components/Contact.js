import React, { useState } from 'react';
import axios from 'axios';
import './Contact.css';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const Contact = () => {
  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    try {
      const response = await axios.post(`${API}/contact`, formData);
      setStatus({ type: 'success', message: response.data.message });
      setFormData({ full_name: '', email: '', message: '' });
    } catch (error) {
      setStatus({ 
        type: 'error', 
        message: error.response?.data?.detail || 'Failed to send message. Please try again.' 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section contact" data-testid="contact-section">
      <div className="section-container">
      <h2 className="section-title" data-testid="contact-title">Get In Touch</h2>
      <div className="contact-content">
        <div className="contact-info">
          <h3 className="contact-subtitle">Let's Connect</h3>
          <p className="contact-description">
           I’m open to discussing opportunities, collaborations, creative ideas, and backend development projects. Whether you have a question, an idea, or just want to connect, feel free to reach out!
          </p>
          <div className="contact-methods">
            <a href="mailto:ankithats7@gmail.com" className="contact-method" data-testid="contact-email">
              <div className="method-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
              </div>
              <div>
                <p className="method-label">Email</p>
                <p className="method-value">ankithats7@gmail.com</p>
              </div>
            </a>
            
            <div className="contact-method" data-testid="contact-location">
              <div className="method-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
              </div>
              <div>
                <p className="method-label">Location</p>
                <p className="method-value">Kochi, Kerala</p>
              </div>
            </div>
          </div>
        </div>
        <form className="contact-form" onSubmit={handleSubmit} data-testid="contact-form">
          <div className="form-group">
            <label htmlFor="full_name">Full Name</label>
            <input
              type="text"
              id="full_name"
              name="full_name"
              value={formData.full_name}
              onChange={handleChange}
              required
              disabled={isSubmitting}
              data-testid="contact-name-input"
              placeholder="Your full name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              disabled={isSubmitting}
              data-testid="contact-email-input"
              placeholder="your.email@example.com"
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              disabled={isSubmitting}
              rows="6"
              data-testid="contact-message-input"
              placeholder="Tell me about your project or inquiry..."
            ></textarea>
          </div>
          {status.message && (
            <div className={`status-message ${status.type}`} data-testid="contact-status">
              {status.message}
            </div>
          )}
          <button 
            type="submit" 
            className="btn-primary submit-btn" 
            disabled={isSubmitting}
            data-testid="contact-submit-btn"
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="22" y1="2" x2="11" y2="13"/>
              <polygon points="22 2 15 22 11 13 2 9 22 2"/>
            </svg>
          </button>
        </form>
      </div>
      </div>
    </section>
  );
};

export default Contact;