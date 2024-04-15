import React, { useState } from 'react'
import "./talkToUs.css"

function TalkTous() {

    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    
    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };
    
    const handleMessageChange = (event) => {
        setMessage(event.target.value);
    };
    
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Email:', email);
        console.log('Message:', message);
    };


  return (
    <div className='talk-to-us-container'>
      <div className="talk-left">
        <h3>Start your adventure</h3>
        <p>We can’t wait to see where it takes us.</p>
        <p>Leave your details here and one of our team will reach out.</p>
        <a href="mailto:business.development@kiska.com">business.development@kiska.com</a>

      </div>
      <div className="talk-right">
    <form onSubmit={handleSubmit} className="form-style">
        <label>
            Email*
        </label>
        <input
            type="email"
            className="input-style"
            value={email}
            onChange={handleEmailChange}
            required
        />
        <label>
            Message
        </label>
        <textarea
            className="textarea-style"
            value={message}
            onChange={handleMessageChange}
        />
        
        <div className="agree-submit">
            <label className="checkbox-style">
                <input type='checkbox' className='real-checkbox'></input>
                <span className="custom-checkbox"></span>
                I agree to KISKA's <span className="privacy-policy"> privacy policy</span>
            </label>
            <button type="submit" className="submit-button">Send now</button>
        </div>
    </form>
</div>

    </div>
  )
}

export default TalkTous
