import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Link,Route} from 'react-router-dom';

function Head(){
    return (
      <div className="App">
        <header className="App-header">
        <p><img src={logo} className="App-logo" alt="logo" />
          <Link to="/" className="name-to-home">KLEMEN NEDELKO</Link></p>
          <ul>
              <li><Link to="/" className="link">Domov</Link></li>
              <li><Link to="/About" className="link">O meni</Link></li>
              <li><Link to="/Projects" className="link">Projekti</Link></li>
              <li><Link to="/Contact" className="link">Kontakt</Link></li>
            </ul>
          </header>
    </div>
  );
}

export default Head;