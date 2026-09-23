import { HTTP_STATUS } from "../../constants/httpStatus.js"
import { AppError } from "../../errors/AppErrors.js"
import { ERROR_CODES } from "../../errors/errorCodes.js"
import { Show } from "../shows/show/show.model.js"
import { Movie } from "./movie.model.js"


export const movieRepository = {
  async createMovie(data) {
    try {
      return await Movie.create(data)

    } catch (error) {
      throw new AppError(
        "Failed to create movie",
        HTTP_STATUS.CONFLICT,
        ERROR_CODES.DATABASE_ERROR
      )
    }
  },
  async findMovieById(id) {
    try {
      return await Movie.findById(id).select("-__v").populate("genres", "name")
    } catch (error) {
      throw new AppError(
        "Failed to fetch movie",
        HTTP_STATUS.CONFLICT,
        ERROR_CODES.DATABASE_ERROR
      )
    }
  },

  async findMovieForEdit(movieId) {

    return Movie.findOne({

      _id: movieId,


    })

      .populate(
        'genres',
        'name slug color'
      )


  },
  async findMovie(filter, skip, limitNumber) {
    try {
      return await Movie
        .find(filter)
        .skip(skip)
        .limit(limitNumber)
        .sort({ created: -1 })
    } catch (error) {
      throw new AppError(
        "Failed to find movie",
        HTTP_STATUS.CONFLICT,
        ERROR_CODES.DATABASE_ERROR
      )
    }
  },
  async updateMovie
    (
      movieId,
      payload
    ) {

    return Movie.findByIdAndUpdate(

      movieId,

      payload,

      {
        new: true,
      }
    )
  },
  async softDeleteMovie
    (movieId) {

    return Movie.findByIdAndUpdate(

      movieId,

      {

        isDeleted: true,

        deletedAt:
          new Date(),
      },

      {
        new: true,
      }
    )
  },
  async countMovieDocument(filter) {
    try {
      return await Movie.countDocuments(filter)
    } catch (error) {
      throw new AppError(
        "Failed to count  movie",
        HTTP_STATUS.CONFLICT,
        ERROR_CODES.DATABASE_ERROR
      )
    }
  },
  async findMovieByIdAndUpdate(id, toUpdate) {
    try {
      return await Movie.findByIdAndUpdate(id, toUpdate, { new: true })
    } catch (error) {
      throw new AppError(
        "Failed to update movie",
        HTTP_STATUS.CONFLICT,
        ERROR_CODES.DATABASE_ERROR
      )
    }
  },
  async deleteMovieById(id) {
    try {
      return await Movie.findByIdAndUpdate(id, { $set: { isActive: false } })
    } catch (error) {
      throw new AppError(
        "Failed to delete movie",
        HTTP_STATUS.CONFLICT,
        ERROR_CODES.DATABASE_ERROR
      )
    }
  },
  async searchMovies(query) {
    try {
      return await Movie.find({
        title: { $regex: query, $options: 'i' },
        isDeleted: false,

      })
        .select('_id title')
        .limit(10)
        .lean()

    } catch (error) {
      throw new AppError(
        "Failed to fetch trending search",
        HTTP_STATUS.CONFLICT,
        ERROR_CODES.DATABASE_ERROR
      )
    }
  },
  // async findMoviesWithActiveShows({
  //   filters = {},
  //   skip = 0,
  //   limit = 20,
  // }) {

  
    
  //   const {
  //     city,
  //     language,
  //     genre,
  //   } = filters;

  //   const now = new Date();

  //   const genreSlugs = genre
  //     ? genre
  //       .split(",")
  //       .map((item) => item.trim())
  //       .filter(Boolean)
  //     : [];

  //   const pipeline = [

  //     // --------------------------------------------------
  //     // 1. Find active/upcoming shows
  //     // --------------------------------------------------
  //     {
  //       $match: {
  //         status: "scheduled",

  //         startTime: {
  //           $gte: now,
  //         },

  //         ...(language && {
  //           language,
  //         }),
  //       },
  //     },

  //     // --------------------------------------------------
  //     // 2. Lookup theatre
  //     // --------------------------------------------------
  //     {
  //       $lookup: {
  //         from: "theatres",

  //         localField: "theatre",

  //         foreignField: "_id",

  //         as: "theatre",
  //       },
  //     },

  //     {
  //       $unwind: "$theatre",
  //     },

  //     // --------------------------------------------------
  //     // 3. Only active theatres
  //     // --------------------------------------------------
  //     {
  //       $match: {
  //         "theatre.isActive": true,
  //       },
  //     },

  //     // --------------------------------------------------
  //     // 4. Lookup city
  //     // --------------------------------------------------
  //     {
  //       $lookup: {
  //         from: "cities",

  //         localField: "theatre.city",

  //         foreignField: "_id",

  //         as: "city",
  //       },
  //     },

  //     {
  //       $unwind: "$city",
  //     },

  //     // --------------------------------------------------
  //     // 5. Only active cities + optional city filter
  //     // --------------------------------------------------
  //     {
  //       $match: {
  //         "city.isActive": true,

  //         ...(city && {
  //           "city.name": {
  //             $regex: new RegExp(`^${city.trim()}$`, "i"),
  //           },
  //         }),
  //       },
  //     },

  //     // --------------------------------------------------
  //     // 6. Lookup movie
  //     // --------------------------------------------------
  //     {
  //       $lookup: {
  //         from: "movies",

  //         localField: "movie",

  //         foreignField: "_id",

  //         as: "movie",
  //       },
  //     },

  //     {
  //       $unwind: "$movie",
  //     },

  //     // --------------------------------------------------
  //     // 7. Only publicly available movies
  //     // --------------------------------------------------
  //     {
  //       $match: {
  //         "movie.status": "LIVE",

  //         "movie.isActive": true,

  //         "movie.isDeleted": false,
  //       },
  //     },

  //     // --------------------------------------------------
  //     // 8. Lookup genres
  //     // --------------------------------------------------
  //     {
  //       $lookup: {
  //         from: "genres",

  //         let: {
  //           genreIds: "$movie.genres",
  //         },

  //         pipeline: [
  //           {
  //             $match: {
  //               $expr: {
  //                 $in: [
  //                   "$_id",
  //                   "$$genreIds",
  //                 ],
  //               },
  //             },
  //           },

  //           {
  //             $project: {
  //               _id: 1,
  //               name: 1,
  //               slug: 1,
  //               color: 1,
  //             },
  //           },
  //         ],

  //         as: "movieGenres",
  //       },
  //     },

  //     // --------------------------------------------------
  //     // 9. Optional genre filter
  //     // --------------------------------------------------
  //     ...(genreSlugs.length > 0
  //       ? [
  //         {
  //           $match: {
  //             "movieGenres.slug": {
  //               $in: genreSlugs,
  //             },
  //           },
  //         },
  //       ]
  //       : []),

  //     // --------------------------------------------------
  //     // 10. Replace movie genres with populated genres
  //     // --------------------------------------------------
  //     {
  //       $set: {
  //         "movie.genres": "$movieGenres",
  //       },
  //     },

  //     // --------------------------------------------------
  //     // 11. Remove duplicate movies
  //     //
  //     // A movie may have:
  //     //   Show 1 → Theatre A
  //     //   Show 2 → Theatre B
  //     //   Show 3 → Theatre C
  //     //
  //     // We only want the movie once.
  //     // --------------------------------------------------
  //     {
  //       $group: {
  //         _id: "$movie._id",

  //         movie: {
  //           $first: "$movie",
  //         },
  //       },
  //     },

  //     // --------------------------------------------------
  //     // 12. Convert grouped result back to movie document
  //     // --------------------------------------------------
  //     {
  //       $replaceRoot: {
  //         newRoot: "$movie",
  //       },
  //     },

  //     // --------------------------------------------------
  //     // 13. Pagination + total count
  //     // --------------------------------------------------
  //     {
  //       $facet: {
  //         movies: [
  //           {
  //             $sort: {
  //               createdAt: -1,
  //               _id: 1,
  //             },
  //           },

  //           {
  //             $skip: skip,
  //           },

  //           {
  //             $limit: limit,
  //           },
  //         ],

  //         totalCount: [
  //           {
  //             $count: "count",
  //           },
  //         ],
  //       },
  //     },
  //   ];

  //   const result = await Show.aggregate(pipeline);

  //   const data = result[0] || {};

  //   return {
  //     movies: data.movies || [],

  //     totalMovies:
  //       data.totalCount?.[0]?.count || 0,
  //   };
  // },

  async findMoviesWithActiveShows({
    filters,
    skip,
    limit
  }) {




    const {
      city,
      language,
      genre
    } = filters

    const result = await Show.aggregate([

      // Active scheduled future shows
      {
        $match: {

          status: "scheduled",

          startTime: {
            $gte: new Date()
          },

          ...(language && {
            language
          }),

        }
      },

      // Theatre lookup
      {
        $lookup: {

          from: "theatres",

          localField: "theatre",

          foreignField: "_id",

          as: "theatre"
        }
      },

      {
        $unwind: "$theatre"
      },

      // Only active theatres
      {
        $match: {
          "theatre.isActive": true
        }
      },

      // City lookup
      {
        $lookup: {

          from: "cities",

          localField: "theatre.city",

          foreignField: "_id",

          as: "city"
        }
      },

      {
        $unwind: "$city"
      },

      // Active city filter
      {
        $match: {

          "city.isActive": true,

          ...(city && {
            "city.name": {
              $regex: new RegExp(`^${city}$`, "i")
            }
          })
        }
      },

      // Movie lookup
      {
        $lookup: {

          from: "movies",

          localField: "movie",

          foreignField: "_id",

          as: "movie"
        }
      },

      {
        $unwind: "$movie"
      },

      // GENRE lookup
      {
        $lookup: {

          from: "genres",

          let: {

            genreIds:
              "$movie.genres"
          },

          pipeline: [

            {
              $match: {

                $expr: {

                  $in: [

                    "$_id",

                    "$$genreIds"
                  ]
                }
              }
            },

            {
              $project: {

                name: 1,

                slug: 1,

                color: 1,
              }
            }
          ],

          as: "movieGenres"
        }
      },
      {
        $match: {

          "movie.isActive": true,

          ...(genre && {

            "movieGenres.slug": {

              $in:
                genre.split(",")
            }
          })
        }
      },

      {
        $addFields: {

          "movie.genres":
            "$movieGenres"
        }
      },
      // Remove duplicate movies
      {
        $group: {

          _id: "$movie._id",

          movie: {
            $first: "$movie"
          }
        }
      },

      // Replace root with movie document
      {
        $replaceRoot: {
          newRoot: "$movie"
        }
      },

      // Pagination + total count
      {
        $facet: {

          movies: [

            {
              $sort: {
                createdAt: -1
              }
            },

            {
              $skip: skip
            },

            {
              $limit: limit
            }
          ],

          totalCount: [

            {
              $count: "count"
            }
          ]
        }
      }
    ])

    return {

      movies:
        result[0]?.movies || [],

      totalMovies:
        result[0]?.totalCount?.[0]?.count || 0
    }
  },
  async updateMovieRating(movieId, rating) {
    const movie =
      await Movie.findById(movieId);

    const updatedVotes =
      movie.rating.totalVotes + 1;

    const updatedTotalRating =
      movie.rating.totalRating + rating;

    const average =
      updatedTotalRating /
      updatedVotes;

    movie.rating = {
      average: Number(
        average.toFixed(1)
      ),

      totalVotes: updatedVotes,

      totalRating:
        updatedTotalRating,
    };

    await movie.save();
  },
  async getRecommendedMovies(movieId, genres) {

    return Movie.find({
      _id: {
        $ne: movieId,
      },

      genres: {
        $in: genres,
      },
    })
      .limit(10)
      .select(
        "title poster rating"
      ).lean();
  },

  async findMovieAndUpdateReviewStats(movieId, averageRating, totalReviews) {
    Movie.findByIdAndUpdate(
      movieId,
      {
        averageRating,
        totalReviews
      }
    );
  },

  async findMovieBySlug
    (slug) {

    return Movie.findOne({
      slug
    })
  },

  async getTrendingMovies
    () {

    return Movie.find({

      isDeleted: false,

      status: 'LIVE',
    })

      .sort({

        averageRating: -1,

        totalReviews: -1,

        createdAt: -1,
      })

      .limit(10)

      .select(`
        title
        slug
        poster
        averageRating
        totalReviews
        releaseDate
      `)
  }
  ,
  async publishMovie(movieId) {

    return Movie.findByIdAndUpdate(

      movieId,

      {

        status: 'LIVE',

        publishedAt:
          new Date(),
      },

      {
        new: true,
      }
    )
  },
  async findSchedulableMovie(movieId, session = null) {
    let query = Movie.findOne({
      _id: movieId,
      isDeleted: false,
      status: "LIVE",
    });

    if (session) {
      query = query.session(session);
    }

    return query.lean();
  }

}
