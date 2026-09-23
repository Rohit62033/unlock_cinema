import { ChevronRightIcon, Star } from "lucide-react";
import { useState } from "react";

const RatingCard = ({ rating, votes }) => {

  const [randomVote] = useState(() => (votes * 2 * Math.random()).toFixed(1));


  return (
    <div className="bg-black rounded-xl px-6 py-3.5 flex items-center justify-between max-w-xl border">

      <div className="flex items-center gap-3">

        <Star
          fill="#F84464"
          color="#F84464"
          size={22}
        />

        <div className="flex items-center gap-2">

          <span className="text-xl font-bold">
            {rating*1.90}/10
          </span>

          <span className="text-md font-medium flex flex-row justify-center items-center">
            ({randomVote}k+ Votes)<ChevronRightIcon size={15} className="text-gray-400"/>
          </span>

        </div>
      </div>

      <button className="border text-sm border-white bg-white/30 px-3 py-1.5 rounded-sm  hover:bg-white hover:text-black transition-all">
        Rate now
      </button>

    </div>
  );
};

export default RatingCard;