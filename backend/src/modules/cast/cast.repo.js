import { Cast } from "./movieCast.model.js";

export const castRepository = {
  async getMovieCast(
    movieId
  ) {

    return Cast.find({
      movie: movieId,
    })
      .populate({
        path: "person",
        select: "name profileImage",
      })
      .sort({
        rolePriority: 1,
      });
  },
  async createMovieCast(payload) {
    return Cast.create(payload)
  },
  async getMovieCast(movieId) {
    return Cast.find({
      movie: movieId,
    })
      .populate(
        "person",
        "name profileImage"
      )
      .sort({
        rolePriority: 1,
      });
  },
  async updateMovieCast(castId, payload) {
    return MovieCast.findByIdAndUpdate(
      castId,
      payload,
      {
        new: true,
      }
    );
  },
  async deleteMovieCast(castId) {
    return MovieCast.findByIdAndDelete(
      castId
    );
  }
}