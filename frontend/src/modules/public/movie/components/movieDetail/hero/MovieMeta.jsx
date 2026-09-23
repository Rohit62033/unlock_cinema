import { formatReleaseDate } from "@/util/formatDate";

const MovieMeta = ({ movie }) => {


  return (
    // Movie Metadata
    <div>

      <p className="text-xl font-medium">
        {movie?.formattedDuration} •{" "}
        {movie?.genres.map(genre => genre.name).join(" • ")} • {movie?.certification} • {" "}
        {formatReleaseDate(
          movie.releaseDate)}

      </p>

      <div className="flex gap-3 mt-5 flex-row">

        <div className="flex gap-3 ">

          {
            movie.formats.map((format) => (

              <span
                key={format}
                className="
          bg-[#616161]
          px-3
          py-1
          rounded
        "
              >
                {format}
              </span>
            ))
          }

        </div>

        <span className="bg-[#616161] text-white px-3 py-1 rounded">
          {movie?.languages.join(" • ")}
        </span>

      </div>
    </div>
  );
};

export default MovieMeta;