/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

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

const menuLinkStyle = {
  color: '#fff', // White text color
  textDecoration: 'none', // Remove underline
};

const menuLinkContainer = {
  display: 'flex',
  gap: '10px', // Add some space between the buttons
};


const Header1 = ({ count }) => {
  return (
    <div>
      <nav style={headerStyle} className='navbar navbar-light bg-light'>
        <a style={brandStyle} className='navbar-brand'>
          Restaurant
        </a>
        <div style={menuLinkContainer}>
          <Link to="/CashierLogin" className="btn btn-primary" style={menuLinkStyle}>
            Counter
          </Link>
          <Link to="/ChefLogin" className="btn btn-primary" style={menuLinkStyle}>
            Chef/Server
          </Link>
          <Link to='/orders' className="btn btn-primary" style={menuLinkStyle}>
            Orders <span className='badge bg-secondary'>{count}</span>
          </Link>
        </div>
      </nav>
    </div>
  );
};

const mapStateToProps = (state) => ({
  count: state.orderreducer.length,
});

export default connect(mapStateToProps)(Header1);
