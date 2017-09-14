import React, { Component } from 'react';
import styled from 'styled-components';
import Countdown from './Countdown';
import squares from './assets/squares.png';
import logoRistek from './assets/risteklogo.png';
import footerPattern from './assets/flags.png';
import { LandingPageElement } from './style';

class App extends Component {
  render() {
    return (
      <LandingPageElement>
      	<div className="overlay" />
	      <div className="container">
	      	<img src={squares} className="squares" />
	        <div className="soon">
	        	COMI NG
	        </div>
	        <div className="soon">
	        	SOON
	        </div>
	        <div className="divider" />
	        <div className="ready">
	        	BE READY IN
	        </div>
	        <Countdown />
	        <div className="divider" />
	        <div className="logoContainer">
	        	<div className="pekanRistek">
	        		Pekan Ristek
	        	</div>
	        	<img src={logoRistek} className="logoRistek" />
	        </div>
        	<img src={footerPattern} className="footerPattern" />
	       </div>
      </LandingPageElement>
    );
  }
}

export default App;
