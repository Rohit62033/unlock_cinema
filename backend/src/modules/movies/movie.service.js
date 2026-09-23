import { Booking } from '../bookings/booking.model.js'
import { movieRepository } from './movie.repo.js'
import { castRepository } from '../cast/cast.repo.js'
import { crewRepository } from '../crew/crew.repo.js'
import * as reviewRepository from '../review/review.repo.js'
import { errorFactory } from '../../errors/errorFactory.js'
import redisClient from '../../config/redisClient.js';
import { redisService } from '../../utils/redisService.js';
import { ERROR_CODES } from '../../errors/errorCodes.js';
import { HTTP_STATUS } from '../../constants/httpStatus.js';
import { serializeMovieDetails } from './get-movie-details/serializers/movieDetails.serializer.js'


export const createMovie = async (userId, data) => {


  const movieDetails = {
    title: data.title,
    description: data.description,
    genres: data.genres,
    languages: data.languages,
    duration: data.duration,
    releaseDate: data.releaseDate,
    poster: {
      url: data.url,
      public_id: data.public_id,
    },
    certification: data.certification,
    // cast: data.cast,
    // director: data.director,
    createdBy: userId
  }

  const movie = await movieRepository.createMovie(movieDetails)
  return movie
}

export const getMovies = async (query) => {

  const {
    limit,
    city,
    language,
    genre,
    page = 1
  } = query


  const pageNumber = Number(page) || 1

  const limitNumber =
    Math.min(Number(limit) || 20, 50)

  // Pagination
  const skip =
    (pageNumber - 1) * limitNumber

  // Cache Key
  const cacheKey = [

    "movies",

    city || "",

    language || "",

    genre || "",

    pageNumber,

    limitNumber

  ].join(":")
  // Check Redis
  const cachedMovies =
    await redisService.get(cacheKey)

  if (cachedMovies) {

    console.log("MOVIE CACHE HIT");

    return cachedMovies
  }

  console.log("MOVIE CACHE MISS");

  const filters = {

    city,
    language,
    genre
  };



  const result =
    await movieRepository.findMoviesWithActiveShows({

      filters,

      skip,

      limit: limitNumber
    });


  const response = {

    movies: result.movies,

    totalMovies:
      result.totalMovies,

    totalPages: Math.ceil(
      result.totalMovies / limitNumber
    ),

    page: pageNumber
  };

  // Store In Redis
  // await redisService.set(
  //   cacheKey,
  //   response,
  //   601
  // )
 

  return response
}

export const getMovieById = async (id) => {

  const movie = await movieRepository.findMovieById(id)

  if (!movie) throw errorFactory.movie.movieNotFound()

  return movie
}

export const updateMovie = async (id, data) => {

  const allowedUpdates = [
    'title', 'description', 'genres', 'languages',
    'duration', 'releaseDate', 'poster', 'certification',
    'cast', 'director', 'rating', 'isActive'
  ];

  let toUpdate = {}

  // Dynamically build the update object based on received data
  for (const key in data) {
    if (allowedUpdates.includes(key)) {
      toUpdate[key] = data[key];
    }
  }



  const movie = await movieRepository.findMovieByIdAndUpdate(id, toUpdate);


  if (!movie) throw errorFactory.movie.movieNotFound()

  await redisService.del(`movie:${id}:details`)

  return movie
}

export const deleteMovie = async (id) => {
  const movie = await movieRepository.deleteMovieById(id)

  if (!movie) throw errorFactory.movie.movieNotFound()

  return movie
}

export const getTrendingMovies = async () => {
  const result = await Booking.aggregate([

    // Matching booking that are confirmed
    { $match: { status: "confirmed" } },

    // Join show
    {
      $lookup: {
        from: "shows",
        let: { showId: "$show" },
        pipeline: [
          {
            $match: {
              $expr: { $eq: ["$_id", "$$showId"] }
            },
          },
          {
            $project: {
              movie: 1
            },
          },
        ],
        as: "showData",
      }

    },

    { $unwind: "$showData" },

    //join movie
    {
      $lookup: {
        from: "movies",
        let: { movieId: "$showData.movie" },
        pipeline: [
          {
            $match: {
              $expr: { $eq: ["$_id", "$$movieId"] },

            }
          },
          {
            $project: {
              title: 1,
              poster: 1
            }
          }
        ],
        as: "movieData",
      }
    },
    { $unwind: "$movieData" },

    //seats count
    {
      $addFields: {
        seatCount: {
          $size: { $ifNull: ["$seats", []] },
        }
      }
    },
    //Group
    {
      $group: {
        _id: "$movieData._id",
        title: { $first: "$movieData.title" },
        poster: { $first: "$movieData.poster" },
        totalBooking: { $sum: 1 },
        totalSeatsBooked: { $sum: "$seatCount" },
      }
    },

    {
      $sort: { totalSeatsBooked: -1 },

    },
    { $limit: 10 }
  ])


  return result
}

export const getTrendingSearchService = async () => {
  return [
    { id: "69bd1f8c5be815562bfc2c48", title: "Interstellar", type: "movie" },
    { id: "69bd1f8c5be815562bfc2c4b", title: "Endgame", type: "movie" },
    { id: "69bd1f8c5be815562bfc2c4d", title: "Jawan", type: "movie" }
  ];
}

export const searchMoviesService = async (query) => {
  const cacheKey = `search:${query}`

  const cached = await redisClient.get(cacheKey)

  if (cached) {

    return res.json(JSON.parse(cached))
  }

  const movies = await movieRepository.findTrendingSearch(query)

  const formatted = movies.map((m) => ({
    id: m._id,
    title: m.title,
    type: "movie"
  }))


  await redisClient.setEx(cacheKey, 300, JSON.stringify(formatted))

  
  return formatted
}


export const getMovieDetailsService =
  async (movieId) => {

    const cacheKey =
      `movie:${movieId}:details`;

    try {

      const cachedMovie =
        await redisService.get(cacheKey);

      if (cachedMovie) {
                
        return cachedMovie;
      }

    } catch (error) {
      console.error("Redis GET failed", error);
    }

    const movie =
      await movieRepository.findMovieById(movieId);

    if (!movie) {
      throw new AppError(
        "Movie not found",
        HTTP_STATUS.NOT_FOUND,
        ERROR_CODES.NO_MOVIE_FOUND
      );
    }

    const [
      cast,
      crew,
      reviews,
      recommendedMovies,
    ] = await Promise.all([

      castRepository.getMovieCast(movieId),

      crewRepository.getMovieCrew(movieId),

      reviewRepository
        .getMovieReviewsData(movieId),

      movieRepository
        .getRecommendedMovies(
          movieId,
          movie.genres
        )
    ]);

   const response =
  serializeMovieDetails({
    movie,
    cast,
    crew,
    reviews,
    recommendedMovies
  });


    try {

      await redisService.set(
        cacheKey,
        response,
        600
      );

    } catch (error) {
      console.error("Redis SET failed", error);
    }

    return response;
  };

export const updateMovieStats =
  async (
    movieId,
    averageRating,
    totalReviews
  ) => {

    return movieRepository.findMovieAndUpdateReviewStats(movieId, averageRating, totalReviews)
  };