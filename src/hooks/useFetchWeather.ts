import useSWR from 'swr';
import { fetcher } from 'src/utils/fetcher';
import { ICoords, UnitType } from 'src/types/app';
import { Weather } from 'src/types/weatherData';

interface IFetchWeather {
	readonly data?: Weather;
	readonly error?: any;
}

export const useFetchWeather = ({ lat, long }: ICoords, units: UnitType): IFetchWeather => {
	const shouldFetch = lat !== '' && long !== '';
	const appId = process.env.NEXT_PUBLIC_APP_ID;
	const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&units=${units}&exclude=minutely&appid=${appId}`;

	const { data, error } = useSWR(shouldFetch ? url : null, fetcher);

	return {
		data,
		error,
	}
};