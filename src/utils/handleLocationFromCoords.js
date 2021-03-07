export const handleLocationFromCoords = (longitude, latitude, getLocation) => {
	if (typeof window !== 'undefined') {
		const coords = SMap.Coords.fromWGS84(longitude, latitude);

		new SMap.Geocoder.Reverse(coords, getLocation, {lang: 'en'});
	}
}