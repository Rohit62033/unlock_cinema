import { useQuery }
from '@tanstack/react-query'

import {
  getGenresAPI
}
from '../api/getGenres.api'

export const useGenres =
  () => {

    return useQuery({

      queryKey: ['genres'],

      queryFn:
        getGenresAPI,
    })
  }