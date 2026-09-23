const MovieInfoHeader = ({ movie }) => {

  return (
    <div
      className="
        bg-white
        border-b 
        
      "
    >
      <div
        className="
        w-full 
          max-w-7xl
          mx-auto
          px-2 md:px-6 lg:px-8
          py-2 md:py-5 lg:py-7
         
        "
      >
        {/* TITLE */}

        <h1
          className="
          text-xl 
            md:text-3xl
            font-semibold
            text-gray-800
          "
        >
          {movie.title}
          {" "}
          -
          {" "}
          ({movie.language})
        </h1>

        {/* TAGS */}

        <div
          className="
            flex
            items-center
            gap-1
            mt-2 md:mt-4
            flex-wrap
          "
        >
          <MovieTag>
            Movie runtime:
            {" "}
            {movie.duration}
          </MovieTag>

          <MovieTag>
            {movie.certification}
          </MovieTag>

          {
            movie.genres.map((genre) => (

              <MovieTag key={genre}>
                {genre}
              </MovieTag>

            ))
          }
        </div>
      </div>
    </div>
  );
};

export default MovieInfoHeader;

function MovieTag({ children }) {
  return (
    <div
      className="
        px-1.5
        py-0.5
        rounded-full
        border
        border-gray-600
        text-gray-500
        text-xs
      "
    >
      {children}
    </div>
  );
}