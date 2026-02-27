console.log("Hello World!");
const apiKey = process.env.API_KEY;
const getWeather = async (url) => {
    try {
        const res = await fetch(url, {
            method: "GET",
            headers: { "User-Agent": apiKey || "" },
            mode: "cors",
            cache: "default",
        });
        return await res.json();
    }
    catch {
        throw new Error("Error fetching data");
    }
};
const queryWeather = async (query) => {
    return await getWeather(`https://api.weather.gov/${query}`);
};
let forecast = queryWeather(`points/${33.4900},${-117.5500}`)
    .then((res) => getWeather(res.properties.forecast))
    .then((res) => {
    console.log(`Temperature: ${res.properties.periods[0].temperature}`);
})
    .catch((error) => console.error(error));
export {};
//# sourceMappingURL=index.js.map