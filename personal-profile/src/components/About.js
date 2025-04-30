import React from 'react';
import './Pages.css';

function About() {
  return (
    <div className="page about-page">
      <div className="container">
        <div className="page-content">
          <h2>About Me</h2>
          
          <section className="about-section">
            <h3>Personal Background</h3>
            <p>
              I am Neil Kervey A. Alegre, a self-motivated and independent 3rd year Information Technology student 
              with a strong drive for innovation and problem-solving. 
              I take pride in my ability to work autonomously while maintaining high standards of excellence. 
              My journey in IT is fueled by a vision to develop software that not only solves 
              real-world problems but also makes a positive impact on people's lives.
            </p>
          </section>
          
          <section className="about-section">
            <h3>Hobbies</h3>
            <ul>
              <li>Reading Political news/issues</li>
              <li>Playing online games</li>
              <li>Basketball</li>
             
            </ul>
          </section>
          
          <section className="about-section">
            <h3>Interests</h3>
            <ul>
            
            <li>New Technologies</li>
              <li>Web Development (Front-end and Back-end)</li>
              
              <li>Cybersecurity</li>
          
            
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}

export default About; 