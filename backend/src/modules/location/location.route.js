import express from "express";
import { autoDetectLocation, searchCities, setUserLocation } from "./location.controller.js";


const router = express.Router()

router.post('/set', setUserLocation)

router.post("/auto-detect", autoDetectLocation);

router.post('/search',searchCities)

export default router 