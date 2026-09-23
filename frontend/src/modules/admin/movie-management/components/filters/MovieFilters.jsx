import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

const genres = [
  'ALL',
  'Action',
  'Drama',
  'Comedy',
  'Sci-Fi',
]

const statuses = [
  'ALL',
  'LIVE',
  'DRAFT',
  'ARCHIVED',
]

const FilterDropdown = ({
  label,
  options,
  value,
  placeholder,
  onChange,
}) => {
  return (
    <div className="min-w-55 shrink-0">
      {/* LABEL */}

      <p
        className="
          mb-2
          text-xs
          font-semibold
          uppercase
          tracking-wider
          text-gray-500
        "
      >
        {label}
      </p>

      {/* DROPDOWN */}

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button
            className="
              flex
              w-full
              items-center
              justify-between
              rounded-2xl
              border
              bg-gray-50
              px-4
              py-3
              transition-all
              hover:border-red-400
              hover:bg-white
            "
          >
            <span>
              {value === 'ALL'
                ? placeholder
                : value}
            </span>

            <span>▼</span>
          </button>
        </DropdownMenuTrigger>

        <DropdownMenuContent
          align="start"
          className="
            w-55
            rounded
            
          "
        >
          {options.map((item) => {
            const active =
              item === value

            return (
              <DropdownMenuItem
                key={item}
                onClick={() =>
                  onChange(item)
                }
                className={`
                  cursor-pointer

                  ${
                    active
                      ? 'bg-red-50 text-red-500'
                      : ''
                  }
                `}
              >
                {item === 'ALL'
                  ? placeholder
                  : item}
              </DropdownMenuItem>
            )
          })}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}

const MovieFilters = ({
  filters,
  setFilters,
}) => {
  return (
    <div
      className="
        flex
        gap-6
        overflow-x-auto
        no-scrollbar
        pb-2
      "
    >
      {/* GENRE */}

      <FilterDropdown
        label="Filter By Genre"
        options={genres}
        value={filters.genre}
        placeholder="All Genres"
        onChange={(genre) =>
          setFilters((prev) => ({
            ...prev,
            genre,
          }))
        }
      />

      {/* STATUS */}

      <FilterDropdown
        label="Filter By Status"
        options={statuses}
        value={filters.status}
        placeholder="All Status"
        onChange={(status) =>
          setFilters((prev) => ({
            ...prev,
            status,
          }))
        }
      />
    </div>
  )
}

export default MovieFilters