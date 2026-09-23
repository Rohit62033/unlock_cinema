import { useQuery }
from '@tanstack/react-query'

import {
  getMoviesAPI
}
from '../api/getMovies.api'
 
export const useMovies =
  (filters) => {

    return useQuery({

      queryKey: [
        'movies',
        filters
      ],

      queryFn: () =>
        getMoviesAPI(
          filters
        ),
    })
  }