export interface ICoords {
	readonly long: string | number,
	readonly lat: string | number,
}

export type SetCoordsType = (params: ICoords) => void;

export type LocationNameType = string | null;

export type ShowResultsType = boolean;

export type setShowResultsType = (params: ShowResultsType) => void;

export type UnitType = 'imperial' | 'metric' | '' | undefined;

export type SetUnitType = (params: UnitType) => void;

export type SetListIsHovered = (params: boolean) => void;