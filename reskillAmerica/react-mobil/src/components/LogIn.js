import React from 'react';
import './login.css';

const LogIn = () => {
  return (
    <div className='container'>
      <div className='header-container'>
        <h2>Learn to code by Watching others</h2>
        <p>
          See how experienced developers solve problems in real-time watching
          scripted tutorials is great,but understanding how developers think is
          invaluable
        </p>
      </div>
      <div className='textarea'>Try it free 7 days then $20/mo. thereafter</div>
      <div className='form-container'>
        <form className='form'>
          <input className='input-field' type='text' placeholder='First Name' />
          <input className='input-field' type='text' placeholder='Last Name' />
          <input
            className='input-field'
            type='email'
            placeholder='Email Address'
          />
          <input
            className='input-field'
            type='password'
            placeholder='Password'
          />
          <button>CLAIM YOUR FREE TRIAL</button>
          <p>
            By clicking the button, you are agreeing to out{' '}
            <a>Terms and services</a>
          </p>
        </form>
      </div>
    </div>
  );
};
export default LogIn;
