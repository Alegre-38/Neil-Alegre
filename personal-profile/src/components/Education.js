import React from 'react';
import './Pages.css';

function Education() {
  return (
    <div className="page education-page">
      <div className="container">
        <div className="page-content">
          <h2>Education</h2>
          
          <div className="education-list">
            <div className="education-item">
              <h3>Bachelor of Science in Information Technology</h3>
              <p className="institution">University of Cabuyao (PNC)</p>
              <p className="years">2022 - Present</p>
            </div>
            
            <div className="education-item">
              <h3>Senior High School - Humss(Humanities and Social Sciences)</h3>
              <p className="institution">Aitsa Cabuyao,AITSA - Asian Institute of Technology, Sciences and the Arts</p>
              <p className="years">2019- 2021</p>
            </div>
          </div>
          
          <div className="courses-section">
            <h3>Courses Taken</h3>
            <ul className="courses-list">
              <li>Data Structures and Algorithms</li>
              <li>Object-Oriented Programming</li>
              <li>Web Development</li>
              <li>Information Management</li>
              <li>Human Computer Interaction</li>
              <li>System Analysis and Design</li>
              <li>Mobile Application Development</li>
              <li>System Integration and Architecture</li>
              <li>Networking and Communication</li>
              <li>Information Assurance and Security</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education; 