import React from 'react';
import './Forgot.css';

const Forgot = () => {
  return (
    <div className="forgot-password-container">
      <div className="forgot-password-card">
        <h2 className="forgot-password-title">Forgot Password?</h2>
        <p className="forgot-password-subtitle">
          Enter your email address and we'll send you a link to reset your password.
        </p>
        <form className="forgot-password-form">
          <input
            type="email"
            placeholder="Email"
            className="forgot-password-input"
            required
          />
          <button type="submit" className="forgot-password-button">
            Send Reset Link
          </button>
        </form>
      </div>
    </div>
  );
};

export default Forgot;