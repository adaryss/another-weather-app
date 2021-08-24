import React, { FC } from 'react';

import { SearchLocation } from 'src/components/SearchLocation/SearchLocation';
import { UnitSwitcher } from 'src/components/UnitSwitcher/UnitSwitcher';
import { SetUnitType, UnitType } from 'src/types/app';
import {
	Wrapper,
	InnerContainer,
	ContentWrapper,
	H1,
	LocationComponents,
	LocationButton,
	OrText,
} from './WeatherSearch.styled';

interface WeatherSearchProps {
	readonly isGeoAccessible: boolean;
	readonly handleGeoClick: () => void;
	readonly units: UnitType;
	readonly setUnits: SetUnitType;
}

export const WeatherSearch: FC<WeatherSearchProps> = ({ isGeoAccessible, handleGeoClick, units, setUnits }) => (
	<Wrapper>
		<InnerContainer>
			<ContentWrapper>
				<H1>
					Another weather app
				</H1>
				<LocationComponents>

					<LocationButton onClick={handleGeoClick} disabled={!isGeoAccessible}>
						Share your location
					</LocationButton>
					<OrText>Or</OrText>

					<SearchLocation />
				</LocationComponents>
			</ContentWrapper>
		</InnerContainer>
		<UnitSwitcher type="search" units={units} setUnits={setUnits} />
	</Wrapper>
);