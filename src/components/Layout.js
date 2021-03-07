import React from "react";
import styled from 'styled-components';
import Head from 'next/head'

import { GlobalStyles } from 'src/styles/GlobalStyles';

const PageWrapper = styled.div`
	height: 100%;
	width: 100%;
`;

const Layout = ({ children }) => (
	<>
		<Head>
			<title>Another weather app</title>
			<link href="/fonts/fontface.css" rel="stylesheet" />
			<link
				rel="apple-touch-icon"
				sizes="180x180"
				href="favicon/apple-touch-icon.png"
			/>
			<link
				rel="icon"
				type="image/png"
				sizes="32x32"
				href="favicon/favicon-32x32.png"
			/>
			<link
				rel="icon"
				type="image/png"
				sizes="16x16"
				href="favicon/favicon-16x16.png"
			/>
			<link rel="manifest" href="favicon/site.webmanifest" />
			{/* Mapy.cz API scripts */}
			<script type="text/javascript" src="https://api.mapy.cz/loader.js" />
			<script
				dangerouslySetInnerHTML={{
					__html: `
					Loader.lang = "en";
					Loader.load(null, {suggest: true });
					`,
				}}
			/>
		</Head>
		<PageWrapper>
			<main>
				{children}
			</main>
		</PageWrapper>

		<GlobalStyles />
	</>
);

export default Layout;
