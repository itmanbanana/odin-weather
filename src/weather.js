const Weather = (() => {
    const WEATHER_CODE_MAP = {
        0: "Clear sky",
        1: "Mainly clear",
        2: "Partly cloudy",
        3: "Overcast",
        45: "Fog",
        48: "Depositing rime fog",
        51: "Drizzle (Light)",
        53: "Drizzle (Moderate)",
        55: "Drizzle (Dense)",
        56: "Freezing Drizzle (Light)",
        57: "Freezing Drizzle (Dense)",
        61: "Rain (Slight)",
        63: "Rain (Moderate)",
        65: "Rain (Heavy)",
        66: "Freezing Rain (Light)",
        67: "Freezing Rain (Heavy)",
        71: "Snow fall (Slight)",
        73: "Snow fall (Moderate)",
        75: "Snow fall (Heavy)",
        77: "Snow grains",
        80: "Rain showers (Slight)",
        81: "Rain showers (Moderate)",
        82: "Rain showers (Violent)",
        85: "Snow showers (Slight)",
        86: "Snow showers (Heavy)",
        95: "Thunderstorm (Slight or Moderate)",
        96: "Thunderstorm with hail (Slight)",
        99: "Thunderstorm with hail (Heavy)",
    };
    const apiCall = async (url) => {
        try {
            const res = await fetch(url, {
                method: "GET",
                mode: "cors",
                cache: "default",
            });
            return await res.json();
        }
        catch {
            throw new Error("Error fetching data");
        }
    };
    const parseData = (data) => {
        return {
            time: `${data.current.time} ${data.timezone}`,
            temperature: `${data.current.temperature_2m} ${data.current_units.temperature_2m}`,
            apparentTemperature: `${data.current.apparent_temperature} ${data.current_units.apparent_temperature}`,
            isDay: (data.current.is_day) ? true : false,
            weatherDescription: WEATHER_CODE_MAP[data.current.weather_code],
            windDirection: `${data.current.wind_direction_10m}${data.current_units.wind_direction_10m}`,
            windGusts: `${data.current.wind_gusts_10m} ${data.current_units.wind_gusts_10m}`,
            windSpeed: `${data.current.wind_speed_10m} ${data.current_units.wind_speed_10m}`,
            surfacePressure: `${data.current.surface_pressure} ${data.current_units.surface_pressure}`
        };
    };
    const query = async (lat, lon) => {
        const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m&current=temperature_2m,relative_humidity_2m,apparent_temperature,is_day,wind_speed_10m,wind_direction_10m,wind_gusts_10m,weather_code,surface_pressure`;
        const rawData = await apiCall(url);
        return parseData(rawData);
    };
    return { query };
})();
export { Weather };
//# sourceMappingURL=weather.js.map