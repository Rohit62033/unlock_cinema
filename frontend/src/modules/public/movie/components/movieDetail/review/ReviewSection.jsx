import ReviewTags from "./ReviewTags";
import ReviewCard from "./ReviewCard";

const reviews = [
  {
    id: 1,
    user: "Lucky Vg",
    rating: 10,
    likes: 434,
    daysAgo: 4,
    text:
      "Siddharth Gupta as Krishna is a revelation. There's a stillness to his performance that feels genuinely divine without ever becoming theatrical or overdone.",
  },
  {
    id: 2,
    user: "SATYA PRIYA",
    rating: 10,
    likes: 340,
    daysAgo: 4,
    text:
      "#SuperDirection #GreatActing #Wow. Jai Radhe Krishna... pure emotion, must watch.",
  },
];

const reviewTags = [
  {
    tag: "#WowMusic",
    count: 1877,
  },
  {
    tag: "#SuperDirection",
    count: 1786,
  },
  {
    tag: "#Wellmade",
    count: 1750,
  },
  {
    tag: "#GreatActing",
    count: 1747,
  },
];

const ReviewsSection = () => {
  return (
    <section className="mt-14">

      {/* Header */}
      <div className="flex items-center justify-between">

        <h2 className="text-3xl font-bold">
          Top reviews
        </h2>

        <button className="text-[#F84464] font-medium">
          3.2K reviews
        </button>

      </div>

      {/* Summary */}
      <p className="text-gray-500 mt-3">
        Summary of 3.2K reviews.
      </p>

      {/* Tags */}
      <div className="mt-6">
        <ReviewTags tags={reviewTags} />
      </div>

      {/* Review Cards */}
      <div className="flex gap-5 overflow-x-auto no-scrollbar mt-8 pb-2">

        {
          reviews.map((review) => (
            <ReviewCard
              key={review.id}
              review={review}
            />
          ))
        }

      </div>

    </section>
  );
};

export default ReviewsSection;