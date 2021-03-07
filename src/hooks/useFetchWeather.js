import useSWR from 'swr';
import { fetcher } from 'src/utils/fetcher';

export const useFetchWeather = ({ lat, long }, units) => {
	const shouldFetch = lat !== '' && long !== '';
	const appId = process.env.NEXT_PUBLIC_APP_ID;
	const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&units=${units}&exclude=minutely&appid=${appId}`;

	const { data, error } = useSWR(shouldFetch ? url : null, fetcher);

	return {
		data,
		error,
	}
};