import React, { useState } from 'react';
import './contact.css';

const YourComponent = () => {
  const [isMessageSent, setMessageSent] = useState(false);

  const handleSubmit = () => {
    // Add your logic for handling form submission here
    // For now, let's just set the message sent state to true
    setMessageSent(true);
  };

  return (
    <>
      <div className="gray-block"></div>
      
      <div id="tc" className="title-containe">
        <h1 id='h1'>Contact</h1>
      </div>

      <div id="c" className="containe">
        
        <div className="image-containe">
          <img src="http://res.cloudinary.com/oscartbeamish/image/upload/v1504172576/14bc155f03a9be4e10c0bd6d34067f6e_ng1urv.jpg" alt="Your Alt Text" />
        </div>

        <div className="text-containe">
         
          <input id='input' type="text" name="name" placeholder="Name" /><br/>
          
          <input  id='input' type="email" name="email" placeholder="Email" /><br/>
          
          <textarea type="text" name="message" placeholder="Message"/><br/>
          
          {/* message sent */}
          {isMessageSent && <div className="message">Message Sent</div>}
          
          <div className="button">
            <button id="submit" className='bto' type="submit" onClick={handleSubmit}>
              Send
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default YourComponent;
