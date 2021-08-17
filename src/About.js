import React from 'react';
import './App.css';


function About() {

    return (
    <div className="About">
      <div className="fade-in-text">
      <p className="name-surname">KLEMEN NEDELKO</p>
      <p className="about-me">Spletni razvijalec. Usmerjen v razvoj in oblikovanje spletnih strani.<br/>
      </p>
        <p className="languages">
          <div className="Program">
          <strong>Programski jeziki: </strong>
          C++<br/>
          Python<br/>
          Java<br/>
          </div>
          <div className="Web">
          <strong>Razvoj spletnih aplikacij: </strong><br/>
          HTML<br/>
          CSS<br/>
          Javascript<br/>
          </div>
          <div className="Frameworks">
          <strong>Frameworki: </strong><br/>
          Flask<br/>
          React<br/>
          </div>
      </p>
      </div>
    </div>
    );
  }
  
  export default About;