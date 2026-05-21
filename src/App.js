import React, { useState, useEffect } from 'react';
import './App.css';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

function App() {
  const [isDark, setIsDark] = useState(true);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'skills', 'experience', 'projects', 'education',  'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const logSizes = () => {
      console.log('Viewport height:', window.innerHeight);
      console.log('Viewport width:', window.innerWidth);
      console.log('Is mobile (< 768px):', window.innerWidth < 768);
      console.log('Is tablet (< 968px):', window.innerWidth < 968);
      const sections = ['hero', 'about', 'skills', 'experience', 'projects', 'education', 'contact'];
      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          console.log(`${section} height:`, element.offsetHeight, 'width:', element.offsetWidth);
        }
      });
    };
    logSizes();
    window.addEventListener('resize', logSizes);
    return () => window.removeEventListener('resize', logSizes);
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <div className={`App ${isDark ? 'dark-theme' : 'light-theme'}`}>
      <Navbar activeSection={activeSection} isDark={isDark} toggleTheme={toggleTheme} />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Education />
      <Contact />
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;