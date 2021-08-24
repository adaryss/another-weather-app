import React, { FC } from 'react';
import { UNITS } from 'src/constants/units';
import { SetUnitType, UnitType } from 'src/types/app';
import {
	Container,
	Unit,
} from './UnitSwitcher.styled';

export type UnitSwitcherType = 'result' | 'search';

interface UnitSwitcherProps {
	readonly type: UnitSwitcherType;
	readonly units: UnitType;
	readonly setUnits: SetUnitType;
}

export const UnitSwitcher: FC<UnitSwitcherProps> = ({ type, units, setUnits }) => {
	const isMetric = units === UNITS.metric;
	const isImperial = units === UNITS.imperial;
	const handleMetricClick = () => !isMetric && setUnits(UNITS.metric);
	const handleImperialClick = () => !isImperial && setUnits(UNITS.imperial);

	return (
		<Container type={type}>
			<Unit
				active={isMetric}
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
