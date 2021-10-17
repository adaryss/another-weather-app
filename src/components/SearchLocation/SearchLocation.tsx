import React, { FC } from 'react';
import { InputWrapper, SearchInput } from './SearchLocation.styled';

interface SearchLocationProps {
	readonly listIsHovered: boolean;
}

export const SearchLocation: FC<SearchLocationProps> = ({ listIsHovered }) => {
	return (
		<InputWrapper listIsHovered={listIsHovered}>
			<SearchInput id="location" type="text" name="location" placeholder="Search for city..." />
		</InputWrapper>
	);
};
