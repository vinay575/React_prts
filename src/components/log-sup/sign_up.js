import React, { useState } from 'react';
import './sign_up.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Sign_up = () => {
  const [data, setData] = useState({
    Username: '',
    email: '',
    password: '',
    ConformPassword: '',
  });

  const { Username, email, password, ConformPassword } = data;

  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(data);

    // Add your form validation and submission logic here

    // Reset form fields after submission
    setData({
      Username: '',
      email: '',
      password: '',
      ConformPassword: '',
    });
  };

  return (
    <div className='body'>
      <div className='container'>
        <div className='header'>
          <h2>Register Here</h2>
        </div>
        <form action='' className='form' id='form' onSubmit={submitHandler}>
          <div className='field'>
            <label>Username</label>
            <input
              type='text'
              placeholder='Username'
              name='Username'
              value={Username}
              onChange={changeHandler}
              id='uname'
            />
            <span className="material-symbols-outlined success">check_circle</span>
            <span className="material-symbols-outlined error">error</span>
            <small>Error</small>
          </div>

          <div className='field'>
            <label>E-mail</label>
            <input
              type='email'
              placeholder='abcdefg@com'
              name='email'
              value={email}
              onChange={changeHandler}
              id='email'
            />
            <span className="material-symbols-outlined success">check_circle</span>
            <span className="material-symbols-outlined error">error</span>
            <small>Error</small>
          </div>

          <div className='field'>
            <label>Password</label>
            <input
              type='password'
              placeholder='password'
              name='password'
              value={password}
              onChange={changeHandler}
              id='password'
            />
            <span className="material-symbols-outlined success">check_circle</span>
            <span className="material-symbols-outlined error">error</span>
            <small>Error</small>
          </div>

          <div className='field'>
            <label>Confirm Password</label>
            <input
              type='password'
              placeholder='Confirm-password'
              name='ConformPassword'
              value={ConformPassword}
              onChange={changeHandler}
              id='confirmPassword'
            />
            <span className="material-symbols-outlined success">check_circle</span>
            <span className="material-symbols-outlined error">error</span>
            <small>Error</small>
          </div>

          <div className='field'>
            <input type='checkbox' id='tc' className='terms' />
            <label htmlFor='tc'>I Agree To Terms And Conditions</label>
            <small>Error</small>
          </div>

          <input type='submit' className='button' name='submit' />
        </form>
      </div>
    </div>
  );
};

export default Sign_up;
