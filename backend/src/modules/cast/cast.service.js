import { HTTP_STATUS } from "../../constants/httpStatus.js";
import { AppError } from "../../errors/AppErrors.js";
import { ERROR_CODES } from "../../errors/errorCodes.js";
import { movieRepository } from "../movies/movie.repo.js";
import { castRepository } from "./cast.repo.js";
import * as personRepository
  from "../person/person.repo.js";
import { redisService } from "../../utils/redisService.js";


export const createMovieCastService =
  async (payload) => {

    const {
      movie,
      person,
    } = payload;

    const [
      existingMovie,
      existingPerson,
    ] = await Promise.all([

      movieRepository.findMovieById(
        movie
      ),

      personRepository.getPersonById(
        person
      ),
    ]);

    if (!existingMovie) {
      throw new AppError("Movie not found", HTTP_STATUS.NOT_FOUND, ERROR_CODES.NO_MOVIE_FOUND)
    }

    if (!existingPerson) {
      throw new AppError("Person not found", HTTP_STATUS.NOT_FOUND, ERROR_CODES.NO_MOVIE_FOUND)
    }

    try {

      const cast = await castRepository
        .createMovieCast(payload);

      await redisService.del(
        `movie:${movie}:cast`
      );

      return cast

    } catch (error) {

      if (error.code === 11000) {

        throw new AppError("Person already added to cast", HTTP_STATUS.CONFLICT, ERROR_CODES.CONFLICT)

      }

      throw error;
    }
  };

export const getMovieCastService =
  async (movieId) => {

    const cacheKey =
      `movie:${movieId}:cast`;

    // CHECK REDIS
    const cachedCast =
      await redisService.get(
        cacheKey
      );

    if (cachedCast) {

      console.log(
        "Serving cast from Redis"
      );

      return cachedCast
    }

    console.log(
      "Serving cast from MongoDB"
    );

    // FETCH FROM DB
    const cast =
      await castRepository
        .getMovieCast(movieId);

    // STORE IN REDIS
    await redisService.set(
      cacheKey,
      cast,
      6000 * 24
    );

    return cast;
  };

// UPDATE CAST
export const updateMovieCastService =
  async (
    castId,
    payload
  ) => {

    // GET EXISTING CAST
    const existingCast =
      await castRepository
        .findMovieCastById(
          castId
        );

    if (!existingCast) {

      throw new AppError("Cast not found", HTTP_STATUS.NOT_FOUND, ERROR_CODES.NOT_FOUND)
    }

    // UPDATE
    const updatedCast =
      await castRepository
        .updateMovieCast(
          castId,
          payload
        );

    // INVALIDATE CACHE
    await redisService.del(
      `movie:${existingCast.movie}:cast`
    );

    return updatedCast;
  };

// DELETE CAST

export const deleteMovieCastService =
  async (castId) => {

    // FIND EXISTING
    const existingCast =
      await castRepository
        .findMovieCastById(
          castId
        );

    if (!existingCast) {

      throw new AppError('Cast not found', HTTP_STATUS.NOT_FOUND, ERROR_CODES.NOT_FOUND)
    }

    // DELETE
    await castRepository
      .deleteMovieCast(
        castId
      );

    // INVALIDATE CACHE
    await redisService.del(
      `movie:${existingCast.movie}:cast`
    );
  };