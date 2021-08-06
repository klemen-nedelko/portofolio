import React from 'react';
import linkedin from './img/linkedin.png'
import github from './img/github.png'
import './App.css';

function Footer(){
    return (
      <div className="Footer">
        <div className="footer-left-side">
          left side
          </div>
          <div className="copyright">
          Copyright &copy; <script>document.write(new Date().getFullYear())</script> Klemen Nedelko All Rights Reserved
          </div>
          <div className="footer-right-side">
            <img src={linkedin} className="social" alt="social"/>
            <img src={github} className="social" alt="social"/>
          </div>
    </div>
  );
}

export default Footer;