import React from 'react';
import { getDay, getDate, getTime } from 'src/utils/formatDate';
import { Wrapper, StyledImg, Date, MoreInfo } from './WeatherContent.styled';

export const WeatherContent = ({ weatherData: { daily, timezone_offset } }) => {
	const today = daily[0];

	return (
		<Wrapper>
			<StyledImg src={`http://openweathermap.org/img/wn/${today.weather[0].icon}@2x.png`} />
			<Date>
				{getDay(today.dt, "true", timezone_offset)} <br />
				{getDate(today.dt, timezone_offset)}
			</Date>
			<MoreInfo>
				Real feel: {Math.round(today.feels_like.day)}° <br />
				Night: {Math.round(today.temp.night)}° / Real feel: {Math.round(today.feels_like.night)}° <br />
				Sunrise: {getTime(today.sunrise, timezone_offset)} /
				Sunset: {getTime(today.sunset, timezone_offset)}
			</MoreInfo>
		</Wrapper>
	);
}
