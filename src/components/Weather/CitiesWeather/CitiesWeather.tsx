import React, { FC } from 'react';
import { UnitType } from 'src/types/app';
import { ICitiesWeatherData, Weather } from 'src/types/weatherData';
import { getCitiesWeatherDataToMap } from 'src/utils/getCitiesWeatherDataToMap';
import { Temperature, Day as CityName, StyledImg } from '../DailyWeather/SingleDay/SingleDay.styled';
import { City, CitiesWrapper, Wrapper, CitiesH2 } from './CitiesWeather.styled';

interface CitiesWeatherProps {
	readonly citiesWeatherData: ICitiesWeatherData;
	readonly units: UnitType;
}

export const CitiesWeather: FC<CitiesWeatherProps> = ({ citiesWeatherData, units }) => {
	const metricDataToMap = getCitiesWeatherDataToMap(citiesWeatherData.dataMetric);
	const imperialDataToMap = getCitiesWeatherDataToMap(citiesWeatherData.dataImperial);
	const weatherDataByUnit = units === 'metric' ? metricDataToMap : imperialDataToMap;

	return (
		<Wrapper>
			<CitiesH2>
				Current weather in the world
			</CitiesH2>
			<CitiesWrapper>
				{weatherDataByUnit.map(({ current, id, cityName }) => (
					<City key={id}>
						<CityName color="#00000082">{cityName}</CityName>
						<StyledImg src={`http://openweathermap.org/img/wn/${current.weather[0].icon}@2x.png`} />
						<Temperature color="#1c99dfd6">{Math.round(current.temp)}°</Temperature>
					</City>
				))}
			</CitiesWrapper>
		</Wrapper>
	)
}