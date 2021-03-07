import styled from 'styled-components';

export const Wrapper = styled.div`
	width: 100%;
	height: 100%;
	min-height: 100vh;
	background: linear-gradient(180deg, rgba(28, 153, 223, 0.57) 2.08%, rgba(50, 181, 255, 0.1482) 81.77%);
	background-repeat: no-repeat;
	background-size: cover;
	padding: 0 2.4rem;
	animation: fadein 0.25s;

	@keyframes fadein {
		from { opacity: 0; }
		to { opacity: 1; }
	}
`;

export const InnerContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	max-width: 1216px;
	width: 100%;
	margin: 0 auto;
	height: 100%;
	padding: 12.4rem 0 16.4rem;
`;

export const ContentWrapper = styled.div`
	display: grid;
	grid-template-rows: 1fr 1fr;
	flex: 1;
`;

export const LocationComponents = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: center;
	flex-direction: column;
`;

export const H1 = styled.h1`
	margin: 0;
	font-size: 4.6rem;
	line-height: 1.2;
	color: #FFFFFF;
	text-align: center;
`;

export const LocationButton = styled.button`
	padding: 0 1.2rem;
	height: 4.8rem;
	border-radius: 8px;
	background: #007AFF;
	color: #FFFFFF;
	cursor: pointer;
	width: 100%;
	font-size: 1.6rem;
	line-height: 1.6rem;
	letter-spacing: 0.2px;
	transition: background 0.1s ease-in;

	/* Reset button */
	border: none;
	outline: none;
	text-decoration: none;
	appearance: none;

	&:hover {
		background: #007AFFE6;
	}
`;

export const OrText = styled.span`
	margin: 1.2rem 0;
	font-size: 1.4rem;
	color: #FFFFFF;
	text-align: center;
`;