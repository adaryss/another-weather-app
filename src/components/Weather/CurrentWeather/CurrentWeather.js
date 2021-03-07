import React from 'react';

import { WeatherHeader } from './WeatherHeader/WeatherHeader';
import { WeatherContent } from './WeatherContent/WeatherContent';
import { HourlyWeather } from './HourlyWeather/HourlyWeather';

export const CurrentWeather = ({ weatherData, city }) => (
	<>
		<WeatherHeader weatherData={weatherData} city={city} />
		<WeatherContent weatherData={weatherData} />
		<HourlyWeather weatherData={weatherData} />
	</>
);

