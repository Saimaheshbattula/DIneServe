import React, { useState } from 'react';
import LoginHeader from '../Container/LoginHeader';
import { useNavigate } from 'react-router-dom';

const CashierLogin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const containerStyle = {
    maxWidth: '400px',
    margin: '0 auto',
    padding: '40px',
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
    animation: 'fadeIn 0.5s ease',
  };

  const inputStyle = {
    width: '100%',
    padding: '10px',
    fontSize: '16px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    marginBottom: '20px',
  };

  const buttonStyle = {
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    padding: '12px 24px',
    fontSize: '18px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  };

  const errorMessageStyle = {
    color: 'red',
    marginBottom: '20px',
  };

  const handleLogin = (e) => {
    e.preventDefault();

    if (email === 'cash@gmail.com' && password === 'cash') {
        navigate('/Counter')
      } else {
        setError('Invalid email or password. Please try again.');
      }
  };

  return (
    <div>
        <LoginHeader />
    <div style={containerStyle}>
      <h2>Cashier Login</h2>
      {error && <div style={errorMessageStyle}>{error}</div>}
      <form onSubmit={handleLogin}>
        <input
          type="email"
          style={inputStyle}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        />
        <br />
        <input
          type="password"
          style={inputStyle}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
        />
        <br />
        <button type="submit" style={buttonStyle}>
          Login
        </button>
      </form>
    </div>
    </div>
  );
};

export default CashierLogin;
