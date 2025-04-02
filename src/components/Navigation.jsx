
import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import './Navigation.css'; // Assuming you have a CSS file for styles

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="navbar-brand">
          <span className="logo">NB</span>
          <button 
            className={`hamburger ${isOpen ? 'open' : ''}`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
        <div className={`navbar-links ${isOpen ? 'open' : ''}`}>
          <Link 
            to="about" 
            smooth={true} 
            duration={500}
            spy={true}
            activeClass="active"
            className={activeLink === 'about' ? 'active' : ''}
            onClick={() => {
              setActiveLink('about');
              closeMenu();
            }}
          >
            About
          </Link>
          <Link 
            to="skills" 
            smooth={true} 
            duration={500}
            spy={true}
            activeClass="active"
            className={activeLink === 'skills' ? 'active' : ''}
            onClick={() => {
              setActiveLink('skills');
              closeMenu();
            }}
          >
            Skills
          </Link>
          <Link 
            to="projects" 
            smooth={true} 
            duration={500}
            spy={true}
            activeClass="active"
            className={activeLink === 'projects' ? 'active' : ''}
            onClick={() => {
              setActiveLink('projects');
              closeMenu();
            }}
          >
            Projects
          </Link>
          <Link 
            to="experience" 
            smooth={true} 
            duration={500}
            spy={true}
            activeClass="active"
            className={activeLink === 'experience' ? 'active' : ''}
            onClick={() => {
              setActiveLink('experience');
              closeMenu();
            }}
          >
            Experience
          </Link>
          <Link 
            to="contact" 
            smooth={true} 
            duration={500}
            spy={true}
            activeClass="active"
            className={activeLink === 'contact' ? 'active' : ''}
            onClick={() => {
              setActiveLink('contact');
              closeMenu();
            }}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;