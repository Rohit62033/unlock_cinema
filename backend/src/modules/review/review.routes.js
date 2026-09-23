import express from "express";

import * as reviewController
  from "./review.controller.js";

import { protect }
  from '../../middlewares/auth.middleware.js';

const router = express.Router();

router.post(
  "/",
  protect,
  reviewController.createReview
);

router.patch(
  "/:reviewId",
  protect,
  reviewController.updateReview
);

router.delete(
  "/:reviewId",
  protect,
  reviewController.deleteReview
);

router.get(
  "/movie/:movieId",
  reviewController.getMovieReviews
);

router.get(
  "/:reviewId",
  reviewController.getSingleReview
);

export default router;