import React from 'react';
import './Pages.css';

function Home() {
  return (
    <div className="page home-page">
      <div className="container">
        <div className="page-content">
          <h2>Welcome to My Personal Profile</h2>
          <div className="intro-section">
            <div className="profile-image">
              <img 
                src="/images/neil.jpg" 
                alt="Profile" 
                className="actual-image"
              />
            </div>
            <div className="intro-text">
              <p>Hello! Welcome to my profile.</p>
              <p>This page showcases my background, education, projects, and how to get in touch with me.</p>
              <p>Feel free to explore and learn more about my journey!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home; 