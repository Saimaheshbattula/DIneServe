/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from 'react-router-dom';

const headerStyle = {
  backgroundColor: '#f8f9fa', // Light gray background
  padding: '10px 20px', // Adjust padding for the navbar
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
};

const brandStyle = {
  fontSize: '24px',
  fontWeight: 'bold',
  color: '#333', // Dark text color
  textDecoration: 'none', // Remove underline
};

const menuLinkContainer = {
  display: 'flex',
  gap: '10px', // Add some space between the buttons
};

const menuLinkStyle = {
  color: '#fff', // White text color
  textDecoration: 'none', // Remove underline
};

const Header2 = () => {
  return (
    <div>
      <nav style={headerStyle}>
        <a style={brandStyle} className="navbar-brand">
          Restaurant
        </a>
        <div style={menuLinkContainer}>
          <Link to="/" className="btn btn-primary" style={menuLinkStyle}>
            Menu
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Header2;
