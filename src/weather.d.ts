declare const Weather: {
    query: (lat: number, lon: number) => Promise<{
        time: string;
        temperature: string;
        apparentTemperature: string;
        isDay: boolean;
        weatherDescription: string;
        windDirection: string;
        windGusts: string;
        windSpeed: string;
        surfacePressure: string;
    }>;
};
export { Weather };
//# sourceMappingURL=weather.d.ts.map