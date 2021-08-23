import React from 'react';
import './App.css';
import Progressbar from './Progres_bar';


function About() {
    return (
    <div className="About">
      <div className="fade-in-text">
      <p className="name-surname">KLEMEN NEDELKO</p>
      <p className="about-me">Spletni razvijalec. Usmerjen v razvoj in oblikovanje spletnih strani.<br/>
      </p>
        <p className="languages">
        <div className="Web">
          <strong>Razvoj spletnih aplikacij: </strong><br/>
          HTML
          <div class="progress">
            <div class="progress-bar">
          <Progressbar bgcolor="#45A29E" progress='100'  height={30} /><br/>
            </div>
          </div>
          <div class="progress">
            <div class="progress-bar">
          CSS
          <Progressbar bgcolor="#45A29E" progress='90'  height={30} /><br/>
          </div>
          </div>
          Javascript
          <div class="progress">
            <div class="progress-bar">
          <Progressbar bgcolor="#45A29E" progress='80'  height={30} /><br/>
          </div>
          </div>
            </div>
        <div className="Program">
          <strong>Programski jeziki: </strong><br/>
          Python
          <div class="progress">
            <div class="progress-bar">
          <Progressbar bgcolor="#45A29E" progress='90'  height={30} /><br/>
          </div>
          </div>
          C++
          <div class="progress">
            <div class="progress-bar">
          <Progressbar bgcolor="#45A29E" progress='75'  height={30} /><br/>
          </div>
          </div>
          Java
          <div class="progress">
            <div class="progress-bar">
          <Progressbar bgcolor="#45A29E" progress='70'  height={30} /><br/>
          </div>
          </div>
        </div>
      <div className="Web">
          <strong>Frameworki: </strong><br/>
          React
          <div class="progress">
            <div class="progress-bar">
          <Progressbar bgcolor="#45A29E" progress='80'  height={30} /><br/>
          </div>
          </div>
          Flask
          <div class="progress">
            <div class="progress-bar">
          <Progressbar bgcolor="#45A29E" progress='60'  height={30} /><br/>
          </div>
          </div>
      </div>
      </p>
      </div>
    </div>
    );
  }
  
  export default About;