  export type WeatherStatus = {
    imagePathDay: string,
    imagePathNight: string,
    caption: string
  }
  
  export type WeatherData = {
    time: string;
    temperature: string;
    temperatureHigh: string;
    temperatureLow: string;
    apparentTemperature: string;
    isDay: boolean;
    weatherStatus: WeatherStatus;
    windDirection: string;
    windGusts: string;
    windSpeed: string;
    surfacePressure: string;
    sunrise: string;
    sunset: string;
  };