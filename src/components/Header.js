import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src="path/to/logo.png" alt="ZebLearn Logo" />
      </div>
      <nav className="nav">
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/courses">All Courses</a>
        <a href="/blog">Blog</a>
        <a href="/contact">Contact</a>
      </nav>
    </header>
  );
};

export default Header;