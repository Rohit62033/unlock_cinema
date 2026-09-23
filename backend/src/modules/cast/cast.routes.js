import express from "express";

import {
  createMovieCast,
  getMovieCast,
  updateMovieCast,
  deleteMovieCast,
} from "./cast.controller.js";

const router = express.Router();

router.post(
  "/",
  createMovieCast
);

router.get(
  "/movie/:movieId",
  getMovieCast
);

router.patch(
  "/:castId",
  updateMovieCast
);

router.delete(
  "/:castId",
  deleteMovieCast
);

export default router;