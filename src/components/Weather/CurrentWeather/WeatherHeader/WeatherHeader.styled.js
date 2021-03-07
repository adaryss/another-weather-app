import styled from 'styled-components';

export const Wrapper = styled.div`
	margin: 0 auto;
	width: auto;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const DayDegrees = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	min-height: 7.6rem;
	font-size: 6.4rem;
	line-height: 7.6rem;
	color: #FFFFFF;
`;

export const WeatherInfo = styled.div`
	border-left: 1px solid #FFFFFF;
	margin-left: 0.8rem;
	padding-left: 0.8rem;
	display: flex;
	align-items: flex-start;
	justify-content: center;
	flex-direction: column;
`;

export const Inner = styled.div`
	padding: 0.4rem;
`;

export const Description = styled.div`
	font-size: 3.6rem;
	line-height: 4.2rem;
	color: #FFFFFF;
	margin-bottom: 0.4rem;
`;

export const Location = styled.div`
	padding: 1.2rem;
	min-width: 17.6rem;
	background: rgba(254, 254, 255, 0.3);
	border-radius: 8px;
	color: #FFFFFF;
`;