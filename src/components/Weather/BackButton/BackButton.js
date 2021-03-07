import React from 'react';
import { BackIcon } from 'src/components/Icons/BackIcon';
import { Wrapper, Text } from './BackButton.styled';

export const BackButton = ({ handleOnClick }) => (
	<Wrapper onClick={handleOnClick}>
		<BackIcon />
		<Text>
			Back
		</Text>
	</Wrapper>
);