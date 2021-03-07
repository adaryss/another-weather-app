import React from 'react';

import { capitalizeFirstLetter } from 'src/utils/capitalizeFirstLetter';
import { Wrapper, DayDegrees, WeatherInfo, Inner, Description, Location } from './WeatherHeader.styled';

export const WeatherHeader = ({ weatherData: { daily, timezone_offset }, city }) => (
	<Wrapper>
		<DayDegrees>
			{Math.round(daily[0].temp.day)}°
		</DayDegrees>
		<WeatherInfo>
			<Inner>
				<Description>
					{capitalizeFirstLetter(daily[0].weather[0].description)}
				</Description>
				<Location>
					{city}
				</Location>
			</Inner>
		</WeatherInfo>
	</Wrapper>
);
