export const movieCacheKeys = {

  details: (movieId) =>
    `movie:${movieId}:details`,

  listing: ({
    city,
    language,
    genre,
    page,
    limit
  }) =>
    [
      'movies',

      city || '',

      language || '',

      genre || '',

      page,

      limit
    ].join(':'),

  search: (query) =>
    `search:${query}`,

  details: (movieId) =>
  `movie:${movieId}:details`,

  trending: () =>
  'movies:trending',

  editDetails: (movieId) =>
  `movie:${movieId}:edit`,
}


export const invalidateMovieCaches =
  async (
    redisService,
    movieId
  ) => {

    await Promise.all([

      redisService.del(
        movieCacheKeys.details(
          movieId
        )
      ),

      redisService.del(
        movieCacheKeys.editDetails(
          movieId
        )
      ),

      redisService.deletePattern(
        'movies:*'
      ),

      redisService.deletePattern(
        'movies:search:*'
      ),
    ])
  }