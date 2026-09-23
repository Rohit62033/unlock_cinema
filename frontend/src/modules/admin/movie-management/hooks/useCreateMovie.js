import {

  useMutation,

  useQueryClient

} from '@tanstack/react-query'

import {

  createMovieAPI

} from '../api/createMovie.api'

export const useCreateMovie =
  () => {

    const queryClient =
      useQueryClient()

    return useMutation({

      mutationFn:
        createMovieAPI,

      onSuccess: () => {

        queryClient.invalidateQueries({

          queryKey: ['movies']
        })
      }
    })
  }