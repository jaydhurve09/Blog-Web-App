// src/components/GetStarted.js
import React from 'react';
import Navbar from './Navbar'; // Ensure this path is correct
import './GetStarted.css'; // Ensure this path is correct

const GetStarted = () => {
  return (
    <>
      <Navbar />
      <div className="get-started-container">
        <div className="hero-section">
          <h1>Welcome to Our Blog Platform</h1>
          <p>Connect, share, and discover the stories that matter to you.</p>
          <button className="get-started-btn">Get Started</button>
        </div>
        <div className="features-section">
          <h2>Features</h2>
          <div className="feature-item">
            <h3>Write and Publish</h3>
            <p>Share your ideas with a wide audience.</p>
          </div>
          <div className="feature-item">
            <h3>Engage with Readers</h3>
            <p>Get feedback and interact with your audience.</p>
          </div>
          <div className="feature-item">
            <h3>Explore Topics</h3>
            <p>Discover content on topics you care about.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default GetStarted;
