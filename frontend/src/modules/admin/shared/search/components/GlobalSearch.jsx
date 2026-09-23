import {
  useState
} from 'react'

import {
  useNavigate
} from 'react-router-dom'



import {
  useGlobalSearch
} from '../hooks/useGlobalSearch'

import {
  SEARCH_ROUTE_MAP
} from '../constants/searchRouteMap'

import SearchDropdown
  from './SearchDropdown'
import useDebounce from '@/hooks/useDebouce'

const GlobalSearch = () => {

  const navigate =
    useNavigate()

  const [search,
    setSearch] =
    useState('')

  /* DEBOUNCE */

  const debouncedSearch =
    useDebounce(
      search,
      400
    )

  /* SEARCH QUERY */

  const {

    data: results = [],

    isLoading,
  }
    = useGlobalSearch(
      debouncedSearch
    )

  /* NAVIGATE */

  const handleSelect =
    (item) => {

      const routeBuilder =

        SEARCH_ROUTE_MAP[
        item.type
        ]

      if (!routeBuilder)
        return

      navigate(
        routeBuilder(
          item.id
        )
      )

      setSearch('')
    }

  return (

    <div
      className="
        relative
        w-full
        max-w-md
      "
    >
      {/* INPUT */}

      <input

        value={search}

        onChange={(event) =>
          setSearch(
            event.target.value
          )
        }

        placeholder="Search movies, directors, or IDs..."

        className="
           w-full
            rounded-xs
            border
            bg-gray-200
            px-4
            py-2
            outline-none
        "
      />

      {/* RESULTS */}

      {
        debouncedSearch.length >= 2 && (

          <SearchDropdown

            results={results}

            isLoading={isLoading}

            onSelect={handleSelect}
          />
        )
      }
    </div>
  )
}

export default GlobalSearch