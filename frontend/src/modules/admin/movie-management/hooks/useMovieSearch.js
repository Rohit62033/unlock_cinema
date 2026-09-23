import { useQuery }
from '@tanstack/react-query'
import { searchMoviesAPI } from '../api/searchMovie.api.js'



export const useMovieSearch =
  (query) => {

    return useQuery({

      queryKey: [
        'movie-search',
        query
      ],

      queryFn: () =>
        searchMoviesAPI(query),

      enabled:
        query.length >= 2,

      staleTime:
        1000 * 60 * 5,
    })
  }