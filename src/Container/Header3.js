/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

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

const Header3 = () => {
  return (
    <div>
      <nav style={headerStyle}>
        <a style={brandStyle} className="navbar-brand">
          Restaurant
        </a>
        </nav>
    </div>
  );
}

export default Header3;
