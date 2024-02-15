import React, { useState } from 'react';
import './log-sup.css'; 

const Sign_up = () => {
  const [data, setData] = useState({
    Username: '',
    email: '',
    password: '',
    ConformPassword: '',
    phoneNumber: '',
    address: ''
  });
  const [errors, setErrors] = useState({});

  const { Username, email, password, ConformPassword, phoneNumber, address } = data;

  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
    // Clear validation error for the field being modified
    setErrors({ ...errors, [e.target.name]: '' });
  };

  const submitHandler = (e) => {
    e.preventDefault();

    // Basic form validation
    const newErrors = {};
    if (!Username.trim() || !email.trim() || !password.trim() || !ConformPassword.trim() || !phoneNumber.trim() || !address.trim()) {
      newErrors.allFields = 'All fields are required';
    }

    // Email format validation
    if (!isValidEmail(email)) {
      newErrors.email = 'Invalid email format';
    }

    // Password strength validation
    if (!isValidPassword(password)) {
      newErrors.password = 'Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, and one digit';
    }

    // Check if passwords match
    if (password !== ConformPassword) {
      newErrors.ConformPassword = 'Passwords do not match';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // If all validations pass, you can proceed with form submission 
    console.log('Form submitted:', data);

    // Reset form fields after successful submission
    setData({
      Username: '',
      email: '',
      password: '',
      ConformPassword: '',
      phoneNumber: '',
      address: ''
    });
  };

  const isValidEmail = (email) => {
    return email.includes('@') && email.includes('.');
  };

  const isValidPassword = (password) => {
    return password.length >= 8 && /[a-z]/.test(password) && /[A-Z]/.test(password) && /\d/.test(password);
  };

  return (
    <div className='body'>
      <div className='container'>
        <div className='header'>
          <h2>Register Here</h2>
        </div>
        <form action='' className='form' id='form' onSubmit={submitHandler}>
          {errors.allFields && <div className="error">{errors.allFields}</div>}
          <div className='field'>
            <label>Username</label>
            <input type='text' placeholder='Username' name='Username' value={Username} onChange={changeHandler} id='uname' />
          </div>
          {errors.Username && <div className="error">{errors.Username}</div>}

          <div className='field'>
            <label>E-mail</label>
            <input type='email' placeholder='abcdefg@com' name='email' value={email} onChange={changeHandler} id='email' />
          </div>
          {errors.email && <div className="error">{errors.email}</div>}

          <div className='field'>
            <label>Password</label>
            <input type='password' placeholder='password'  name='password'  value={password}  onChange={changeHandler}  id='password' /> 
          </div>
          {errors.password && <div className="error">{errors.password}</div>}

          <div className='field'>
            <label>Confirm Password</label>
            <input type='password' placeholder='Confirm-password' name='ConformPassword' value={ConformPassword} onChange={changeHandler} id='confirmPassword'/>
          </div>
          {errors.ConformPassword && <div className="error">{errors.ConformPassword}</div>}

          <div className='field'>
            <label>Phone Number</label>
            <input type='text' placeholder='Phone Number' name='phoneNumber' value={phoneNumber} onChange={changeHandler} id='phoneNumber'/>
          </div>

          <div className='field'>
            <label>Address</label>
            <textarea placeholder='Address' name='address' value={address} onChange={changeHandler} id='address'></textarea>
          </div>

          <div className='field'>
            <input type='checkbox' id='tc' className='terms' />
            <label htmlFor='tc'>I Agree To Terms And Conditions</label>
          </div>

          <input type='submit' className='button' name='submit' />
        </form>
      </div>
    </div>
  );
};

export default Sign_up;
