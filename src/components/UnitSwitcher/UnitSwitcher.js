import React from 'react';
import { UNITS } from 'src/constants/units';
import {
	Container,
	Unit,
} from './UnitSwitcher.styled';

export const UnitSwitcher = ({ type, units, setUnits }) => {
	const isMetric = units === UNITS.metric;
	const isImperial = units === UNITS.imperial;
	const handleMetricClick = () => !isMetric && setUnits(UNITS.metric);
	const handleImperialClick = () => !isImperial && setUnits(UNITS.imperial);

	return (
		<Container type={type}>
			<Unit active={isMetric}
				type={type}
				onClick={handleMetricClick}>
				°C
			</Unit>
			<Unit
				active={isImperial}
				type={type}
				onClick={handleImperialClick}>
				°F
			</Unit>
		</Container>
	)
};
