import React from 'react';
import image2 from '../assets/images/project1.jpg';
import image3 from '../assets/images/project2.jpg';
import image4 from '../assets/images/project3.jpg';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'E-commerce Platform',
      description: 'Full-stack e-commerce application with React, Node.js, and MongoDB',
      tags: ['React', 'Node.js', 'MongoDB', 'Redux'],
      github: '#',
      demo: '#',
      image: image2
    },
    {
      id: 2,
      title: 'Automated Testing Framework',
      description: 'Custom testing framework for web applications using Selenium and Python',
      tags: ['Python', 'Selenium', 'Pytest'],
      github: '#',
      demo: '#',
      image: image3
    },
    {
      id: 3,
      title: 'Task Management App',
      description: 'React application for task management with JWT authentication',
      tags: ['React', 'Firebase', 'Material UI'],
      
      image: image4
    }
  ];

  return (
    <section id="projects" className="section projects">
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        <div className="projects-grid">
          {projects.map(project => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <img src={project.image} alt={project.title} />
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag, index) => (
                    <span key={index}>{tag}</span>
                  ))}
                </div>
               
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;