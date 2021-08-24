import React, { FC } from 'react';
import { InputWrapper, SearchInput } from './SearchLocation.styled';

export const SearchLocation: FC = () => {
	return (
		<InputWrapper>
			<SearchInput id="location" type="text" name="location" placeholder="Search for city..." />
		</InputWrapper>
	);
};