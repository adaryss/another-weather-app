import React, { FC } from 'react';
import { SingleDay } from './SingleDay/SingleDay';
import { Wrapper, DailyHeading } from './DailyWeather.styled';
import { LocationNameType } from 'src/types/app';
import { Weather } from 'src/types/weatherData';

interface DailyWeatherProps {
	readonly city: LocationNameType;
	readonly weatherData: Weather;
}

const DailyWeather: FC<DailyWeatherProps> = ({ city, weatherData }) => {
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