import RecommendedCardSkeleton from "./RecommendCardSkeleton"


const RecommendedSectionSkeleton = () => {

  return (
    <section className="py-6">

      {/* Header */}
      <div className="flex items-center justify-between mb-4">

        <div className="h-8 w-52 bg-gray-200 rounded shimmer" />

        <div className="h-5 w-16 bg-gray-200 rounded shimmer" />
      </div>

      {/* Horizontal Scroll Skeleton */}
      <div className="flex gap-4 md:gap-6 overflow-hidden">

        {
          Array.from({ length: 5 }).map((_, index) => (

            <RecommendedCardSkeleton
              key={index}
            />
          ))
        }
      </div>
    </section>
  )
}

export default RecommendedSectionSkeleton