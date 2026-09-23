import { slugifyMovie } from "@/modules/public/movie/utils/slugifyMovie";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ContentCard = ({ item, isScrollable, city }) => {

  const navigate = useNavigate();

  const slug = slugifyMovie(item.title)

  const handleNavigate = () => {

    navigate(
      `/movies/${city?.toLowerCase()}/${slug}/${item.id}`
    );
  };

  const [randomVote] = useState(() => (item.averageRating * 2 * Math.random()).toFixed(1));
  return (
    // min-w-[160px] on mobile allows seeing the next card
    <div
      onClick={handleNavigate}
      className={`
  group cursor-pointer

  ${isScrollable
          ? "flex-none w-40 md:w-56"
          : "w-full"
        }
`}>

      {/* Image Container */}
      <div className="relative aspect-2/3.5  w-full rounded-xl overflow-hidden shadow-sm group-hover:shadow-md transition-shadow ">
        <img
          src={item?.poster}
          alt={item.title}
          draggable="false"
          className="w-full h-full  object-cover transition-transform duration-300 group-hover:scale-105"
        />

        {/* Rating Overlay */}
        <div className="absolute bottom-0 w-full bg-black/70 backdrop-blur-[2px] text-white text-[10px] md:text-xs px-3 py-2 flex items-center gap-1">
          <span className="text-primary">★</span>
          <span className="font-bold">{item?.averageRating * 2}/10</span>
          <span className="text-gray-300 ml-auto">{randomVote}k Votes</span>
        </div>

        {/* Tag (e.g., PROMOTED) */}
        {item.tag && (
          <span className="absolute top-0 left-0 bg-priamry text-white text-[9px] px-2 py-1 font-bold rounded-br-lg uppercase tracking-wider">
            {item.tag}
          </span>
        )}
      </div>

      {/* Info Section */}
      <div className="mt-3">
        <h3 className="font-bold text-sm md:text-base text-gray-900 line-clamp-1 group-hover:text-[#DC3548] transition-colors">
          {item.title}
        </h3>
        {/* <p className="text-xs md:text-sm text-slate-500 mt-0.5 line-clamp-1">
         r
        </p> */}
        <div className="flex flex-wrap gap-2 mt-0.5">
          {item.genres?.map((genre) => (
            <span
              key={genre._id}
            
              className="text-xs md:text-sm text-slate-500 mt-0.5 line-clamp-1"
            >
              {genre.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContentCard