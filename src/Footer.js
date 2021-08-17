import React from 'react';
import linkedin from './img/linkedin.png'
import github from './img/github.png'
import mail from './img/mail.png'
import './App.css';


const date = new Date().getFullYear();

function Footer(){
    return (
      <div className="Footer">
          <div className="copyright">
          Copyright &copy; {date} Klemen Nedelko All Rights Reserved
          </div>
          <div className="footer-right-side">
            <a href="https://www.linkedin.com/in/klemen-nedelko/"><img src={linkedin} className="social" alt="social"/>linkedin</a>
            <a href="https://github.com/klemen-nedelko"><img src={github} className="social" alt="social"/>GitHub</a>
            <a href="https://github.com/klemen-nedelko"><img src={mail} className="social" alt="social"/>Email</a>

          </div>
    </div>
  );
}

export default Footer;