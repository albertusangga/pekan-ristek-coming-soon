import React from 'react';
import styled from 'styled-components';
import Countdown from 'react-countdown-now';

const YEAR = 2017;
const MONTH = 10;
const DAY = 6;

const CountdownContainer = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: center;
`;

const CountdownSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .value {
    font-size: 5rem;
    font-family: 'High_School_USA_Serif';
  }

  .description {
    font-size: 1rem;
    font-family: 'Helvetica';
  }

  @media screen and (max-width: 64em) {
    .value {
      font-size: 2.5rem;
    }
    .description {
      font-size: 0.9rem;
    }
  }
`;

const toDoubleDigit = number => number < 10 ? `0${number}` : `${number}`;


const countdownRenderer = ({ days, hours, minutes, seconds, ...props }) => {
    return (
      <CountdownContainer {...props}>
        <CountdownSection>
          <div className="value">
            {`${toDoubleDigit(days)}`}
          </div>
          <div className="description">DAYS</div>
        </CountdownSection>
        <CountdownSection>
            <div className="value">:</div>
        </CountdownSection>
        <CountdownSection>
          <div className="value">
              {`${toDoubleDigit(hours)}`}
          </div>
          <div className="description">HOURS</div>
        </CountdownSection>
        <CountdownSection>
            <div className="value">:</div>
        </CountdownSection>
        <CountdownSection>
            <div className="value">
              {`${toDoubleDigit(minutes)}`}
            </div>
          <div className="description">MINUTES</div>
        </CountdownSection>
        <CountdownSection>
            <div className="value">:</div>
        </CountdownSection>
        <CountdownSection>
            <div className="value">
              {`${toDoubleDigit(seconds)}`}
            </div>
          <div className="description">SECONDS</div>
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
