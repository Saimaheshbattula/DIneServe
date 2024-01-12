/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
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



const Header = () => {
  return (
    <div>
      <nav style={headerStyle} className='navbar navbar-light bg-light'>
        <a style={brandStyle} className='navbar-brand'>
          Restaurant
        </a>
      </nav>
    </div>
  );
};

const mapStateToProps = (state) => ({
  count: state.orderreducer.length,
});

export default connect(mapStateToProps)(Header);
