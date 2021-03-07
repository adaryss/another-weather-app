import { useEffect, useState } from 'react';

export const useGetUserPosition = (setCoords, setShowResults) => {
	const [error, setGeoError] = useState(null);
	const [isGeoAccessible, setIsGeoAccessible] = useState(false);

	useEffect(() => {
		setIsGeoAccessible(typeof window !== 'undefined' && navigator.geolocation);
	}, [typeof window])

	const handleSuccessGeo = (position) => {
		setCoords({ long: position.coords.longitude, lat: position.coords.latitude });
	}

	const handleErrorGeo = (error) => {
		setGeoError(error);
	}

	const handleGeoClick = () => {
		navigator.geolocation.getCurrentPosition(handleSuccessGeo, handleErrorGeo);
		setShowResults(true);
	}

	return {
		isGeoAccessible,
		handleGeoClick,
		error,
	};
}