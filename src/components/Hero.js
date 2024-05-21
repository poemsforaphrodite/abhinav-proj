import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <div className="hero-text">
          <h1>ALL SKILLS, ONE CENTRAL PLACE.</h1>
          <p>Our catalog is tailored to bolster comprehensive professional growth, encompassing both essential workplace skills and technical topics.</p>
          <div className="search-bar">
            <input type="text" placeholder="Type Something to Search..." />
            <button type="submit"><i className="fas fa-search"></i></button>
          </div>
        </div>
        <aside className="signup-form">
          <h2>Book a <span className="highlight">Free</span> Live Class</h2>
          <form>
            <input type="text" placeholder="Full Name" />
            <input type="email" placeholder="Email Address" />
            <input type="tel" placeholder="Phone No" />
            <button type="submit">BOOK NOW</button>
          </form>
          <p>By continuing you agree to Zeblearnindia.com's <a href="/terms">Terms & Conditions</a> and <a href="/privacy">Privacy Policy</a></p>
        </aside>
      </div>
    </section>
  );
};

export default Hero;
