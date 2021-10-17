import React, { FC } from 'react';

import { WeatherResult } from 'src/components/Weather/WeatherResult/WeatherResult';
import { LocationNameType, SetUnitType, ShowResultsType, UnitType } from 'src/types/app';
import { Weather as WeatherData } from 'src/types/weatherData';
import { WeatherSearch } from './WeatherSearch';

interface WeatherProps {
	readonly isGeoAccessible: boolean;
	readonly locationName: LocationNameType;
	readonly handleGeoClick: () => void;
	readonly resetSearchState: () => void;
	readonly weatherData: WeatherData;
	readonly units: UnitType;
	readonly setUnits: SetUnitType;
	readonly showResults: ShowResultsType;
	readonly listIsHovered: boolean;
}

export const Weather: FC<WeatherProps> = ({
	isGeoAccessible,
	locationName,
	handleGeoClick,
	resetSearchState,
	weatherData,
	units,
	setUnits,
	showResults,
	listIsHovered,
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
				listIsHovered={listIsHovered}
			/>
		)}
	</>
);