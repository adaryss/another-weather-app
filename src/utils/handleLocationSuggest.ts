import { SetCoordsType, setShowResultsType } from "src/types/app";

export interface Result {
	readonly phrase: string;
	readonly prevPhrase: string;
	readonly data: ResultData;
	readonly position: number;
	readonly limit: number;
}
export interface ResultData {
	readonly longitude: number;
	readonly latitude: number;
	readonly source: string;
	readonly id: number;
	readonly title: string;
	readonly secondRow: string;
	readonly thirdRow: string;
	readonly phrase: string;
	readonly iconType: string;
	readonly iconUrl: string;
	readonly poiTypeId: number;
	readonly mmid: number;
	readonly mmsource: string;
	readonly mmtype: string;
}

export const handleLocationSuggest = (setCoords: SetCoordsType, setShowResults: setShowResultsType) => {
	if (typeof window !== 'undefined') {
		const input = document.getElementById("location");

		if (input) {
			// @ts-ignore mapy.cz API don't support TS
			const suggest = new SMap.Suggest(input);
			suggest.urlParams({
				type: 'municipality',
				lang: 'en',
			});
			suggest.addListener("suggest", (res: Result) => {
				setShowResults(true);
				setCoords({ lat: res.data.latitude, long: res.data.longitude });
			});
		}
	}
};
