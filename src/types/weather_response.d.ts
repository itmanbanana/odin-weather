export interface WeatherResponse {
    latitude: number;
    longitude: number;
    generationtime_ms: number;
    utc_offset_seconds: number;
    timezone: string;
    timezone_abbreviation: string;
    elevation: number;
    current: CurrentWeather;
    current_units: CurrentWeatherUnits;
    daily: DailyWeather;
    daily_units: DailyWeatherUnits;
}
export interface CurrentWeather {
    time: string;
    interval: number;
    temperature_2m: number;
    apparent_temperature: number;
    relative_humidity_2m: number;
    surface_pressure: number;
    wind_speed_10m: number;
    wind_direction_10m: number;
    wind_gusts_10m: number;
    weather_code: number;
    is_day: 0 | 1;
}
export interface CurrentWeatherUnits {
    time: "iso8601";
    interval: "seconds";
    temperature_2m: string;
    apparent_temperature: string;
    relative_humidity_2m: string;
    surface_pressure: string;
    wind_speed_10m: string;
    wind_direction_10m: string;
    wind_gusts_10m: string;
    weather_code: string;
    is_day: string;
}
export interface DailyWeather {
    time: string[];
    sunrise: string[];
    sunset: string[];
    daylight_duration: number[];
    temperature_2m_max: number[];
    temperature_2m_min: number[];
}
export interface DailyWeatherUnits {
    time: "iso8601";
    sunrise: "iso8601";
    sunset: "iso8601";
    daylight_duration: "s";
    temperature_2m_max: string;
    temperature_2m_min: string;
}
//# sourceMappingURL=weather_response.d.ts.map