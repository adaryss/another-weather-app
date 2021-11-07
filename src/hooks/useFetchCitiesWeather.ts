import useSWR from 'swr';
import { cityWeatherFetcher } from 'src/utils/cityWeatherFetcher';
import { ICitiesWeatherData } from 'src/types/weatherData';
import { useEffect } from 'react';
import { useCitiesWeather } from './useCitiesWeatherContext';

export const useFetchCitiesWeather = (initialData: ICitiesWeatherData) => {
	const [_, setCitiesWeather] = useCitiesWeather();
	const { data: dataMetric, error: errorMetric } = useSWR(
		'get-city-weather-data-metric',
		() => cityWeatherFetcher('metric'),
		{ initialData: initialData.dataMetric }
	);
	const { data: dataImperial, error: errorImperial } = useSWR(
		'get-city-weather-data-imperial',
		() => cityWeatherFetcher('imperial'),
		{ initialData: initialData.dataImperial }
	);

	errorMetric || errorImperial && console.log('Weather for cities failed', errorMetric || errorImperial);

	useEffect(() => {
		setCitiesWeather({
			dataMetric,
			dataImperial,
		});
	}, [dataMetric, dataImperial]);
};
