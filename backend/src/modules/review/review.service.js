import * as reviewRepository
  from "./review.repo.js";

import {
  invalidateMovieReviewCache,
  invalidateSingleReviewCache,
  getMovieReviewsCacheKey
} from "./review.cache.js";

import {
  updateMovieRatingStats
} from "./review.utils.js";

import cache from "../../config/cache.js";
import { AppError } from "../../errors/AppErrors.js";
import { HTTP_STATUS } from "../../constants/httpStatus.js";
import { ERROR_CODES } from "../../errors/errorCodes.js";

export const createReviewService =
  async (payload) => {

    const {
      movie,
      user
    } = payload;

    // CHECK DUPLICATE REVIEW

    const existingReview =
      await reviewRepository
        .findReviewByMovieAndUser(
          movie,
          user
        );

    if (existingReview) {
      throw new AppError("Review already exists", HTTP_STATUS.CONFLICT, ERROR_CODES.CONFLICT)
    }

    // CREATE REVIEW

    const review =
      await reviewRepository
        .createReview(payload);

    // UPDATE MOVIE STATS

    await updateMovieRatingStats(movie);

    // INVALIDATE CACHE

    await invalidateMovieReviewCache(
      movie
    );

    return review;
  };

export const updateReviewService =
  async (
    reviewId,
    userId,
    payload
  ) => {

    const review =
      await reviewRepository
        .findReviewById(reviewId);

    if (!review) {
      throw new Error(
        "Review not found"
      );
    }

    // OWNERSHIP CHECK

    if (
      review.user.toString() !== userId
    ) {
      throw new Error(
        "Unauthorized"
      );
    }

    payload.isEdited = true;

    const updatedReview =
      await reviewRepository
        .updateReview(
          reviewId,
          payload
        );

    // UPDATE STATS

    await updateMovieRatingStats(
      review.movie
    );

    // INVALIDATE CACHE

    await invalidateMovieReviewCache(
      review.movie
    );

    await invalidateSingleReviewCache(
      reviewId
    );

    return updatedReview;
  };

export const deleteReviewService =
  async (
    reviewId,
    userId
  ) => {

    const review =
      await reviewRepository
        .findReviewById(reviewId);

    if (!review) {
      throw new Error(
        "Review not found"
      );
    }

    // OWNERSHIP CHECK

    if (
      review.user.toString() !== userId
    ) {
      throw new Error(
        "Unauthorized"
      );
    }

    await reviewRepository
      .deleteReview(reviewId);

    // UPDATE STATS

    await updateMovieRatingStats(
      review.movie
    );

    // INVALIDATE CACHE

    await invalidateMovieReviewCache(
      review.movie
    );

    await invalidateSingleReviewCache(
      reviewId
    );

    return true;
  };

export const getMovieReviewsService =
  async (
    movieId,
    page = 1,
    limit = 10
  ) => {

    const skip =
      (page - 1) * limit;

    const cacheKey =
      getMovieReviewsCacheKey(
        movieId,
        page
      );

    // CACHE CHECK

    const cached =
      await cache.get(cacheKey);

    if (cached) {
      return JSON.parse(cached);
    }

    const reviews =
      await reviewRepository
        .getMovieReviews(
          movieId,
          skip,
          limit
        );

    // STORE CACHE

    await cache.set(
      cacheKey,
      JSON.stringify(reviews),
      3600
    );

    return reviews;
  };

export const getSingleReviewService =
  async (reviewId) => {

    const cacheKey =
      `review:${reviewId}`;

    const cached =
      await cache.get(cacheKey);

    if (cached) {
      return JSON.parse(cached);
    }

    const review =
      await reviewRepository
        .getSingleReview(reviewId);

    if (!review) {
      throw new Error(
        "Review not found"
      );
    }

    await cache.set(
      cacheKey,
      JSON.stringify(review),
      3600
    );

    return review;
  };