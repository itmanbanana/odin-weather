import { Location } from "./location.js";
import { Weather } from "./weather.js";
import type { LocationResponse } from "./types/location_response.js";
import type { WeatherData } from "./types/weather_data.js";

import sunrisePath from "./images/sunrise.svg";
import sunsetPath from "./images/sunset.svg";

const DisplayController = (() => {
  const locationSearchInput: HTMLInputElement = document.querySelector("input#location-search-input") as HTMLInputElement;
  const locationSearchButton: HTMLButtonElement = document.querySelector("button.location-search-button") as HTMLButtonElement;
  const locationList: HTMLUListElement = document.querySelector("ul.location-list") as HTMLUListElement;

  const weatherContainer: HTMLDivElement = document.querySelector(".weather") as HTMLDivElement;

  const queryLocation = async (e: Event) => {
    e.preventDefault();
    if (locationSearchInput.value === "") return;

    const locationData = await Location.query(locationSearchInput.value) as LocationResponse[];
    console.log(locationData);
    
    // const dummyLocationData = [
    //   {name: 'London', latitude: 51.5073219, longitude: -0.1276474, country: 'GB', state: 'England'},
    //   {name: 'City of London', latitude: 51.5156177, longitude: -0.0919983, country: 'GB', state: 'England'}, 
    //   {name: 'London', latitude: 42.9832406, longitude: -81.243372, country: 'CA', state: 'Ontario'},
    //   {name: 'Chelsea', latitude: 51.4875167, longitude: -0.1687007, country: 'GB', state: 'England'},
    //   {name: 'London', latitude: 37.1289771, longitude: -84.0832646, country: 'US', state: 'Kentucky'}
    // ] as LocationResponse[]
    
    refreshLocationDisplay(locationData);
  };

  const refreshLocationDisplay = (data: LocationResponse[]) => {
    locationList.innerHTML = "";
    data.forEach((location) => {
      const newLocationItem: HTMLLIElement = document.createElement("li");
      const newLocationText: HTMLDivElement = document.createElement("div");
      const newLocationButton: HTMLButtonElement = document.createElement("button");

      newLocationItem.className = "location-list-item";
      newLocationText.className = "location-list-item-text";
      newLocationText.textContent = `${location.name}, ${location.state}, ${location.country}`;
      newLocationButton.textContent = "Get Weather";
      newLocationButton.dataset.latitude = `${location.latitude}`;
      newLocationButton.dataset.longitude = `${location.longitude}`;

      newLocationButton.addEventListener("click", async (e) => {
        e.preventDefault();
        if (newLocationButton.dataset.latitude && newLocationButton.dataset.longitude) {
          const data = await Weather.query(+newLocationButton.dataset.latitude, +newLocationButton.dataset.longitude);
          refreshWeatherDisplay(location, data);
        }
      });

      newLocationItem.appendChild(newLocationText);
      newLocationItem.appendChild(newLocationButton);
      locationList.appendChild(newLocationItem);
    });
  }

  const refreshWeatherDisplay = (locationData: LocationResponse, weatherData: WeatherData) => {
    console.log(weatherData);
    weatherContainer.className = "weather visible";
    weatherContainer.innerHTML = `
      <div class="weather-header">
        <div class="weather-location-name">${locationData.name}, ${locationData.state}, ${locationData.country}</div>
        <div class="weather-location-time">${weatherData.time}</div>
      </div>
      <div class="weather-main">
        <div class="weather-main-hero">
          <div class="weather-temperature">
            <img src="${(weatherData.isDay) ? weatherData.weatherStatus.imagePathDay : weatherData.weatherStatus.imagePathNight}" alt="" class="weather-icon">
            <div class="weather-temperature-text">${weatherData.temperature}</div>
          </div>
          <div class="weather-feels-like">${weatherData.apparentTemperature}</div>
          <div class="weather-description">${weatherData.weatherStatus.caption}</div>
        </div>
        <div class="weather-main-sidebar">
          <div class="weather-sunrise-sunset">
            <div class="weather-sunrise">
              <img src="${sunrisePath}" alt="" class="weather-sunrise-icon">
              ${weatherData.sunrise}
            </div>
            <div class="weather-sunset">
              <img src="${sunsetPath}" alt="" class="weather-sunset-icon">
              ${weatherData.sunset}
            </div>
          </div>
          <div class="weather-temperature-high-low">
            <div class="weather-temperature-high"><b>H: </b> ${weatherData.temperatureHigh}</div>
            <div class="weather-temperature-low"><b>L: </b> ${weatherData.temperatureLow}</div>
          </div>
        </div>  
      </div>
      <div class="weather-extras">
        <div class="weather-wind-direction"><b>Wind Direction:</b> ${weatherData.windDirection}</div>
        <div class="weather-wind-gusts"><b>Wind Gusts:</b> ${weatherData.windGusts}</div>
        <div class="weather-wind-speed"><b>Wind Speed:</b> ${weatherData.windSpeed}</div>
        <div class="weather-surface-pressure"><b>Surface Pressure:</b> ${weatherData.surfacePressure}</div>
      </div>
    `;
  }

  locationSearchButton.addEventListener("click", queryLocation);
})();

export { DisplayController }