const MovieCardSkeleton = () => {

  return (
    <div className="animate-pulse">

      <div className="
        bg-gray-300
        aspect-[2/3]
        rounded-xl
      " />

      <div className="
        h-5
        bg-gray-300
        rounded
        mt-3
      " />

      <div className="
        h-4
        bg-gray-300
        rounded
        mt-2
        w-2/3
      " />

    </div>
  )
}

export default MovieCardSkeleton