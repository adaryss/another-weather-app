import { citiesCoords } from "src/constants/citiesCoords"
import { Weather } from "src/types/weatherData";

interface ICityWeatherToMap extends Weather {
	readonly cityName: 'string' | undefined;
	readonly id: number;
}

export const getCitiesWeatherDataToMap = (fetchedData: Weather[]): ICityWeatherToMap[] => {
	const dataToMap = [];

	fetchedData.forEach((cityWeather, index) => {
		const cityWithName = citiesCoords.find(city => city.coords.lat === cityWeather.lat && city.coords.long === cityWeather.lon);
		const cityWeatherWithName = {...cityWeather, id: index + 1, cityName: cityWithName.city};
		dataToMap.push(cityWeatherWithName);
	});

	return dataToMap;
}