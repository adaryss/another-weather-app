import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
	html {
		padding: 0;
		margin: 0;
		font-size: 62.5%;
	}

	body {
		font-family: 'DM Sans', sans-serif;
		line-height: 2rem;
		font-size: 1.6rem;
		padding: 0;
		margin: 0;
		color: #000000;
		overflow-x: hidden;
	}

	a {
		color: inherit;
		text-decoration: none;
	}

	* {
		box-sizing: border-box;
		font: inherit;
		color: inherit;
	}
`;