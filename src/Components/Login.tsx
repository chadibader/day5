import React, { useState } from 'react';
import './Login.css';

const Login: React.FC = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [agreementChecked, setAgreementChecked] = useState(false);

  const handleSubmit: React.MouseEventHandler<HTMLButtonElement> = (event) => {
    event.preventDefault();
    if (email && password && password === confirmPassword && agreementChecked) {
      console.log('Registration successful!');
      console.log('First Name:', firstName);
      console.log('Last Name:', lastName);
      console.log('Email:', email);
    } else {
      console.error('Please fill in all fields, ensure passwords match, and accept the terms.');
    }
  };

  return (
    <div className="login-container">
      <div className="login-form">
      <h1>Create Your Account</h1>
      <h6>fill the form bellow to create an acount</h6>
      <div className="input-group">
            <label htmlFor="firstName">First Name</label>
            <input
                type="text"
                id="firstName"
                className="login-input"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
            />
        </div>

        <div className="input-group">
            <label htmlFor="lastName">Last Name</label>
            <input
                type="text"
                id="lastName"
                className="login-input"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
            />
        </div>

        <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
                type="email"
                id="email"
                className="login-input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />
        </div>
       
        <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
                type="password"
                id="password"
                className="login-input"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
            />
        </div>
           <div className="input-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
                type="password"
                id="confirmPassword"
                className="login-input"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
            />
        </div>
        <h6>we want you exactly to now how our service work and why we need your details<br/>
            please confirm that you have read, understood and accept the terms and conditions</h6>
        <label htmlFor="agreement" id="agreement-label">
        <input
          type="checkbox"
          className="login-checkbox"
          checked={agreementChecked}
          onChange={() => setAgreementChecked(!agreementChecked)}
        />
            
            I have read, understood and accept the terms and conditions</label>
        
        <button
          type="submit"
          className={`login-button ${agreementChecked ? 'active' : ''}`}
          onClick={handleSubmit}
          disabled={!agreementChecked}
        >
          Register
        </button>
      </div>
    </div>
  );
};

export default Login;
