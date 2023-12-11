// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link
import '../../main/style.css';

const Navbar = () => {
  const handleSignUpClick = () => {
    // You can perform any additional actions before navigating if needed
    console.log('Sign-up link clicked');
  };

  return (
    <nav id="navbar-top">
      <div className="navbar-container">
        <Link to="/" className="navbar-brand" style={{ color: 'black' }}>
          Foody.in
        </Link>
        <div className="search-container">
          <input type='text' placeholder='Search For Food' />
          <button className="btn">Search</button>
        </div>
        <div className="navbar-nav" id="navbarNav">
          <ul style={{ fontSize: '1.1rem' }}>
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/sign-up" className="nav-link" onClick={handleSignUpClick}>
                Sign-up
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
