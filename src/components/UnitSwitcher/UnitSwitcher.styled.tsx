import styled, { css } from 'styled-components';
import styledMap from 'styled-map';
import breakpoints from 'src/constants/breakpoints';
import { UNITS } from 'src/constants/units';
import { UnitSwitcherType } from './UnitSwitcher';

const activeBackground = styledMap('type', {
	'result': '#FD653C',
	'search': '#007AFF',
});

export const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	background: #FFFFFF;
	border-radius: 4px;
	position: absolute;
	top: 1.6rem;
	right: 1.6rem;

	@media (min-width: ${breakpoints.UP.SMALL}) {
		top: 2.4rem;
			right: 2.4rem;
	}
`;

export const Unit = styled.div< { active: boolean }>`
	font-size: 1.4rem;
	border-radius: 4px;
	padding: 0.4rem 0.8rem;
	cursor: ${({ active }) => active ? 'default' : 'pointer'};
	transition: background 0.1s ease-in;
	height: 3.2rem;
	width: 4rem;
	text-align: center;
	display: inline-flex;
	align-items: center;
	justify-content: center;

	/* stylelint-disable-next-line value-keyword-case */
	${({ active }) => active ? css`
		color: #FFFFFF;
		background: ${activeBackground};
	` : css`
		color: #797878;
		background: #FFFFFF;
	`}

	@media (min-width: ${breakpoints.UP.SMALL}) {
		height: 4rem;
		width: 4rem;
		font-size: 1.8rem;
	}
`;