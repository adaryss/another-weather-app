import React, { FC } from 'react';

import { WeatherHeader } from './WeatherHeader/WeatherHeader';
import { WeatherContent } from './WeatherContent/WeatherContent';
import { HourlyWeather } from './HourlyWeather/HourlyWeather';
import { Weather } from 'src/types/weatherData';
import { LocationNameType } from 'src/types/app';

interface CurrentWeatherData {
	readonly weatherData: Weather;
	readonly city: LocationNameType;
}

export const CurrentWeather: FC<CurrentWeatherData> = ({ weatherData, city }) => (
	<>
		<WeatherHeader weatherData={weatherData} city={city} />
		<WeatherContent weatherData={weatherData} />
		<HourlyWeather weatherData={weatherData} />
	</>
);

