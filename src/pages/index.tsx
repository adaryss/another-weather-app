import React, { FC } from 'react';
import { GetServerSideProps } from 'next'

import { CitiesWeatherProvider } from 'src/hooks/useCitiesWeatherContext';

import { ICitiesWeatherData } from 'src/types/weatherData';
import Home from 'src/components/Home';
import { cityWeatherFetcher } from 'src/utils/cityWeatherFetcher';

interface AppProps {
	readonly initialWeatherData: ICitiesWeatherData;
}

const App: FC<AppProps> = ({ initialWeatherData }) => (
	<CitiesWeatherProvider initialValue={{dataMetric: initialWeatherData.dataMetric, dataImperial: initialWeatherData.dataImperial}}>
		<Home initialWeatherData={initialWeatherData} />
	</CitiesWeatherProvider>
)

export const getServerSideProps: GetServerSideProps = async () => {
	const initialWeatherDataMetric = await cityWeatherFetcher('metric');
	const initialWeatherDataImperial = await cityWeatherFetcher('imperial');

	return {
		props: {
			initialWeatherData: {
				dataMetric: initialWeatherDataMetric,
				dataImperial: initialWeatherDataImperial,
			}
		}
	}
}

export default App;
