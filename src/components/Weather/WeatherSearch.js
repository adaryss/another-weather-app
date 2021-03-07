import React from 'react';

import { SearchLocation } from 'src/components/SearchLocation/SearchLocation';
import { UnitSwitcher } from 'src/components/UnitSwitcher/UnitSwitcher';
import {
	Wrapper,
	InnerContainer,
	ContentWrapper,
	H1,
	LocationComponents,
	LocationButton,
	OrText,
} from './WeatherSearch.styled';

export const WeatherSearch = ({ isGeoAccessible, handleGeoClick, units, setUnits }) => (
	<Wrapper>
		<InnerContainer>
			<ContentWrapper>
				<H1>
					Another weather app
				</H1>
				<LocationComponents>
					{isGeoAccessible && (
						<>
							<LocationButton onClick={handleGeoClick}>
								Share your location
							</LocationButton>
							<OrText>Or</OrText>
						</>
					)}
					<SearchLocation />
				</LocationComponents>
			</ContentWrapper>
		</InnerContainer>
		<UnitSwitcher type="search" units={units} setUnits={setUnits} />
	</Wrapper>
);