import mongoose from "mongoose";

const reviewSchema =
  new mongoose.Schema(
    {
      movie: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Movie",
        required: true,
        index: true
      },

      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
        index: true
      },

      rating: {
        type: Number,
        required: true,
        min: 1,
        max: 5
      },

      title: {
        type: String,
        trim: true
      },

      comment: {
        type: String,
        required: true,
        trim: true
      },

      isEdited: {
        type: Boolean,
        default: false
      },

      likesCount: {
        type: Number,
        default: 0,
      },

      tags: [String],
    },
    {
      timestamps: true,
    }
  );

reviewSchema.index(
  { movie: 1, user: 1 },
  { unique: true }
);

export const Review =
  mongoose.model(
    "Review",
    reviewSchema
  );