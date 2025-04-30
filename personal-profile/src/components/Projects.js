import React from 'react';
import './Pages.css';

function Projects() {
  return (
    <div className="page projects-page">
      <div className="container">
        <div className="page-content">
          <h2>Projects</h2>
          
          <div className="projects-list">
            <div className="project-card">
              <h3>E-Commerce Website</h3>
              <div className="project-details">
                <p className="project-description">
                  A full-stack e-commerce platform with product listings, shopping cart,
                  user authentication, and payment integration.
                </p>
                <div className="technologies">
                  <h4>Technologies Used:</h4>
                  <ul>
                    <li>React.js</li>
                    <li>Laravel</li>
                    <li>MySQL</li>
                    <li>Xampp</li>
                    
                  </ul>
                </div>
                <a href="https://github.com/" className="project-link" target="_blank" rel="noopener noreferrer">
                  View Project
                </a>
              </div>
            </div>
            
            <div className="project-card">
              <h3>Task Management</h3>
              <div className="project-details">
                <p className="project-description">
                  A task management application that allows users to create, organize,
                  and track their tasks with features like categories, due dates, and priority levels.
                </p>
                <div className="technologies">
                  <h4>Technologies Used:</h4>
                  <ul>
                    <li>React.js</li>
                    <li>Laravel</li>
                    <li>MySQL</li>
                    
                    <li>Xampp</li>
                  </ul>
                </div>
                <a href="https://github.com/" className="project-link" target="_blank" rel="noopener noreferrer">
                  View Project
                </a>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects; 