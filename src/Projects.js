import React from 'react';
import './App.css';
import moviez from './img/img_logos/moviez_logo.png';
import quiz from './img/img_logos/logo_quiz.png';
import restfulapi from './img/img_logos/restfulapi-logo.png';
import napoved from './img/img_logos/napoved-delnic.png';


function Projects() {
    return (
      <div className="fade-in-text">
      <div className="Projects">
        <p className="finish-projects">
          <p className="title">Dokončani projekti</p>
          <div className="project">
          <a href="https://github.com/klemen-nedelko/Quiz-App"><img src={quiz}alt='logo-quizapp'/></a>
                <p><strong>Quiz App</strong>
                  <br/>
                  <br/>
                    Preprosta kviz aplikacija, izdelana s pomočjo PyQt5. Vprašanja in odgovore jemlje s pomočjo API-ja, s spletne strani opendtb.
                </p>
          </div>
          <div className="project">
          <a href="https://github.com/klemen-nedelko/Python-Flask-RestplusAPI"><img src={restfulapi} alt='logo-restfulapi'/></a>
                <p><strong>Predvidevanje cene delnic</strong>
                  <br/>
                  <br/>
                    Lasten API s pomočjo knjižnice Restplus. Izdelano v Flask-u. Zapisan primer shop API-ja. 
                </p>
          </div>
          <div className="project">
          <a href="https://github.com/klemen-nedelko/Stock-prediction"><img src={napoved}alt='logo-napove'/></a>
                <p><strong>Predvidevanje cene delnic</strong>
                  <br/>
                  <br/>
                    S pomočjo umetne inteligence napovedati ceno delnice za nasljednji dan, dneve. 
                </p>
          </div>
      </p>
      <p className="title">Odprti projekti / nedokončani</p>
        <p className="finish-projects"> 
          <img src={moviez}alt='logo-moviez'/> 
            <p><strong>MOVIEZ</strong>
            <br/>
            <br/>
            Moviez : mobilna aplikacija, ki s pomočjo všečkanja filmov in serij, izbereš pravo serijo s prijatleji ali partnerjem za večer.
          </p>
        </p>
      </div>
      </div>
    );
  }
  
  export default Projects;