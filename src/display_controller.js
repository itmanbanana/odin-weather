import { Location } from "./location.js";
import { Weather } from "./weather.js";
const DisplayController = (() => {
    const locationSearchInput = document.querySelector("input#location-search-input");
    const locationSearchButton = document.querySelector("button.location-search-button");
    const locationList = document.querySelector("ul.location-list");
    const weatherContainer = document.querySelector(".weather");
    const queryLocation = async (e) => {
        e.preventDefault();
        if (locationSearchInput.value === "")
            return;
        const locationData = await Location.query(locationSearchInput.value);
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
    const refreshLocationDisplay = (data) => {
        locationList.innerHTML = "";
        data.forEach((location) => {
            const newLocationItem = document.createElement("li");
            const newLocationText = document.createElement("div");
            const newLocationButton = document.createElement("button");
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
    };
    const refreshWeatherDisplay = (locationData, weatherData) => {
        console.log(weatherData);
        weatherContainer.innerHTML = "";
        const locationTitle = document.createElement("div");
        const weatherImage = document.createElement("img");
        const weatherCaption = document.createElement("div");
        const weatherTemperature = document.createElement("div");
        const weatherFeelsLike = document.createElement("div");
        const weatherExtraDetails = document.createElement("div");
        const weatherWindDirection = document.createElement("div");
        const weatherWindGust = document.createElement("div");
        const weatherWindSpeed = document.createElement("div");
        const weatherSurfacePressure = document.createElement("div");
        locationTitle.className = "weather-location-title";
        weatherImage.className = "weather-image";
        weatherCaption.className = "weather-image-caption";
        weatherTemperature.className = "weather-temperature";
        weatherExtraDetails.className = "weather-extra-details";
        weatherFeelsLike.className = "weather-temperature-feelslike";
        weatherWindDirection.className = "weather-wind-direction";
        weatherWindGust.className = "weather-wind-gust";
        weatherWindSpeed.className = "weather-wind-speed";
        weatherSurfacePressure.className = "weather-wind-surface-pressure";
        locationTitle.textContent = `${locationData.name}, ${locationData.state}, ${locationData.country}`;
        weatherImage.src = (weatherData.isDay) ? weatherData.weatherStatus.imagePathDay : weatherData.weatherStatus.imagePathNight;
        weatherCaption.textContent = weatherData.weatherStatus.caption;
        weatherTemperature.textContent = weatherData.temperature;
        weatherFeelsLike.textContent = `Feels like: ${weatherData.apparentTemperature}`;
        weatherWindDirection.textContent = `Wind Direction: ${weatherData.windDirection}`.replace("%", "°");
        weatherWindGust.textContent = `Wind Gusts: ${weatherData.windGusts}`;
        weatherWindSpeed.textContent = `Wind Speed: ${weatherData.windSpeed}`;
        weatherSurfacePressure.textContent = `Surface Pressure: ${weatherData.surfacePressure}`;
        weatherExtraDetails.appendChild(weatherWindDirection);
        weatherExtraDetails.appendChild(weatherWindGust);
        weatherExtraDetails.appendChild(weatherWindSpeed);
        weatherExtraDetails.appendChild(weatherSurfacePressure);
        weatherContainer.appendChild(locationTitle);
        weatherContainer.appendChild(weatherImage);
        weatherContainer.appendChild(weatherCaption);
        weatherContainer.appendChild(weatherTemperature);
        weatherContainer.appendChild(weatherFeelsLike);
        weatherContainer.appendChild(weatherExtraDetails);
    };
    locationSearchButton.addEventListener("click", queryLocation);
})();
export { DisplayController };
//# sourceMappingURL=display_controller.js.map