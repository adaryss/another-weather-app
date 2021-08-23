export const fetcher = (url: string): Promise<String> => fetch(url).then(r => r.json());
