import React, { Component } from 'react';
// Documentation : https://www.npmjs.com/package/react-countdown-now
import Countdown from 'react-countdown-now';
import logo from './logo.svg';
import { LandingPageElement } from './style';

const YEAR = 2017;
const MONTH = 11;
const DAY = 6;

class App extends Component {
  render() {
    return (
      <LandingPageElement>
        <Countdown date={new Date(YEAR, MONTH, DAY)} />
      </LandingPageElement>
    );
  }
}

export default App;
