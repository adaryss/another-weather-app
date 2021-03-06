import React, { useState, useEffect, FC } from 'react';
import Layout from 'src/components/Layout';

import { useFetchWeather } from 'src/hooks/useFetchWeather';
import { useGetUserPosition } from 'src/hooks/useGetUserPosition';
import { useIPLocation } from 'src/hooks/useIPLocation';
import { handleLocationSuggest } from 'src/utils/handleLocationSuggest';
import { handleLocationFromCoords } from 'src/utils/handleLocationFromCoords';
import { Weather } from 'src/components/Weather/Weather';
import { ICoords, LocationNameType, ShowResultsType, UnitType } from 'src/types/app';
import { useFetchCitiesWeather } from 'src/hooks/useFetchCitiesWeather';
import { ICitiesWeatherData } from 'src/types/weatherData';

interface HomeProps {
	readonly initialWeatherData: ICitiesWeatherData;
}

const DEFAULT_COORDS = { long: '', lat: '' };

const Home: FC<HomeProps> = ({ initialWeatherData }) => {
	const [coords, setCoords] = useState<ICoords>(DEFAULT_COORDS);
	const [locationName, setLocationName] = useState<LocationNameType>(null);
	const [showResults, setShowResults] = useState<ShowResultsType>(false);
	const [units, setUnits] = useState<UnitType>('');
	const [listIsHovered, setListIsHovered] = useState<boolean>(false);
	const defaultUnit = useIPLocation();

	useFetchCitiesWeather(initialWeatherData);

	const {
		isGeoAccessible,
		handleGeoClick,
		error: positionError,
	} = useGetUserPosition(setCoords, setShowResults);
	const {
		data: weatherData,
		error: weatherError,
	} = useFetchWeather(coords, units);

	useEffect(() => {
		setUnits(defaultUnit);
	}, [defaultUnit]);

	const resetSearchState = () => {
		setCoords(DEFAULT_COORDS);
		setLocationName(null);
		setShowResults(false);
	}

	useEffect(() => {
		!locationName && handleLocationSuggest(setCoords, setShowResults, setListIsHovered);
	}, [handleLocationSuggest, locationName, coords]);

	// @ts-ignore mapy.cz API don't support TS
	const handleLocationGeocoder = (geocoder: any) => {
		const result = geocoder.getResults();
		const location = result.items.filter((item: any) => item.coords.x === result.coords.x);

		location[0] ? setLocationName(location[0].name) : setLocationName(result.label);
	}

	useEffect(() => {
		if (coords !== DEFAULT_COORDS) {
			handleLocationFromCoords(coords.long, coords.lat, handleLocationGeocoder);
		}
	}, [coords]);

	if (weatherError || positionError) {
		return (
			<Layout>
				<div>Something went wrong :(</div>
				<button onClick={() => location.reload()}>Reload page</button>
			</Layout>
		)
	}

	return (
		<Layout>
			<Weather
				locationName={locationName}
				isGeoAccessible={isGeoAccessible}
				handleGeoClick={handleGeoClick}
				weatherData={weatherData}
				resetSearchState={resetSearchState}
				units={units}
				setUnits={setUnits}
				showResults={showResults}
				listIsHovered={listIsHovered}
			/>
		</Layout>
	)
}

export default Home;
