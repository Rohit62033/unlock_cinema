import mongoose from "mongoose";

const movieCrewSchema =
  new mongoose.Schema({

    movie: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Movie",
    },

    person: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Person",
    },

    department: {
      type: String,
      enum: [
        "DIRECTOR",
        "WRITER",
        "PRODUCER",
        "MUSIC",
      ],
    },
  });

export const Crew = mongoose.model("Crew", movieCrewSchema)