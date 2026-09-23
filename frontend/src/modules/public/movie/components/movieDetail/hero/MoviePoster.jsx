const MoviePoster = ({ poster }) => {
  return (
    <div className=" w-full md:w-65 rounded-2xl overflow-hidden shadow-2xl max-h-[40vh] ">

      <img
        src={poster}
        alt="poster"
        className="w-full  object-cover"
      />

      <div className="bg-black py-2 text-center text-white font-semibold border-t ">
        In cinemas
      </div>

    </div>
  );
};

export default MoviePoster;