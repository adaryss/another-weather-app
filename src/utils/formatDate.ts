export const getDay = (unix: number, abbr: string = "false", timezoneOffset: number): string => {
	const miliseconds = (unix + timezoneOffset) * 1000;
	const date = new Date(miliseconds);
	const dayNumber = date.getUTCDay();

	let day: string;

	if (abbr === 'true') {
		switch (dayNumber) {
			case 0: day = "Sun"; break;
			case 1: day = "Mon"; break;
			case 2: day = "Tue"; break;
			case 3: day = "Wed"; break;
			case 4: day = "Thu"; break;
			case 5: day = "Fri"; break;
			case 6: day = "Sat"; break;
		}
	} else {
		switch (dayNumber) {
			case 0: day = "Sunday"; break;
			case 1: day = "Monday"; break;
			case 2: day = "Tuesday"; break;
			case 3: day = "Wednesday"; break;
			case 4: day = "Thursday"; break;
			case 5: day = "Friday"; break;
			case 6: day = "Saturday"; break;
		}
	}

	return day;
}

export const getDate = (unix: number, timezoneOffset: number): string => {
	const miliseconds = (unix + timezoneOffset) * 1000;
	const date = new Date(miliseconds);
	const day = date.getUTCDate();
	const month = date.getUTCMonth();
	const year = date.getUTCFullYear();

	let formattedMonth: string;
	switch (month) {
		case 0: formattedMonth = "Jan"; break;
		case 1: formattedMonth = "Feb"; break;
		case 2: formattedMonth = "Mar"; break;
		case 3: formattedMonth = "Apr"; break;
		case 4: formattedMonth = "May"; break;
		case 5: formattedMonth = "Jun"; break;
		case 6: formattedMonth = "Jul"; break;
		case 7: formattedMonth = "Aug"; break;
		case 8: formattedMonth = "Sep"; break;
		case 9: formattedMonth = "Oct"; break;
		case 10: formattedMonth = "Nov"; break;
		case 11: formattedMonth = "Dec"; break;
	}

	const finalDate = `${day} ${formattedMonth} ${year}`;

	return finalDate;
}

export const getHour = (unix: number, timezoneOffset: number): number => {
	const miliseconds = (unix + timezoneOffset) * 1000;
	const date = new Date(miliseconds);
	const hour = date.getUTCHours();

	return hour;
}

export const getTime = (unix: number, timezoneOffset: number): string => {
	const miliseconds = (unix + timezoneOffset) * 1000;
	const date = new Date(miliseconds);
	const hours = date.getUTCHours();
	const minutes = date.getUTCMinutes();
	const minutesLength = minutes.toString().length;
	const formattedMinutes = minutesLength === 1 ? `0${minutes}` : minutes;
	const time = `${hours}:${formattedMinutes}`;

	return time;
}

export const formatHour = (dt: number, timezoneOffset: number): string => {
	const singleHour = getHour(dt, timezoneOffset);
	const formattedHour = `${singleHour}.00`;

	return formattedHour;
}