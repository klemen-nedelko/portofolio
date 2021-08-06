import React from 'react';
import './App.css';
function Contact() {
    return (
      <div className="Contact">
        <form className="Contact-form">
          <label>
            Email:
            <input type="text" name="email" placeholder="name@example.com" />
          </label>
          <label>
            Subject:
            <input type="text" name="subject" placeholder="Subject..." />
          </label>
          <label>
            Message:
            <textarea type="message" name="message" placeholder="Write something.." />
          </label>
            <input type="button" className="button" value="Send" />
        </form>
      </div>
    );
  }
  
  export default Contact;