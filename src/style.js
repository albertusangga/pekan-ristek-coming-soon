import styled from 'styled-components';

export const LandingPageElement = styled.div`

	@keyframes fadeOpacity {
		0% { opacity: 0 }
		50% { opacity: 1 }
		100% { opacity: 0}
	}

	@keyframes fadeShadow {
		0% { text-shadow: none; }
		50% { text-shadow: 2px 2px #aaaaaa; blur-radius: 5rem; }
		100% { text-shadow: none; }	
	}

	width: 100%;
	height: 100vh;
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
		animation: fadeOpacity 6s infinite;
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
		font-size: 7rem;
		line-height: 6rem;
		letter-spacing: -0.7rem;
		animation: fadeShadow 6s infinite;
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
		margin: 0.5rem 0;
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

	.footerPattern {
		width: 100%;
		objectFit: cover;
	}

	@media screen and(max-width: 64em) {
		
	}
`;