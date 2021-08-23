import { useEffect, useState } from 'react';
import { SetCoordsType, setShowResultsType } from 'src/types/app';

export type isGeoAccessibleType = boolean;

interface IGetUserPosition {
	readonly isGeoAccessible: isGeoAccessibleType;
	readonly handleGeoClick: () => void;
	readonly error: boolean;
}

export const useGetUserPosition = (
	setCoords: SetCoordsType,
	setShowResults: setShowResultsType
): IGetUserPosition => {
	const [error, setGeoError] = useState(false);
	const [isGeoAccessible, setIsGeoAccessible] = useState<isGeoAccessibleType>(false);

	useEffect(() => {
		navigator.permissions.query({ name:'geolocation' }).then((result) => {
			const canUseGeo = result.state !== 'denied';
			setIsGeoAccessible(typeof window !== 'undefined' && canUseGeo);
		});
	}, [typeof window]);

	const handleSuccessGeo = (position: GeolocationPosition) => {
		setCoords({ long: position.coords.longitude, lat: position.coords.latitude });
	}

	const handleErrorGeo = (error: GeolocationPositionError) => {
		console.log('Location Error', error);
		setGeoError(true);
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