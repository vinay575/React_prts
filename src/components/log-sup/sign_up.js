import React from 'react';
import './sign_up.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Sign_up=() => {
  
return (
<>  
    <div className='container'>
            <div className='header'>
                <h2>Register Here</h2>
            </div>
        <form action='.' className='form' id='form'>
            <div className='field'>
                <label>Username</label>
                <input type='text' placeholder='Username'  id='uname'/>
                <span class="material-symbols-outlined success">check_circle</span>
                <span class="material-symbols-outlined  error">error</span>
                <small>Error</small>
            </div>
            <div className='field'>
               <label>E-mail</label>
               <input type='email' placeholder='abcdefg@gmail.com' id='email'/>
               <span class="material-symbols-outlined success">check_circle</span>
               <span class="material-symbols-outlined  error">error</span>
               <small>Error</small>
            </div>

            <div className='field'>
               <label>Password</label>
               <input type='password' placeholder='password' id='password'/>
               <span class="material-symbols-outlined success">check_circle</span>
               <span class="material-symbols-outlined  error">error</span>
               <small>Error</small>
            </div>

            <div className='field'>
               <label>Conform-Password</label>
               <input type='password' placeholder='password' id='password'/>
               <span class="material-symbols-outlined success">check_circle</span>
               <span class="material-symbols-outlined  error">error</span>
               <small>Error</small>
            </div>

            <div className='field'>
               <input type='checkbox' id='tc' className='terms'/>
               <label>I Agree To Terms And Conditions</label>
               <small>Error</small>
           </div>
           <input type='submit' className='button'/>

        </form>
    </div>     
</>
)}

export default Sign_up;