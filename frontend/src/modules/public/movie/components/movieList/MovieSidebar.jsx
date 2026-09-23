import FormatFilter from "./FormatFilter"
import GenreFilter from "./GenreFilter"
import LanguageFilter from "./LanguageFilter"


const MovieSidebar = () => {

  return (
    <div>

      <h2 className="
        text-2xl
        font-bold
        mb-5
      ">
        Filters
      </h2>

      <LanguageFilter />
      
      <GenreFilter />

      <FormatFilter />

      <button className="
        w-full
        border
        border-red-500
        text-red-500
        rounded-md
        py-1.5
        mt-4
      ">
        Browse by Cinemas
      </button>

    </div>
  )
}

export default MovieSidebar