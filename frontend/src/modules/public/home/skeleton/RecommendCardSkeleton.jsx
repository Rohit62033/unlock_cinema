const RecommendedCardSkeleton = () => {

  return (

    <div className="
      flex-none
      w-40
      md:w-56
    ">

      {/* Poster */}
      <div className="
        shimmer
        aspect-[2/3]
        rounded-xl
      " />

      {/* Title */}
      <div className="
        shimmer
        h-5
        rounded
        mt-3
        w-4/5
      " />

      {/* Genre */}
      <div className="
        shimmer
        h-4
        rounded
        mt-2
        w-2/3
      " />

    </div>
  )
}

export default RecommendedCardSkeleton