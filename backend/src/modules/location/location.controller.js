import { autoDetectLocationService, searchCitiesService } from "./location.service.js";

export const setUserLocation = (req, res) => {
  const { city } = req.body;

  if (!city) {
    return res.status(400).json({ message: "City required" });
  }

  res.cookie("city", city, {
    httpOnly: false,
    sameSite: "lax",
    secure: false,   // true in production (HTTPS)
    maxAge: 1000 * 60 * 60 * 24 * 365 // 1 year
  });

  return res.json({
    success: true,
    message: "Location set",
    city
  });
};

export const autoDetectLocation = async (req, res, next) => {
  try {
    const { latitude, longitude } = req.body

    const city = await autoDetectLocationService(latitude, longitude)

    //  Set cookie
    res.cookie("city", city, {
      httpOnly: false,
      sameSite: "lax",
      maxAge: 1000 * 60 * 60 * 24 * 365
    });

    return res.json({
      success: true,
      city
    });

  } catch (error) {
    next(error)
  }
}

export const searchCities = async (req, res, next) => {
  try {
    const { q } = req.body

    const result = await searchCitiesService(q)
    
    return res.json(result)
  } catch (error) {
    next(error)
  }
}