import React from 'react';
import './Experience.css'; // Assuming you have a CSS file for styling

const Experience = () => {
  const experiences = [
    {
      id: 1,
      role: 'Senior Software Developer',
      company: 'Tech Solutions Inc.',
      period: '2020 - Present',
      responsibilities: [
        'Developed and maintained web applications using React and Node.js',
        'Implemented automated testing strategies reducing bugs by 40%',
        'Led a team of 5 developers in agile environment'
      ]
    },
    {
      id: 2,
      role: 'Quality Assurance Engineer',
      company: 'Software Testers Ltd.',
      period: '2018 - 2020',
      responsibilities: [
        'Designed and executed test plans for web applications',
        'Created automated test scripts using Selenium',
        'Worked closely with developers to improve code quality'
      ]
    },
    {
      id: 3,
      role: 'Junior Developer',
      company: 'StartUp Innovations',
      period: '2016 - 2018',
      responsibilities: [
        'Assisted in front-end development using JavaScript',
        'Performed manual testing of new features',
        'Documented technical specifications'
      ]
    }
  ];

  return (
    <section id="experience" className="section experience">
      <div className="container">
        <h2 className="section-title">Work Experience</h2>
        <div className="timeline">
          {experiences.map(exp => (
            <div key={exp.id} className="timeline-item">
              <div className="timeline-header">
                <h3>{exp.role}</h3>
                <span>{exp.company} | {exp.period}</span>
              </div>
              <div className="timeline-content">
                <ul>
                  {exp.responsibilities.map((item, index) => (
                    <li key={index}>{item}</li>
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