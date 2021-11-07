export const ipFetcher = (url: string): Promise<any> => fetch(url).then(r => r.json());
