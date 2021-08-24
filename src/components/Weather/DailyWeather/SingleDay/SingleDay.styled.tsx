import styled from "styled-components";
import breakpoints from 'src/constants/breakpoints';

export const Container = styled.div`
	padding: 0.8rem;
	margin: 1.2rem 0;
	border: 1px solid #FFFFFF;
	border-radius: 8px;

	&:last-child {
		margin-bottom: 0;
	}

	@media (min-width: ${breakpoints.UP.SMALL}) {
		margin: 1.2rem;
		padding: 1.6rem;
		display: grid;
		grid-template-columns: 18.8rem auto;
	}
`;

export const TemperatureCol = styled.div`
	padding: 0 0.8rem 1.6rem;
	display: flex;
	justify-content: center;
	align-items: center;

	@media (min-width: ${breakpoints.UP.SMALL}) {
		padding: 0 0.8rem;
		border-right: 1px solid #FFFFFF;
		flex-direction: column;
	}
`;

export const ContentCol = styled.div`
	padding: 0 0.8rem;
	display: flex;
	align-items: flex-start;
	justify-content: center;
	flex-direction: column;
`;

export const Temperature = styled.div`
	font-size: 4.8rem;
	line-height: 5.2rem;
	color: #FFFFFF;
	text-align: center;
`;

export const StyledImg = styled.img`
	max-width: 8rem;
	width: 100%;
	height: auto;
	position: relative;
	left: -4px;

	@media (min-width: ${breakpoints.UP.SMALL}) {
		margin: 0 auto;
	}
`;

export const Day = styled.div`
	color: #FFFFFF;
	font-size: 2rem;
	line-height: 2.4rem;
	text-align: center;
	position: relative;
	left: -4px;
`;

export const Date = styled(Day)`
	font-size: 1.6rem;
	line-height: 2rem;
`;

export const Description = styled.div`
	font-size: 2.8rem;
	line-height: 3.6rem;
	color: #FFFFFF;

	@media (max-width: ${breakpoints.DOWN.SMALL}) {
		width: 100%;
		text-align: center;
	}
`;


export const Location = styled.div`
	width: 100%;
	padding: 1.2rem;
	min-width: 17.6rem;
	background: rgba(254, 254, 255, 0.3);
	border-radius: 8px;
	color: #FFFFFF;
	margin-bottom: 0.8rem;

	@media (max-width: ${breakpoints.DOWN.SMALL}) {
		display: none;
	}
`;

export const MobileLocation = styled(Location)`
	@media (max-width: ${breakpoints.DOWN.SMALL}) {
		display: inline-block;
	}

	@media (min-width: ${breakpoints.UP.SMALL}) {
		display: none;
	}
`;

export const DetailInfo = styled.div`
	font-size: 1.6rem;
	line-height: 2rem;
	color: #FFFFFF;
	margin-top: 0.8rem;

	@media (max-width: ${breakpoints.DOWN.SMALL}) {
		text-align: center;
		width: 100%;
	}
`;