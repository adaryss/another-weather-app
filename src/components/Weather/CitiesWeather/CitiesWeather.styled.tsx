import styled from 'styled-components';

export const Wrapper = styled.div`
	margin: 0 auto;
	max-width: 768px;
	text-align: center;
`;

export const CitiesWrapper = styled.div`
	display: grid;
	align-items: center;
	justify-content: center;
	grid-template-columns: repeat(2, 1fr);
	grid-gap: 0.8rem;

	@media (min-width: 500px) {
		grid-template-columns: repeat(3, 1fr);
	}

	@media (min-width: 768px) {
		grid-template-columns: repeat(6, 1fr);
	}
`;

export const CitiesH2 = styled.h2`
	margin: 0 0 3.2rem;
	font-size: 3.2rem;
	line-height: 4.4rem;
	color: #1c99dfd6;
`;

export const City = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-bottom: 2.4rem;
`;