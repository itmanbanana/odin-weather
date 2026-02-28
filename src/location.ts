import type { LocationResponse } from "./types/location_response.js";

const Location = (() => {
  const apiCall = async (url: string) => {
    try {
      const res = await fetch(url, {
        method: "GET",
        headers: new Headers({ "X-Api-Key": process.env.GEO_API_KEY } as HeadersInit), 
        mode: "cors",
        cache: "default",
      })
      const response = await res.json();
      return response;
    } catch {
        throw new Error("Error fetching data");
    }
  }

  const query = async (city: string = "London") => {
    const url = `https://api.api-ninjas.com/v1/geocoding?city=${city}`;
    const rawData = await apiCall(url) as Array<LocationResponse>;
    return rawData;
  };

  return { query }
})();

export { Location };