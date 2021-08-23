import { UnitType } from "src/types/app";

interface IUnits {
	readonly imperial: UnitType;
	readonly metric: UnitType;
}

export const UNITS: IUnits = { imperial: 'imperial', metric: 'metric' };