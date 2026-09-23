import MovieFilters from '../filters/MovieFilters'

const stats = [
  {
    title: 'Active Movies',
    value: '124',
    growth: '+5%',
  },

  {
    title: 'Total Bookings',
    value: '12.8k',
    growth: '+12%',
  },
]

const MovieDashboardOverview = ({
  filters,
  setFilters,
}) => {
  return (
    <div
      className="
        grid
        grid-cols-1
        gap-4
        px-4
        md:grid-cols-4
        mb-6
      "
    >
      {/* FILTER SECTION */}

      <div
        className="
          relative
      z-20
          md:col-span-2
          rounded-2xl
          border
          bg-white
          p-6
         
        "
      >
        <MovieFilters
          filters={filters}
          setFilters={setFilters}
        />
      </div>

      {/* STATS */}

      {stats.map((item) => (
        <div
          key={item.title}
          className="

          
        relative
        z-0
            rounded-2xl
            border
            bg-white
            p-6
            flex
            flex-col
            justify-center
          "
        >
          <p className="text-sm text-gray-500">
            {item.title}
          </p>

          <div className="mt-3 flex items-end gap-2">
            <h3 className="text-3xl font-bold">
              {item.value}
            </h3>

            <span className="text-green-600">
              {item.growth}
            </span>
          </div>
        </div>
      ))}
    </div>
  )
}

export default MovieDashboardOverview