const weatherAPI = (() => {
  const WEATHER_CODE_MAP: Record<number, string> = {
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

  const getWeather = async (url: string) => {
      try {
        const res = await fetch(url, {
          method: "GET",
          mode: "cors",
          cache: "default",
        })
        return await res.json();
      } catch {
        throw new Error("Error fetching data");
      }
    }

  const query = async (lat: number, lon: number) => {
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m&current=temperature_2m,relative_humidity_2m,apparent_temperature,is_day,wind_speed_10m,wind_direction_10m,wind_gusts_10m,weather_code,surface_pressure`;
    return await getWeather(url);
  }

  return { getWeather, query, WEATHER_CODE_MAP }
})();

export { weatherAPI };