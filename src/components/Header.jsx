import React from 'react';
import './Header.css';
import image1 from '../assets/images/profile2.jpeg';
import resume from '../assets/resume/Happy_Ngulinga_NB.pdf'; // Adjust the path as necessary


const Header = () => {
  return (
    <header className="header" id="home">
      <div className="container">
        <div className="header-content">
          <h1>Hi, I'm <span>Happy Ngulinga NB</span></h1>
          <h2>Software Developer & System Tester</h2>
          <p>Building quality software and ensuring it works flawlessly</p>
          <div className="header-buttons">
            <a href="#contact" className="btn btn-primary">Contact Me</a>
            <a href= {resume} download className="btn btn-secondary">Download CV</a>
          </div>
        </div>
        <div className="header-image">
              <img src={image1} alt="Profile2" />  {/* lowercase */}
     </div>
      </div>
    </header>
  );
};

export default Header;