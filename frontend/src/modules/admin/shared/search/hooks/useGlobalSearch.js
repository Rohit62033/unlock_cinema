import { useQuery }
from '@tanstack/react-query'

import {
  globalSearchAPI
}
from '../api/globalSearch.api'

export const useGlobalSearch =
  (query) => {

    return useQuery({

      queryKey: [
        'global-search',
        query
      ],

      queryFn: () =>
        globalSearchAPI(
          query
        ),

      enabled:
        query.length >= 2,

      staleTime:
        1000 * 60 * 5,
    })
  }