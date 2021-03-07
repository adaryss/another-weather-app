import styled from 'styled-components';
import breakpoints from 'src/constants/breakpoints';

export const Text = styled.span`
	font-size: 1.8rem;
	line-height: 2.1rem;
	color: #FFFFFF;
`;

export const Wrapper = styled.div`
	display: inline-flex;
	justify-content: center;
	align-items: center;
	position: absolute;
	top: 0;
	left: 0;
	margin: 2.4rem;
	cursor: pointer;

	&:hover {
		${Text} {
			color: lightgray;
		}

		svg path {
			stroke: lightgray;
		}
	}

	@media (max-width: ${breakpoints.DOWN.SMALL}) {
		margin: 1.6rem;
	}
`;