import clearDay from "./images/weather_clear_day.svg";
import clearNight from "./images/weather_clear_night.svg";
import fog from "./images/weather_fog.svg";
import hail from "./images/weather_hail.svg";
import overcast from "./images/weather_overcast.svg";
import partlyCloudyDay from "./images/weather_partlycloudy_day.svg";
import partlyCloudyNight from "./images/weather_partlycloudy_night.svg";
import rainHeavy from "./images/weather_rain_heavy.svg";
import rainLight from "./images/weather_rain_light.svg";
import rainModerate from "./images/weather_rain_moderate.svg";
import rainSnowHeavy from "./images/weather_rainsnow_heavy.svg";
import rainSnowLight from "./images/weather_rainsnow_light.svg";
import snowHeavy from "./images/weather_snow_heavy.svg";
import snowLight from "./images/weather_snow_light.svg";
import snowModerate from "./images/weather_snow_moderate.svg";
import storm from "./images/weather_storm.svg";
const Weather = (() => {
    const WEATHER_CODE_MAP = {
        0: {
            imagePathDay: clearDay,
            imagePathNight: clearNight,
            caption: "Clear sky"
        },
        1: {
            imagePathDay: partlyCloudyDay,
            imagePathNight: partlyCloudyNight,
            caption: "Mainly clear"
        },
        2: {
            imagePathDay: partlyCloudyDay,
            imagePathNight: partlyCloudyNight,
            caption: "Partly cloudy"
        },
        3: {
            imagePathDay: overcast,
            imagePathNight: overcast,
            caption: "Overcast"
        },
        45: {
            imagePathDay: fog,
            imagePathNight: fog,
            caption: "Fog"
        },
        48: {
            imagePathDay: fog,
            imagePathNight: fog,
            caption: "Depositing rime fog"
        },
        51: {
            imagePathDay: rainLight,
            imagePathNight: rainLight,
            caption: "Drizzle (Light)"
        },
        52: {
            imagePathDay: rainModerate,
            imagePathNight: rainModerate,
            caption: "Drizzle (Moderate)"
        },
        53: {
            imagePathDay: rainHeavy,
            imagePathNight: rainHeavy,
            caption: "Drizzle (Heavy)"
        },
        56: {
            imagePathDay: rainLight,
            imagePathNight: rainLight,
            caption: "Freezing Drizzle (Light)"
        },
        57: {
            imagePathDay: rainHeavy,
            imagePathNight: rainHeavy,
            caption: "Freezing Drizzle (Heavy)"
        },
        61: {
            imagePathDay: rainLight,
            imagePathNight: rainLight,
            caption: "Rain (Slight)"
        },
        63: {
            imagePathDay: rainModerate,
            imagePathNight: rainModerate,
            caption: "Rain (Moderate)"
        },
        65: {
            imagePathDay: rainHeavy,
            imagePathNight: rainHeavy,
            caption: "Rain (Heavy)"
        },
        66: {
            imagePathDay: rainLight,
            imagePathNight: rainLight,
            caption: "Freezing Rain (Light)"
        },
        67: {
            imagePathDay: rainHeavy,
            imagePathNight: rainHeavy,
            caption: "Freezing Rain (Heavy)"
        },
        71: {
            imagePathDay: snowLight,
            imagePathNight: snowLight,
            caption: "Snow fall (Slight)"
        },
        73: {
            imagePathDay: snowModerate,
            imagePathNight: snowModerate,
            caption: "Snow fall (Moderate)"
        },
        75: {
            imagePathDay: snowHeavy,
            imagePathNight: snowHeavy,
            caption: "Snow fall (Heavy)"
        },
        77: {
            imagePathDay: hail,
            imagePathNight: hail,
            caption: "Snow grains"
        },
        80: {
            imagePathDay: rainLight,
            imagePathNight: rainLight,
            caption: "Rain showers (Slight)"
        },
        81: {
            imagePathDay: rainModerate,
            imagePathNight: rainModerate,
            caption: "Rain showers (Moderate)"
        },
        82: {
            imagePathDay: rainHeavy,
            imagePathNight: rainHeavy,
            caption: "Rain showers (Violent)"
        },
        85: {
            imagePathDay: rainSnowLight,
            imagePathNight: rainSnowLight,
            caption: "Snow showers (Slight)"
        },
        86: {
            imagePathDay: rainSnowHeavy,
            imagePathNight: rainSnowHeavy,
            caption: "Snow showers (Heavy)"
        },
        95: {
            imagePathDay: storm,
            imagePathNight: storm,
            caption: "Thunderstorm (Slight or Moderate)"
        },
        96: {
            imagePathDay: storm,
            imagePathNight: storm,
            caption: "Thunderstorm with hail (Slight)"
        },
        99: {
            imagePathDay: storm,
            imagePathNight: storm,
            caption: "Thunderstorm with hail (Heavy)"
        }
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
            weatherStatus: WEATHER_CODE_MAP[data.current.weather_code],
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