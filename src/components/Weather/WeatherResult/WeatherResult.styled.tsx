import styled from 'styled-components';

export const Wrapper = styled.div`
	background: linear-gradient(180deg, rgba(28, 153, 223, 0.65) 2.08%, rgba(50, 181, 255, 0.55) 81.77%);
	min-height: 100vh;
	padding: 0 1.6rem;
`;

export const WeatherWrapper = styled.div`
	margin: 0 auto;
	padding: 6.4rem 0 4rem;
	max-width: 76.8rem;
	animation: fadein 0.25s;

	@keyframes fadein {
		from { opacity: 0; }
		to { opacity: 1; }
	}
`;