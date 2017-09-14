import React, { Component } from 'react';
import styled from 'styled-components';
import Countdown from 'react-countdown-now';

const YEAR = 2017;
const MONTH = 11;
const DAY = 6;

const CountdownContainer = styled.div`
  display: flex;
  align-items: center;
`;

const CountdownSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .value {
    font-size: 4rem;
  }
  .description {
    font-size: 1rem;
  }
`;

const toDoubleDigit = number => number < 10 ? `0${number}` : `${number}`;


const countdownRenderer = ({ days, hours, minutes, ...props }) => {
    return (
      <CountdownContainer {...props}>
        <CountdownSection>
          <div className="value">
            {`${toDoubleDigit(days)}:`}
          </div>
          <div className="description">DAYS</div>
        </CountdownSection>
        <CountdownSection>
          <div className="value">
              {`${toDoubleDigit(hours)}:`}
          </div>
          <div className="description">HOURS</div>
        </CountdownSection>
        <CountdownSection>
            <div className="value">
              {`${toDoubleDigit(minutes)}`}
            </div>
          <div className="description">MINUTES</div>
        </CountdownSection>
      </CountdownContainer>
    );
}

const CustomCountdown = props => 
    <Countdown
        date={new Date(YEAR, MONTH, DAY)}
        renderer={countdownRenderer}
        {...props}
    />;

export default CustomCountdown;
