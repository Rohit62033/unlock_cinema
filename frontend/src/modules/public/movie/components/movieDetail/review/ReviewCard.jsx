import {
  ThumbsUp,
  MessageCircle,
  Share2,
} from "lucide-react";

const ReviewCard = ({ review }) => {
  return (
    <div
      className="
        min-w-[340px]
        max-w-[340px]
        border
        rounded-xl
        p-5
        bg-white
      "
    >

      {/* User Info */}
      <div className="flex items-start justify-between">

        <div className="flex gap-3">

          {/* Avatar */}
          <div
            className="
              w-12
              h-12
              rounded-full
              bg-gray-200
            "
          />

          <div>

            <h3 className="font-semibold">
              {review.user}
            </h3>

            <p className="text-sm text-gray-500">
              Booked on BookMyShow
            </p>

          </div>
        </div>

        {/* Rating */}
        <div className="flex items-center gap-1 text-[#F84464] font-bold">

          <span>★</span>

          <span>{review.rating}/10</span>

        </div>

      </div>

      {/* Review Text */}
      <p className="mt-5 text-gray-700 leading-7 line-clamp-6">
        {review.text}
      </p>

      {/* Footer */}
      <div className="flex items-center justify-between mt-8 text-gray-500 text-sm">

        <div className="flex items-center gap-5">

          <button className="flex items-center gap-1">
            <ThumbsUp size={16} />
            {review.likes}
          </button>

          <button>
            <MessageCircle size={16} />
          </button>

        </div>

        <div className="flex items-center gap-4">

          <span>{review.daysAgo} Days ago</span>

          <button>
            <Share2 size={16} />
          </button>

        </div>

      </div>

    </div>
  );
};

export default ReviewCard;