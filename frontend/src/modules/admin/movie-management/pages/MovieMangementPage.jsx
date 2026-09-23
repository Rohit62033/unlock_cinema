import { useState } from 'react'

import { useMovies } from '../hooks/useMovies.js'
import MoviePageHeader from '../components/header/MoviePageHeader.jsx'
import MovieTable from '../components/table/MovieTable.jsx'
import MoviePagination from '../components/pagination/MoviePagination.jsx'
import TopNavbar from '@/components/layout/admin/TopNavbar.jsx'
import MovieDashboardOverview from '../components/header/MovieDashboardOverview .jsx'
import QuickCastManagement from '../components/cast/QuickCastManagement.jsx'
import RecentUpdates from '../components/activity/RecentUpdates.jsx'
import TopHeader from '../../shared/layout/components/TopHeader.jsx'





const MovieManagementPage = () => {

  const [search, setSearch] =
    useState('')

  const [filters, setFilters] =
    useState({
      page: 1,
      limit: 10,
      search: '',
      genre: 'ALL',
      status: 'ALL',
    })

  const {
    data,
    isLoading,
  } = useMovies(filters)  

  return (

    <div className="">
      {/* <TopNavbar
        searchPlaceholder='Search movies, directors, or IDs...'
        searchValue={search}
        onSearchChange={setSearch}
      /> */}

      <TopHeader/>
      <MoviePageHeader />



      <MovieDashboardOverview
        filters={filters}
        setFilters={setFilters}
      />

      <MovieTable
        movies={data?.data?.movies || []}
        isLoading={isLoading}
      />

      <MoviePagination
        currentPage={
          data?.data?.pagination
            ?.page || 1
        }
        totalPages={
          data?.data?.pagination
            ?.totalPages || 1
        }
        onPageChange={(page) =>
          setFilters((prev) => ({
            ...prev,
            page,
          }))
        }
      />

      <div
        className="
    grid
    grid-cols-1
    gap-6
    lg:grid-cols-3
    mt-10
    mx-4
  "
      >
        {/* QUICK CAST */}

        <div className="lg:col-span-2">
          <QuickCastManagement />
        </div>

        {/* RECENT UPDATES */}

        <RecentUpdates />
      </div>
    </div>
  )
}

export default MovieManagementPage