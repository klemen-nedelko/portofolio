import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function Head(){
    return (
      <div className="App">
        <header className="App-header">
        <p><img src={logo} className="App-logo" alt="logo" />
          <Link to="/" className="name-to-home">KLEMEN NEDELKO</Link></p>
          <ul>
              <li><Link to="/" className="link">HOME</Link></li>
              <li><Link to="/About" className="link">ABOUT</Link></li>
              <li><Link to="/Projects" className="link">PROJECTS</Link></li>
              <li><Link to="/Contact" className="link">CONTACT</Link></li>
            </ul>
          </header>
    </div>
  );
}

export default Head;