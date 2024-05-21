import React from 'react';
import './Header.css';
import logo from '../logoedu.png';  // Adjust the path based on your directory structure

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="ZebLearn Logo" />
      </div>
      <nav className="nav">
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/courses">Courses</a>
        <a href="/blog">Blog</a>
        <a href="/contact">Contact</a>
      </nav>
    </header>
  );
};

export default Header;
