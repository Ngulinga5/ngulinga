import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faGithub, 
  faLinkedin, 
  faTwitter,
  faCodepen,
  faDev,
  
} from '@fortawesome/free-brands-svg-icons';
import './Footer.css'; // Import your CSS file for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <span className="logo">Happy Ngulinga NB</span>
            <p>Software Developer & System Tester</p>
          </div>
                 
          <div className="footer-social">
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="https://codepen.io/yourusername" target="_blank" rel="noopener noreferrer" aria-label="CodePen">
              <FontAwesomeIcon icon={faCodepen} />
            </a>
            <a href="https://dev.to/yourusername" target="_blank" rel="noopener noreferrer" aria-label="Dev.to">
              <FontAwesomeIcon icon={faDev} />
            </a>
            {/* Add more social icons as needed */}
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} happyngulinga@gmail.com . All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;