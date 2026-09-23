import { useQuery }
from '@tanstack/react-query'

import {
  getMovieAPI
}
from '../api/getMovie.api'

export const useMovie =
  (movieId) => {

    return useQuery({

      queryKey: [
        'movie',
        movieId
      ],

      queryFn: () =>
        getMovieAPI(
          movieId
        ),

      enabled:
        !!movieId,
    })
  }