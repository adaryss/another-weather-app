import React from 'react';

import { LoadingState } from 'src/components/Weather/LoadingState';
import { CurrentWeather } from 'src/components/Weather/CurrentWeather/CurrentWeather';
import { DailyWeather } from 'src/components/Weather/DailyWeather/DailyWeather';
import { UnitSwitcher } from 'src/components/UnitSwitcher/UnitSwitcher';
import { BackButton } from '../BackButton/BackButton';
import { Wrapper, WeatherWrapper } from './WeatherResult.styled';
import { LocationNameType, SetUnitType, UnitType } from 'src/types/app';
import { Weather } from 'src/types/weatherData';

interface WeatherResultProps {
	readonly locationName: LocationNameType;
	readonly resetSearchState: () => void;
	readonly weatherData: Weather;
	readonly units: UnitType;
	readonly setUnits: SetUnitType;
}

export const WeatherResult = ({ weatherData, locationName, resetSearchState, units, setUnits }) => {
	const showLoading = !weatherData || !locationName;
	return (
		<Wrapper>
			{showLoading ? (
				<LoadingState />
			) : (
				<WeatherWrapper>
					<BackButton handleOnClick={resetSearchState} />
					<CurrentWeather city={locationName} weatherData={weatherData} />
					<DailyWeather city={locationName} weatherData={weatherData} />
					<UnitSwitcher type="result" units={units} setUnits={setUnits} />
				</WeatherWrapper>
			)}
		</Wrapper>
	);
}
