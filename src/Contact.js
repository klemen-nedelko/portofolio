import React from 'react';
import emailjs from 'emailjs-com';
import './App.css';
import { Button } from 'react-bootstrap';


function Contact() {

  function sendEmail(e){
    e.preventDefault();
    emailjs.sendForm('service_obe3svs', 'template_k20tpkh', e.target, 'user_w4TKg6PgufJqVeAhSKPoz')
      .then((result) => {
          console.log(result.text);
          alert("Send was succesfuly")
      }, (error) => {
          console.log(error.text);
          alert("Something went wrong")
      }
      );
      e.target.reset();
  }

    return (
      <div className="fade-in-text">
      <div className="Contact">
        <form className="Contact-form" onSubmit={sendEmail}>
          <label>
            Name:
            <input type="text" name="name" placeholder="Ime" />
          </label>
          <label>
            Email:
            <input type="text" name="email" placeholder="name@example.com" />
          </label>
          <label>
            Subject:
            <input type="text" name="subject" placeholder="Zadeva..." />
          </label>
          <label>
            Message:
            <textarea type="message" name="message" placeholder="Tvoje vprašanje.." />
          </label>
            <input type="submit" className="button" value="Send" />
            <label>
              <p onSubmit="succesSend"></p>
              </label>
        </form>
        </div>
      </div>
    );
  }
  
  export default Contact;