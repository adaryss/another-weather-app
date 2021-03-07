import styled from 'styled-components';
import breakpoints from 'src/constants/breakpoints';

export const Wrapper = styled.div`
	@media (min-width: ${breakpoints.UP.SMALL}) {
		margin: 0 auto;
		width: 90%;
	}
`;

export const DailyHeading = styled.h2`
	margin: 0;
	font-size: 3.6rem;
	line-height: 4.2rem;
	margin-bottom: 0.8rem;
	text-align: center;
	color: #FFFFFF;
`;