import React from 'react';
import { FaGithub, FaFacebook, FaEnvelope, FaUser, FaPaperPlane } from 'react-icons/fa';
import './Pages.css';

function Contact() {
  return (
    <div className="page contact-page">
      <div className="container">
        <div className="page-content">
          <h2>Get In Touch</h2>
          
          <div className="contact-info">
            <div className="contact-details">
              <div className="contact-item">
                <h3><FaEnvelope className="contact-icon" /> Email</h3>
                <p><a href="mailto:alegreneilkervey38@gmail.com">alegreneilkervey38@gmail.com</a></p>
              </div>
              
              <div className="contact-item">
                <h3>Connect With Me</h3>
                <ul className="social-links">
                  <li>
                    <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
                      <FaGithub className="social-icon" /> GitHub
                    </a>
                  </li>
                  <li>
                    <a href="https://www.facebook.com/neilkervey" target="_blank" rel="noopener noreferrer">
                      <FaFacebook className="social-icon" /> Facebook
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="contact-form">
              <h3>Send Me a Message</h3>
              <form className="enhanced-form">
                <div className="form-group">
                  <div className="input-icon">
                    <FaUser className="form-icon" />
                    <input type="text" id="name" name="name" placeholder="Your Name" required />
                  </div>
                </div>
                
                <div className="form-group">
                  <div className="input-icon">
                    <FaEnvelope className="form-icon" />
                    <input type="email" id="email" name="email" placeholder="Your Email" required />
                  </div>
                </div>
                
                <div className="form-group">
                  <textarea 
                    id="message" 
                    name="message" 
                    rows="5" 
                    placeholder="Your Message" 
                    required
                  ></textarea>
                </div>
                
                <button type="submit" className="submit-button">
                  <FaPaperPlane className="button-icon" />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact; 