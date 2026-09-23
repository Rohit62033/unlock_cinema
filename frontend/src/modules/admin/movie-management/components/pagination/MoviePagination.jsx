import { ChevronLeft, ChevronRight } from "lucide-react"

const MoviePagination = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  return (
    <div
      className="
        flex
        items-center
        justify-between
        border-t
        bg-white
        px-6
        py-4 
        mx-4
        rounded-lg
        m
      "
    >
      <p className="text-sm text-gray-500">
        Current Page: {currentPage}
      </p>

      <div className="flex gap-2">
        <button
          disabled={currentPage === 1}
          onClick={() =>
            onPageChange(currentPage - 1)
          }
          className="
            rounded-lg
            border
              px-2
            py-1.5
          "
        >
          <ChevronLeft />
        </button>

        {Array.from({
          length: totalPages,
        }).map((_, index) => {
          const page = index + 1

          return (
            <button
              key={page}
              onClick={() =>
                onPageChange(page)
              }
              className={`
                rounded-lg
                border
                px-4
                py-2

                ${currentPage === page
                  ? 'bg-primary text-white'
                  : ''
                }
              `}
            >
              {page}
            </button>
          )
        })}

        <button
          disabled={
            currentPage === totalPages
          }
          onClick={() =>
            onPageChange(currentPage + 1)
          }
          className="
            rounded-lg
            border
            px-2
            py-1.5
          "
        >
          <ChevronRight />
        </button>
      </div>
    </div>
  )
}

export default MoviePagination