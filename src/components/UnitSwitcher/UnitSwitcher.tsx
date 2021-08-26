import React, { FC } from 'react';
import { UNITS } from 'src/constants/units';
import { SetUnitType, UnitType } from 'src/types/app';
import {
	Container,
	Unit,
} from './UnitSwitcher.styled';

export type UnitSwitcherType = 'result' | 'search';

interface UnitSwitcherProps {
	readonly units: UnitType;
	readonly setUnits: SetUnitType;
}

export const UnitSwitcher: FC<UnitSwitcherProps> = ({ units, setUnits }) => {
	const isMetric = units === UNITS.metric;
	const isImperial = units === UNITS.imperial;
	const handleMetricClick = () => !isMetric && setUnits(UNITS.metric);
	const handleImperialClick = () => !isImperial && setUnits(UNITS.imperial);

	return (
		<Container>
			<Unit
				active={isMetric}
				onClick={handleMetricClick}>
				°C
			</Unit>
			<Unit
				active={isImperial}
				onClick={handleImperialClick}>
				°F
			</Unit>
		</Container>
	)
};
