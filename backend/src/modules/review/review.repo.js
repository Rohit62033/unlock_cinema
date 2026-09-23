import mongoose from "mongoose";
import { Review } from "./review.model.js";

export const createReview = async (payload) => {
  return Review.create(payload);
};

export const findReviewByMovieAndUser =
  async (movieId, userId) => {

    return Review.findOne({
      movie: movieId,
      user: userId
    });
  };

export const findReviewById = async (reviewId) => {
  return Review.findById(reviewId);
};

export const updateReview = async (
  reviewId,
  payload
) => {
  return Review.findByIdAndUpdate(
    reviewId,
    payload,
    { new: true }
  );
};

export const deleteReview = async (reviewId) => {
  return Review.findByIdAndDelete(reviewId);
};

export const getSingleReview = async (
  reviewId
) => {
  return Review.findById(reviewId)
    .populate("user", "name avatar")
    .populate("movie", "title poster");
};

export const aggregateMovieRatings =
  async (movieId) => {

    return Review.aggregate([
      {
        $match: {
          movie:
            new mongoose.Types.ObjectId(
              movieId
            )
        }
      },

      {
        $group: {
          _id: "$movie",

          averageRating: {
            $avg: "$rating"
          },

          totalReviews: {
            $sum: 1
          }
        }
      }
    ]);
  };

export const getMovieReviewsData = async (
  movieId,
  page = 1,
  limit = 10
) => {

  const skip = (page - 1) * limit;

  const [
    reviews,
    totalReviews,
    averageRating
  ] = await Promise.all([

    Review.find({
      movie: movieId
    })
      .populate("user", "name avatar")
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit)
      .lean(),

    Review.countDocuments({
      movie: movieId
    }),

    Review.aggregate([
      {
        $match: {
          movie:
            new mongoose.Types.ObjectId(
              movieId
            )
        }
      },
      {
        $group: {
          _id: null,

          averageRating: {
            $avg: "$rating"
          }
        }
      }
    ])
  ]);

  return {
    summary: {
      averageRating:
        averageRating[0]?.averageRating || 0,

      totalReviews
    },

    items: reviews,

    pagination: {
      page,
      limit,
      totalPages:
        Math.ceil(totalReviews / limit)
    }
  };
};

export const getMovieReviews = async (
  movieId,
  page = 1,
  limit = 10
) => {

  const skip = (page - 1) * limit;

  const [reviews, totalReviews] =
    await Promise.all([

      Review.find({
        movie: movieId
      })
        .populate(
          "user",
          "name avatar"
        )
        .sort({
          createdAt: -1
        })
        .skip(skip)
        .limit(limit)
        .lean(),

      Review.countDocuments({
        movie: movieId
      })
    ]);

  return {
    items: reviews,

    pagination: {
      page,
      limit,
      totalReviews,

      totalPages:
        Math.ceil(
          totalReviews / limit
        ),

      hasNextPage:
        page * limit < totalReviews,

      hasPrevPage:
        page > 1
    }
  };
};