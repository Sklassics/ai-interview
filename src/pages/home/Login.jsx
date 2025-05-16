import React, { useState } from 'react'
// import login from '../../assets/login.jpg';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState(' ');
  const [password, setPassword] = useState(' ');
  const [error, setError] = useState(' ')
  const handleLogin = (e) =>{
    e.preventDefault();

    if(!email || !password)
    {
      setError('Both fields are required.')
      return;
    }
    if(email === 'admin@example.com' && password === 'admin123')
    {
      setError('');
      alert('Login Successful!');
    }
    else
    {
      setError('Invalid credentials. Please try again.');
    }
  };
  return (
    <>
    <div className="login-container">
      <div className="login-left-container">
        <form className="login-form" onSubmit={handleLogin}>
          <h2 className="login-title">
            Login
          </h2>
          {error && <p className='login-error'>{error}</p>}
          <div className="form-group">
            <label htmlFor='email'>Email:</label>
            <input id="email" type="email" value={email} onChange={(e) =>setEmail(e.target.value)}
            placeholder='Enter your email'
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">password:</label>
            <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            />
          </div>
          <button type="submit" className='login-button'>Login</button>
        </form>
      </div>
      {/* <div className="login-image">
        <img src={login} alt="login-botton" />
      </div> */}
      <div className="login-image-bg"></div>
    </div>
    </>
  )
}

export default Login
