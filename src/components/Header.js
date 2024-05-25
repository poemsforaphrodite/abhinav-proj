import React, { useState } from 'react';
import './Header.css'; // Ensure this path is correct relative to your project structure
import logo from '../logoedu.png';  // Adjust the path based on your directory structure

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="Future Edutech Logo" />
      </div>
      <nav className={`nav ${isOpen ? 'open' : ''}`}>
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/courses">Courses</a>
        <a href="/blog">Blog</a>
        <a href="/contact">Contact</a>
      </nav>
      <div className="toggle-icon" onClick={toggleNav}>
        &#9776;
      </div>
    </header>
  );
};

export default Header;
