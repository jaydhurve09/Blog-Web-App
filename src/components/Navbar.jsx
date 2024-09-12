import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">Logo</div>

      {/* Search Bar */}
      <div className="search-bar">
        <input type="text" placeholder="Search..." />
        <button>Search</button>
      </div>

      <ul className={isOpen ? "nav-links open" : "nav-links"}>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/services">Services</a></li>
        <li><a href="/contact">Contact</a></li>

        {/* Login Button */}
        <li className="login-btn">
          <a href="/login">Login</a>
        </li>
      </ul>

      {/* Hamburger Menu */}
      <div className="hamburger" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </nav>
  );
};

export default Navbar;
