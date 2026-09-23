import { ChevronLeft, Share2, Star } from "lucide-react";

const MobileHero = ({ movie }) => {
  return (
    <section className="bg-white pb-5 inset-0 top-0 relative">

      {/* Top Navigation */}
      <div className="flex items-center justify-between px-4 py-4">

        <div className="flex items-center gap-3">

          <ChevronLeft size={22} />

          <h1 className="text-sm font-medium truncate max-w-55">
            {movie.title}
          </h1>

        </div>

        <Share2 size={20} />

      </div>

      {/* Poster */}
      <div className="px-3">

        <div className="rounded-2xl overflow-hidden relative">

          <img
            src={movie.poster}
            alt=""
            className="w-full
      h-[30vh]
      object-cover
      object-center"
          />

          {/* Trailer Button */}
          {/* <button className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/70 text-white text-xs px-4 py-2 rounded-full">
            ▶ Trailers (3)
          </button> */}

          {/* Bottom Label */}
          <div className="absolute bottom-0 w-full bg-black/80 text-center text-white text-xs py-2 font-medium">
            In cinemas
          </div>

        </div>

      </div>

      {/* Rating Card */}
      <div className="px-3 mt-4">

        <div className="bg-[#F5F5F5] rounded-xl p-4 flex items-center justify-between">

          <div className="flex items-center gap-2">

            <Star
              fill="#F84464"
              color="#F84464"
              size={18}
            />

            <div className="flex items-center gap-1">

              <span className="font-bold text-lg">
                {movie.rating}/10
              </span>

              <span className="text-xs text-gray-600">
                ({movie?.votes}+ Votes)
              </span>

            </div>
          </div>

          <button className="border border-red-400 text-red-500 text-xs px-3 py-1 rounded-md">
            Rate now
          </button>

        </div>

      </div>

      {/* Metadata */}
      <div className="px-3 mt-4">

        <p className="text-xs leading-6 text-gray-700">
          {movie?.duration} •{" "}
          {/* {movie.genres.join(", ")} • UA •{" "} */}
          {movie?.releaseDate}
        </p>

        <div className="flex gap-2 mt-3">

          <span className="bg-gray-200 px-2 py-1 text-xs rounded">
            2D
          </span>

          <span className="bg-gray-200 px-2 py-1 text-xs rounded">
            {/* {movie?.languages.join(", ")} */}
          </span>

        </div>

      </div>

      {/* Description */}
      <div className="px-3 mt-5">

        <p className="text-sm text-gray-700 leading-7">
          {movie?.description}
        </p>

      </div>

      {/* Trending Card */}
      {/* <div className="px-3 mt-5">

        <div className="border border-blue-200 rounded-lg px-4 py-3 bg-blue-50">

          <p className="text-sm text-blue-700 font-medium">
            📈 Trending
          </p>

          <p className="text-sm text-blue-600 mt-1">
            1.24K tickets booked in last 1 hour
          </p>

        </div>

      </div> */}

    </section>
  );
};

export default MobileHero;