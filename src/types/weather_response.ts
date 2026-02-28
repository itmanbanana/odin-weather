export type WeatherResponse = {
  latitude: number;
  longitude: number;
  generationtime_ms: number;
  utc_offset_seconds: number;
  timezone: string;
  timezone_abbreviation: string;
  elevation: number;

  current_units: {
    time: string; // "iso8601"
    interval: string; // "seconds"
    temperature_2m: string; // "°C"
    apparent_temperature: string; // "°C"
    relative_humidity_2m: string; // "%"
    surface_pressure: string; // "hPa"
    weather_code: string; // "wmo code"
    wind_speed_10m: string; // "km/h"
    wind_direction_10m: string; // "°"
    wind_gusts_10m: string; // "km/h"
    is_day: string; // ""
  };

  current: {
    time: string; // ISO string e.g. "2026-02-28T02:00"
    interval: number; // seconds
    temperature_2m: number;
    apparent_temperature: number;
    relative_humidity_2m: number;
    surface_pressure: number;
    weather_code: number;
    wind_speed_10m: number;
    wind_direction_10m: number;
    wind_gusts_10m: number;
    is_day: number; // 0 | 1 (API returns number)
  };
};