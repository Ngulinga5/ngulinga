import React from 'react';
import './About.css'; // Assuming you have a CSS file for styling

const About = () => {
  return (
    <section id="about" className="section about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              I'm a passionate software developer and system tester with X years of experience 
              in building robust applications and ensuring their quality through comprehensive 
              testing methodologies.
            </p>
            <p>
              My expertise spans across full-stack development, automated testing, 
              and quality assurance processes. I believe in writing clean, maintainable code 
              and creating test suites that ensure software reliability.
            </p>
            <p>
              When I'm not coding or testing, I enjoy contributing to open-source projects, 
              learning new technologies, and sharing knowledge with the developer community.
            </p>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default About;