declare const weatherAPI: {
    getWeather: (url: string) => Promise<unknown>;
    query: (lat: number, lon: number) => Promise<unknown>;
    WEATHER_CODE_MAP: Record<number, string>;
};
export { weatherAPI };
//# sourceMappingURL=weather.d.ts.map