export const handleLocationSuggest = (setCoords, setShowResults) => {
	if (typeof window !== 'undefined') {
		const input = document.getElementById("location");

		if (input) {
			const suggest = new SMap.Suggest(input);
			suggest.urlParams({
				type: 'municipality',
				lang: 'en',
			});
			suggest.addListener("suggest", (res) => {
				setShowResults(true);
				setCoords({ lat: res.data.latitude, long: res.data.longitude });
			});
		}
	}
};
