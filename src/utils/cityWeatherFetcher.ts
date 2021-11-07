import { citiesCoords } from "src/constants/citiesCoords";
import { Weather } from "src/types/weatherData";

const appId = process.env.NEXT_PUBLIC_APP_ID;

export const cityWeatherFetcher = async (units = 'metric'): Promise<Weather[]> => {
	const resultArray = await Promise.all(citiesCoords.map(async city => {
		const cityUrl =
			`https://api.openweathermap.org/data/2.5/onecall?lat=${city.coords.lat}&lon=${city.coords.long}&units=${units}&exclude=minutely&appid=${appId}`;
		const res = await fetch(cityUrl);

		if (!res.ok) {
			const error = new Error('An error occurred while fetching the data.')

			const fullError = {
				error,
				info: await res.json(),
				status: res.status
			};

			throw fullError
		}
		return res.json()
	}));

	return resultArray;
}
