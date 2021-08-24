import React, { FC } from 'react';
import { LocationNameType } from 'src/types/app';
import { DailyEntity } from 'src/types/weatherData';
import { capitalizeFirstLetter } from 'src/utils/capitalizeFirstLetter';
import { getDate, getDay, getTime } from 'src/utils/formatDate';
import {
	Container,
	TemperatureCol,
	ContentCol, Temperature,
	StyledImg,
	Day,
	Date,
	Description,
	Location,
	DetailInfo,
	MobileLocation
} from './SingleDay.styled';

interface SingleDayProps {
	readonly dayData: DailyEntity;
	readonly city: LocationNameType;
	readonly timezoneOffset: number;
}

const SingleDay: FC<SingleDayProps> = ({ dayData, city, timezoneOffset }) => {
	const {
		dt,
		temp: {
			day,
			night,
		},
		weather,
		feels_like: feelsLike,
		sunrise,
		sunset,
	} = dayData;

	const description = weather[0].description;

	return (
		<Container>
			<MobileLocation>{city}</MobileLocation>
			<TemperatureCol>
				<StyledImg src={`http://openweathermap.org/img/wn/${dayData.weather[0].icon}@2x.png`} />
				<div>
					<Temperature>{Math.round(day)}°</Temperature>
					<Day>{getDay(dt, 'false', timezoneOffset)}</Day>
					<Date>{getDate(dt, timezoneOffset)}</Date>
				</div>
			</TemperatureCol>
			<ContentCol>
				<Location>{city}</Location>
				<Description>{capitalizeFirstLetter(description)}</Description>
				<DetailInfo>
					Real feel: {Math.round(feelsLike.day)}° <br />
					Night: {Math.round(night)}° / Real feel: {Math.round(feelsLike.night)}° <br />
					Sunrise: {getTime(sunrise, timezoneOffset)} /
					Sunset: {getTime(sunset, timezoneOffset)}
				</DetailInfo>
			</ContentCol>
		</Container>

	);
};

export { SingleDay };