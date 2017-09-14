import React, { Component } from 'react';
import styled from 'styled-components';
import Countdown from './Countdown';
import logo from './logo.svg';
import { LandingPageElement } from './style';

class App extends Component {
  render() {
    return (
      <LandingPageElement>
        <Countdown />
      </LandingPageElement>
    );
  }
}

export default App;
