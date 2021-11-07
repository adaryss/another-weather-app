// Data typed by https://jvilk.com/MakeTypes/

export interface Weather {
	lat: number;
	lon: number;
	timezone: string;
	timezone_offset: number;
	current: Current;
	hourly?: (HourlyEntity)[] | null;
	daily?: (DailyEntity)[] | null;
}
export interface Current {
	dt: number;
	sunrise: number;
	sunset: number;
	temp: number;
	feels_like: number;
	pressure: number;
	humidity: number;
	dew_point: number;
	uvi: number;
	clouds: number;
	visibility: number;
	wind_speed: number;
	wind_deg: number;
	weather?: (WeatherEntity)[] | null;
}
export interface WeatherEntity {
	id: number;
	main: string;
	description: string;
	icon: string;
}
export interface HourlyEntity {
	dt: number;
	temp: number;
	feels_like: number;
	pressure: number;
	humidity: number;
	dew_point: number;
	uvi: number;
	clouds: number;
	visibility: number;
	wind_speed: number;
	wind_deg: number;
	wind_gust: number;
	weather?: (WeatherEntity)[] | null;
	pop: number;
}
export interface DailyEntity {
	dt: number;
	sunrise: number;
	sunset: number;
	moonrise: number;
	moonset: number;
	moon_phase: number;
	temp: Temp;
	feels_like: FeelsLike;
	pressure: number;
	humidity: number;
	dew_point: number;
	wind_speed: number;
	wind_deg: number;
	wind_gust: number;
	weather?: (WeatherEntity)[] | null;
	clouds: number;
	pop: number;
	uvi: number;
}
export interface Temp {
	day: number;
	min: number;
	max: number;
	night: number;
	eve: number;
	morn: number;
}
export interface FeelsLike {
	day: number;
	night: number;
	eve: number;
	morn: number;
}

export interface ICitiesWeatherData {
	readonly dataMetric: Weather[];
	readonly dataImperial: Weather[];
}