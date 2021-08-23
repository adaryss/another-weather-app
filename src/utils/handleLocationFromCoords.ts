export const handleLocationFromCoords = (longitude: string | number, latitude: string | number, getLocation: (geocoder: any) => void) => {
	if (typeof window !== 'undefined') {
		// @ts-ignore mapy.cz API don't support TS
		const coords = SMap.Coords.fromWGS84(longitude, latitude);

		// @ts-ignore mapy.cz API don't support TS
		new SMap.Geocoder.Reverse(coords, getLocation, { lang: 'en' });
	}
}