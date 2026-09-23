import * as reviewService
  from "./review.service.js";

export const createReview =
  async (req, res, next) => {
    try {

      const review =
        await reviewService
          .createReviewService({
            ...req.body,
            user: req.user.id
          });

      return res.status(201).json({
        success: true,
        review
      });

    } catch (error) {
      next(error);
    }
  };

export const updateReview =
  async (req, res, next) => {
    try {

      const review =
        await reviewService
          .updateReviewService(
            req.params.reviewId,
            req.user.id,
            req.body
          );

      return res.status(200).json({
        success: true,
        review
      });

    } catch (error) {
      next(error);
    }
  };

export const deleteReview =
  async (req, res, next) => {
    try {

      await reviewService
        .deleteReviewService(
          req.params.reviewId,
          req.user.id
        );

      return res.status(200).json({
        success: true,
        message:
          "Review deleted successfully"
      });

    } catch (error) {
      next(error);
    }
  };

export const getMovieReviews =
  async (req, res, next) => {
    try {

      const {
        page,
        limit
      } = req.query;

      const reviews =
        await reviewService
          .getMovieReviewsService(
            req.params.movieId,
            Number(page),
            Number(limit)
          );

      return res.status(200).json({
        success: true,
        reviews
      });

    } catch (error) {
      next(error);
    }
  };

export const getSingleReview =
  async (req, res, next) => {
    try {

      const review =
        await reviewService
          .getSingleReviewService(
            req.params.reviewId
          );

      return res.status(200).json({
        success: true,
        review
      });

    } catch (error) {
      next(error);
    }
  };