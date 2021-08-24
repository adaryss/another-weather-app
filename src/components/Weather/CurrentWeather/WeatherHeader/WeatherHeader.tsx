import React, { FC } from 'react';
import { LocationNameType } from 'src/types/app';
import { Weather } from 'src/types/weatherData';

import { capitalizeFirstLetter } from 'src/utils/capitalizeFirstLetter';
import { Wrapper, DayDegrees, WeatherInfo, Inner, Description, Location } from './WeatherHeader.styled';

interface WeatherHeaderProps {
	readonly weatherData: Weather;
	readonly city: LocationNameType;
}

export const WeatherHeader: FC<WeatherHeaderProps> = ({ weatherData: { daily }, city }) => (
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
