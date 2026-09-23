import mongoose from "mongoose";

const movieCastSchema =
  new mongoose.Schema({

    movie: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Movie",
    },

    person: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Person",
    },

    characterName: String,

    roleType: String,
    
    rolePriority: Number,

  }, {
    timestamps: true,
  });

movieCastSchema.index(
  {
    movie: 1,
    person: 1,
  },
  {
    unique: true,
  }
);

export const Cast = mongoose.model("Cast", movieCastSchema)

