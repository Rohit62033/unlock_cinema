import SearchResultItem
from './SearchResultItem'

const SearchDropdown = ({
  results,
  isLoading,
  onSelect,
}) => {

  return (

    <div
      className="
        absolute
        top-full
        mt-2
        w-full
        overflow-hidden
        rounded-md
        border
        bg-white
        shadow-lg
        z-50
      "
    >
      {
        isLoading ? (

          <div className="p-4 text-sm">
            Searching...
          </div>

        ) : results.length ? (

          results.map((item) => (

            <SearchResultItem

              key={`${item.type}-${item.id}`}

              item={item}

              onClick={() =>
                onSelect(item)
              }
            />
          ))

        ) : (

          <div
            className="
              p-4
              text-sm
              text-gray-500
            "
          >
            No results found
          </div>
        )
      }
    </div>
  )
}

export default SearchDropdown