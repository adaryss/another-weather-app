import React from 'react';

import { WeatherResult } from 'src/components/Weather/WeatherResult/WeatherResult';
import { WeatherSearch } from './WeatherSearch';

export const Weather = ({
	isGeoAccessible,
	locationName,
	handleGeoClick,
	resetSearchState,
	weatherData,
	units,
	setUnits,
	showResults,
}) => (
	<>
		{showResults ? (
			<WeatherResult
				weatherData={weatherData}
				locationName={locationName}
				resetSearchState={resetSearchState}
				units={units}
				setUnits={setUnits}
			/>
		) : (
			<WeatherSearch
				isGeoAccessible={isGeoAccessible}
				handleGeoClick={handleGeoClick}
				units={units}
				setUnits={setUnits}
			/>
		)}
	</>
);