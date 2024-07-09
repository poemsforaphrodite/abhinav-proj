import React from 'react';
import './Footer.css';
import logo from '../logoedu.png'; // Adjust the path based on your directory structure

const Footer = () => {
  return (
    <footer className="footer">
      <div className="newsletter">
        <h2>Subscribe Our Newsletter</h2>
        <p>Subscribe Our Newsletter Now to get all the updates and Discount Offer News</p>
        <form className="newsletter-form">
          <input type="email" placeholder="Enter Your Email...." required />
          <button type="submit">
            <i className="fas fa-paper-plane"></i>
          </button>
        </form>
      </div>
      <div className="footer-container">
        <div className="footer-section">
          <img src={logo} alt="Future Edutech Logo" className="footer-logo" />
          <p>Our courses cover a range of SAP modules, including HCM, accounting, FICO, SuccessFactors, S4 HANA, project system, maintenance, SD, MM, PP, and more.</p>
        </div>
        <div className="footer-section">
          <h3>Support</h3>
          <a href="/about">About Us</a>
          <a href="/contact">Contact</a>
          <a href="/blog">Blog</a>
        </div>
        <div className="footer-section">
          <h3>Useful Links</h3>
          <a href="/privacy-policy">Privacy Policy</a>
          <a href="/terms-of-service">Terms of Service</a>
          <a href="/refund-policy">Refund Policy</a>
        </div>
        <div className="footer-section">
          <h3>Get in Touch</h3>
          <p><i className="fas fa-phone"></i> +918882593576</p>
          <p><i className="fas fa-envelope"></i> Info@futureedutech.co.in</p>
          <p>G8, Noida , Sector - 2, UP - 201301</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>Copyright © 2016 All Rights Reserved By <a href="https://futureedutech.co.in">Info@futureedutech.co.in</a></p>
      </div>
    </footer>
  );
};

export default Footer;
