import React, { FC, MouseEventHandler } from 'react';
import { BackIcon } from 'src/components/Icons/BackIcon';
import { Wrapper, Text } from './BackButton.styled';

interface BackButtonProps {
	readonly handleOnClick: MouseEventHandler<HTMLDivElement>;
}

export const BackButton: FC<BackButtonProps> = ({ handleOnClick }) => (
	<Wrapper onClick={handleOnClick}>
		<BackIcon />
		<Text>
			Back
		</Text>
	</Wrapper>
);