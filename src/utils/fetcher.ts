import { Weather } from "src/types/weatherData";

export const fetcher = (url: string): Promise<Weather> => fetch(url).then(r => r.json());
