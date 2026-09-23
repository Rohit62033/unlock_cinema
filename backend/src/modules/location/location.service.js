import axios from "axios";
import { redisService } from "../../utils/redisService.js";
import { cityRepo } from "../theatres/city/city.repo.js";

export const autoDetectLocationService = async (latitude, longitude) => {

  //  Use OpenCage / Google Maps API
  const response = await axios.get(
    `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${process.env.OPENCAGE_API_KEY}`
  );

  const components = response.data.results[0].components;


  const city =
    components.city ||
    components.town ||
    components.village ||
    components.state_district ||
    components.state;

  if (!city) {
    return res.status(400).json({ message: "City not found" });
  }

  return city
}

export const searchCitiesService = async (q) => {

  if (!q) return res.json({ cities: [] })

  const cacheKey = `city_search:${q.toLowerCase()}`

  // check redis
  const cached = await redisService.get(cacheKey)

  if (cached) {
    return { cities: cached, source: "cache" }
  }

  // DB Query
  const cities = await cityRepo.getCitiesWithTheatre(q)

  await redisService.set(cacheKey, cities, 3600)

  return {
    cities
    , source: 'db'
  }
}