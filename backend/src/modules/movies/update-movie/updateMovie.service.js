import slugify
  from 'slugify'

import { movieRepository } from '../movie.repo.js'

import { redisService }
  from '../../../utils/redisService.js'

import {
  invalidateMovieCaches
}
  from '../shared/movie.cache.js'
import { HTTP_STATUS } from '../../../constants/httpStatus.js'
import { ERROR_CODES } from '../../../errors/errorCodes.js'
import { deleteImage } from '../../../infrastructure/cloudinary/cloudinary.service.js'

export const updateMovie =
  async (
    movieId,
    payload
  ) => {


    /* SLUG UPDATE */

    if (payload.title) {

      payload.slug =
        slugify(

          payload.title,

          {
            lower: true,

            strict: true,
          }
        )
    }

    const existingMovie =
      await movieRepository.findMovieById(
        movieId
      );

    if (!existingMovie) {
      throw new AppError(
        "Movie not found",
        HTTP_STATUS.NOT_FOUND,
        ERROR_CODES.NOT_FOUND
      );
    }

    // SAVE OLD IMAGES
    const oldPoster =
      existingMovie.poster;

    const oldBanner =
      existingMovie.banner;

    /* NEW IMAGES */

    const newPoster =
      payload.poster;

    const newBanner =
      payload.banner;

    /* CHECK WHETHER IMAGES CHANGED */

    const posterChanged =
      Boolean(
        newPoster?.public_id &&
        newPoster.public_id !==
        oldPoster?.public_id
      );


    const bannerChanged =
      Boolean(
        newBanner?.public_id &&
        newBanner.public_id !==
        oldBanner?.public_id
      );

    /* UPDATE */

    const updatedMovie =
      await movieRepository.updateMovie(

        movieId,

        payload
      )

    if (!updatedMovie) {

      throw new Error(
        'Movie not found'
      )
    }

    /* CACHE INVALIDATION */

    await invalidateMovieCaches(

      redisService,

      movieId
    )

    /* DELETE OLD POSTER */

    if (
      posterChanged &&
      oldPoster?.public_id
    ) {

      try {

        await deleteImage(
          oldPoster.public_id
        );

        console.log("old poster delete");
        
      } catch (error) {

        console.error(
          "Failed to delete old poster:",
          error
        );

        /*
         * IMPORTANT:
         *
         * Do NOT throw the error here.
         *
         * MongoDB is already updated and
         * points to the new image.
         * 
         * later cron or background jobs imolement for cleanup of orphan images if error occured (Also configure the flow later )
         */
      }
    }

    /* DELETE OLD BANNER */
    if (
      bannerChanged &&
      oldBanner?.public_id
    ) {

      try {

        await deleteImage(
          oldBanner.public_id
        );

        console.log("old banner delete");
        

      } catch (error) {

        console.error(
          "Failed to delete old banner:",
          error
        );
      }
    }



    return updatedMovie
  }