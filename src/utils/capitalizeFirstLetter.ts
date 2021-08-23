export const capitalizeFirstLetter = (string: string): string => {
	const slicedString = string.slice(1);
	const firstLetterCapitalized = string.charAt(0).toUpperCase();
	const capitalizeString = firstLetterCapitalized + slicedString;

	return capitalizeString;
}