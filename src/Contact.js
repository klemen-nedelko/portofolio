import React from 'react';
import emailjs from 'emailjs-com';
import './App.css';
function Contact() {

  function sendEmail(e){
    e.preventDefault();
    emailjs.sendForm('service_obe3svs', 'template_k20tpkh', e.target, 'user_w4TKg6PgufJqVeAhSKPoz')
      .then((result) => {
          console.log(result.text);
          alert("Message send successfully")
      }, (error) => {
          console.log(error.text);
          alert("Something went wrong")
      }
      );
      e.target.reset();
  }

    return (
      <div className="Contact">
        <form className="Contact-form" onSubmit={sendEmail}>
          <label>
            Name:
            <input type="text" name="name" placeholder="Name" />
          </label>
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
            <input type="submit" className="button" value="Send" />
        </form>
      </div>
    );
  }
  
  export default Contact;