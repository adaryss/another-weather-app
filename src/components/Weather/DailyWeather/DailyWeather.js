import React from 'react';
import { SingleDay } from './SingleDay/SingleDay';
import { Wrapper, DailyHeading } from './DailyWeather.styled';

const DailyWeather = ({ city, weatherData }) => {
	const { daily, timezone_offset } = weatherData;

	return (
		<Wrapper>
			<DailyHeading>Daily Forecast</DailyHeading>
			{daily.map((item, index) => index > 0 &&
				<SingleDay
					key={`single-day-${index}`}
					dayData={item}
					city={city}
					timezoneOffset={timezone_offset}
				/>)}
		</Wrapper>
	);
};

export { DailyWeather };