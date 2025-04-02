import React from 'react';

const Skills = () => {
  const devSkills = [
    { name: 'JavaScript', level: 90 },
    { name: 'React', level: 85 },
    { name: 'Node.js', level: 80 },
    { name: 'Python', level: 75 },
    { name: 'HTML/CSS', level: 95 },
    { name: 'SQL', level: 85 },
  ];

  const testingSkills = [
    { name: 'Selenium', level: 90 },
    { name: 'Jest', level: 85 },
    { name: 'Cypress', level: 80 },
    { name: 'JIRA', level: 75 },
    { name: 'Postman', level: 90 },
    { name: 'Load Testing', level: 70 },
  ];

  return (
    <section id="skills" className="section skills">
      <div className="container">
        <h2 className="section-title">My Skills</h2>
        <div className="skills-container">
          <div className="skills-category">
            <h3>Development</h3>
            <div className="skills-list">
              {devSkills.map((skill, index) => (
                <div key={index} className="skill-item">
                  <div className="skill-info">
                    <span>{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div 
                      className="skill-progress" 
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="skills-category">
            <h3>Testing</h3>
            <div className="skills-list">
              {testingSkills.map((skill, index) => (
                <div key={index} className="skill-item">
                  <div className="skill-info">
                    <span>{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div 
                      className="skill-progress" 
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;