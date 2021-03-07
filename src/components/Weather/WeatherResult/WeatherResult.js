import React from 'react';

import { LoadingState } from 'src/components/Weather/LoadingState';
import { CurrentWeather } from 'src/components/Weather/CurrentWeather/CurrentWeather';
import { DailyWeather } from 'src/components/Weather/DailyWeather/DailyWeather';
import { UnitSwitcher } from 'src/components/UnitSwitcher/UnitSwitcher';
import { BackButton } from '../BackButton/BackButton';
import { Wrapper, WeatherWrapper } from './WeatherResult.styled';

export const WeatherResult = ({ weatherData, locationName, resetSearchState, units, setUnits }) => {
	const showLoading = !weatherData || !locationName;
	return (
		<Wrapper>
			{showLoading ? (
				<LoadingState />
			) : (
				<WeatherWrapper showLoading={showLoading}>
					<BackButton handleOnClick={resetSearchState} />
					<CurrentWeather city={locationName} weatherData={weatherData} />
					<DailyWeather city={locationName} weatherData={weatherData} />
					<UnitSwitcher type="result" units={units} setUnits={setUnits} />
				</WeatherWrapper>
			)}
		</Wrapper>
	);
}
