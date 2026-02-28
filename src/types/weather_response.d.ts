export type WeatherResponse = {
    latitude: number;
    longitude: number;
    generationtime_ms: number;
    utc_offset_seconds: number;
    timezone: string;
    timezone_abbreviation: string;
    elevation: number;
    current_units: {
        time: string;
        interval: string;
        temperature_2m: string;
        apparent_temperature: string;
        relative_humidity_2m: string;
        surface_pressure: string;
        weather_code: string;
        wind_speed_10m: string;
        wind_direction_10m: string;
        wind_gusts_10m: string;
        is_day: string;
    };
    current: {
        time: string;
        interval: number;
        temperature_2m: number;
        apparent_temperature: number;
        relative_humidity_2m: number;
        surface_pressure: number;
        weather_code: number;
        wind_speed_10m: number;
        wind_direction_10m: number;
        wind_gusts_10m: number;
        is_day: number;
    };
};
//# sourceMappingURL=weather_response.d.ts.map