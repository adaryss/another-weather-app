import styled from 'styled-components';

export const InputWrapper = styled.div`
	position: relative;
	width: 100%;
	font-size: 1.6rem;
	line-height: 1.2rem;

	ul.smap-suggest {
		padding: 0;
		margin: 0;
		background: white;
		border: 2px solid #9C9C9C;
		border-radius: 4px;
		position: absolute;
		top: 100%;
		left: 0;
		width: 100%;
		list-style: none;

		li.item {
			padding: 0.8rem 1.2rem;
			border-bottom: 1px solid #9C9C9C;
			cursor: pointer;
			font-family: 'DM Sans', sans-serif;
			line-height: 2rem;
			font-size: 1.6rem;

			&:hover {
				background: lightgray;
			}
		}

		span.text {
			strong,
			em {
				display: block;
			}
		}
	}
`;

export const SearchInput = styled.input`
	width: 100%;
	padding: 0 1.2rem;
	font-size: 1.6rem;
	line-height: 1.6rem;
	height: 4.8rem;
	outline: none;
	border-radius: 8px;
	border: 2px solid #BABABA;
	transition: all 0.1s ease-in;

	&:hover {
		border-color: #9C9C9C;
	}

	&:focus {
		border: 2px solid #FF6200;
	}
`;