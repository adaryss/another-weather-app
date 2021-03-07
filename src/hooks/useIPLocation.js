import useSWR from 'swr';
import { fetcher } from 'src/utils/fetcher';
import { UNITS } from 'src/constants/units';

export const useIPLocation = () => {
	const url = 'http://ip-api.com/json/';
	const { data, error } = useSWR(url, fetcher);

	let defaultUnit;

	if (data) {
		const { countryCode } = data;
		const hasImperialUnit = countryCode === 'US' || countryCode === 'BU' || countryCode === 'LR';

		if (hasImperialUnit) {
			defaultUnit = UNITS.imperial;
		} else {
			defaultUnit = UNITS.metric;
		}
	}

	if (error) defaultUnit = UNITS.metric;

	return defaultUnit;
}
