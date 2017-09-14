import React, { Component } from 'react';
import styled from 'styled-components';
import Countdown from './Countdown';
import logo from './logo.svg';
import { LandingPageElement } from './style';

const CenteredCountdown = styled(Countdown)`
  justify-content: center;
`;

class App extends Component {
  render() {
    return (
      <LandingPageElement>
        <CenteredCountdown />
      </LandingPageElement>
    );
  }
}

export default App;
