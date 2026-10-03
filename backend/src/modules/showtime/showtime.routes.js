import express from "express"
import { getMovieShowtimes } from "./showtime.controller.js";

const router = express.Router();

router.get(
  "/movies/:movieId/showtimes",getMovieShowtimes
)

export default router