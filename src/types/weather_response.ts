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
  time: string; // ISO 8601
  interval: number; // seconds
  temperature_2m: number;
  apparent_temperature: number;
  relative_humidity_2m: number;
  surface_pressure: number;
  wind_speed_10m: number;
  wind_direction_10m: number;
  wind_gusts_10m: number;
  weather_code: number; // WMO weather code
  is_day: 0 | 1;
}

export interface CurrentWeatherUnits {
  time: "iso8601";
  interval: "seconds";
  temperature_2m: string; // e.g. "°C"
  apparent_temperature: string; // e.g. "°C"
  relative_humidity_2m: string; // "%"
  surface_pressure: string; // "hPa"
  wind_speed_10m: string; // "km/h"
  wind_direction_10m: string; // "°"
  wind_gusts_10m: string; // "km/h"
  weather_code: string; // "wmo code"
  is_day: string; // empty string in your example
}

export interface DailyWeather {
  time: string[]; // ISO 8601 (date only)
  sunrise: string[]; // ISO 8601
  sunset: string[]; // ISO 8601
  daylight_duration: number[]; // seconds
  temperature_2m_max: number[];
  temperature_2m_min: number[];
}

export interface DailyWeatherUnits {
  time: "iso8601";
  sunrise: "iso8601";
  sunset: "iso8601";
  daylight_duration: "s";
  temperature_2m_max: string; // "°C"
  temperature_2m_min: string; // "°C"
}