import {

  useMutation,

  useQueryClient

} from '@tanstack/react-query'

import {

  updateMovieAPI

} from '../api/updateMovie.api'

export const useUpdateMovie =
  () => {

    const queryClient =
      useQueryClient()

    return useMutation({

      mutationFn:
        ({
          movieId,
          payload
        }) =>

          updateMovieAPI({

            movieId,

            payload,
          }),

      onSuccess: (
        _,
        variables
      ) => {

        queryClient.invalidateQueries({

          queryKey: ['movies']
        })

        queryClient.invalidateQueries({

          queryKey: [

            'movie',

            variables.movieId
          ],
        })
      }
    })
  }