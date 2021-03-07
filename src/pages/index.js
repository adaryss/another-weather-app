import React, { useState, useEffect } from 'react';
import Layout from 'src/components/Layout';

import { useFetchWeather } from 'src/hooks/useFetchWeather';
import { useGetUserPosition } from 'src/hooks/useGetUserPosition';
import { useIPLocation } from 'src/hooks/useIPLocation';
import { handleLocationSuggest } from 'src/utils/handleLocationSuggest';
import { handleLocationFromCoords } from 'src/utils/handleLocationFromCoords';
import { Weather } from 'src/components/Weather/Weather';

const DEFAULT_COORDS = { long: '', lat: '' };

const Home = () => {
	const [coords, setCoords] = useState(DEFAULT_COORDS);
	const [locationName, setLocationName] = useState(null);
	const [showResults, setShowResults] = useState(false);
	const [units, setUnits] = useState('');
	const defaultUnit = useIPLocation();

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
		!locationName && handleLocationSuggest(setCoords, setShowResults);
	}, [handleLocationSuggest, locationName, coords]);

	const handleLocationGeocoder = (geocoder) => {
		const result = geocoder.getResults();
		const location = result.items.filter(item => item.coords.x === result.coords.x);

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
			/>
		</Layout>
	)
}

export default Home;
