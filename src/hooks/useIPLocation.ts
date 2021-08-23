import useSWR from 'swr';
import { fetcher } from 'src/utils/fetcher';
import { UNITS } from 'src/constants/units';
import { UnitType } from 'src/types/app';

export const useIPLocation = (): UnitType => {
	const url = 'http://ip-api.com/json/';
	const { data, error } = useSWR(url, fetcher);

	let defaultUnit: UnitType;

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
