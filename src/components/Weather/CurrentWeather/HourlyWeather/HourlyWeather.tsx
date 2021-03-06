import React, { FC } from 'react';

import { DailyCarousel } from '../DailyCarousel';
import { formatHour } from 'src/utils/formatDate';
import { Wrapper, SlideText, StyledImg } from './HourlyWeather.styled';
import { Weather } from 'src/types/weatherData';

interface HourlyWeatherProps {
	readonly weatherData: Weather;
}

export const HourlyWeather: FC<HourlyWeatherProps> = ({ weatherData: { hourly, timezone_offset } }) => {
	const slicedHourlyData = hourly.slice(0, 12);

	return (
		<DailyCarousel>
			{slicedHourlyData.map((hour, idx) => (
				<Wrapper key={hour.dt}>
					<SlideText>
						{idx === 0 ? (
							"Now"
						) : formatHour(hour.dt, timezone_offset)}
					</SlideText>
					<StyledImg src={`http://openweathermap.org/img/wn/${hour.weather[0].icon}@2x.png`} />
					<SlideText>{Math.round(hour.temp)}°</SlideText>
				</Wrapper>
			))}
		</DailyCarousel>
	);
};
