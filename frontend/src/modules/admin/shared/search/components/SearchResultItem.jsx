const SearchResultItem = ({
  item,
  onClick,
}) => {

  return (

    <button

      type="button"

      onClick={onClick}

      className="
        flex
        w-full
        items-center
        justify-between
        px-4
        py-3
        text-left
        transition-colors
        hover:bg-gray-100
      "
    >
      <div>

        <p className="font-medium">
          {item.title}
        </p>

        <p
          className="
            text-xs
            text-gray-400
          "
        >
          {item.type}
        </p>
      </div>
    </button>
  )
}

export default SearchResultItem