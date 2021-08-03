import React from 'react';
import './App.css';
function Contact() {
    return (
      <div className="Contact">
        <form className="Contact-form">
          <label>
            Name:
            <input type="text" name="name" />
          </label>
          <label>
            Email:
            <input type="text" name="email" />
          </label>
          <label>
            Message:
            <input type="message" name="message" />
          </label>
            <input type="button" class="button" value="Send" />
        </form>
      </div>
    );
  }
  
  export default Contact;