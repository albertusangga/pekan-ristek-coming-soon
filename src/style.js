import styled from 'styled-components';

export const LandingPageElement = styled.div`

  @keyframes fadeOpacity {
    0% { opacity: 0 }
    50% { opacity: 1 }
    100% { opacity: 0}
  }

  @keyframes fadeShadow {
    0% { text-shadow: none; }
    20% { text-shadow: 3px 3px #aaaaaa; }
    80% { text-shadow: 3px 3px #aaaaaa; }
    100% { text-shadow: none; } 
  }

  max-width: 100%;
  max-height: 100vh;
  overflow-y: hidden;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  color: #FAFAFA;
  background: linear-gradient(-20deg, #616161 0%, #9bc5c3 100%);

  .overlay {
    width: 100%;
    height: 100vh;
    background-image: linear-gradient(120deg, #f6d365 0%, #fda085 100%);
    position: absolute;
    z-index: 0;
    animation: fadeOpacity 10s infinite;
  }

  .container {
    width: 100%;
    height: 100vh;
    margin: 1rem 0 0 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    z-index: 1;
  }

  .squares {
    margin: 0 0 1rem 0;
  }

  .soon {
    font-family: Anurati-Regular;
    font-size: 5.5rem;
    line-height: 6rem;
    letter-spacing: -0.7rem;
    text-align: center;
    animation: fadeShadow 10s infinite;
  }

  .ready {
    font-family:'Jaapokki-Regular';
    font-size: 1.5rem;
    letter-spacing: 1.5rem;
  }

  .divider {
    width: 30rem;
    height: 0.05rem;
    background: #FAFAFA;
    margin: 0.25rem 0;
  }

  .logoContainer {
    width: 30rem;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;

    .pekanRistek {
      font-family: 'Vermin Vibes 4 Helium';
      font-size: 2rem;
    }

    .logoRistek {
      height: 5rem;

    }

  }

  .logoSponsorContainer {
    width: 100%;
    display: flex;
    height: 3.5rem;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  .logoTraveloka {
    height: 3rem;
    margin: 0.1rem;
  }

  .logoDewaweb {
    height: 3rem;
    margin: 0.1rem;
  }

  .footerPattern {
    width: 100%;
    objectFit: cover;
  }

  @media screen and (max-width: 40em) {

    .container {
      margin: 0.5rem;
      justify-content: space-around;
    }

    .squares {
      margin: 0 0 0.5rem 0;
    }

    .soon {
      font-size: 4rem;
      letter-spacing: -0.3rem;
      line-height: 3rem;
    }

    .ready {
      font-size: 1rem;
      letter-spacing: 0.8rem;
    }

    .divider {
      max-width: 15rem;
      margin: 0;
    }

    .logoContainer {
      width: 100%;
      padding: 0 2rem;

      .pekanRistek{
        font-size: 1rem;
      }

      .logoRistek {
        height: 3rem;
      }
    }

  .logoTraveloka {
    height: 2rem;
    margin: 0.1rem;
  }

  .logoDewaweb {
    height: 2rem;
    margin: 0.1rem;
  }

    .footerPattern {
      display: none;
    }
  }
`;