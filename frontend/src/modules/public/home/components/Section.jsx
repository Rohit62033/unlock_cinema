import { useNavigate } from "react-router-dom";
import HorizontalRow from "./HorizontalRow";
import { useSelector } from "react-redux";

const Section = ({ title, items }) => {

  const navigate = useNavigate()
  const { city } = useSelector((state) => state.location)

  return (
    // Outer wrapper for vertical spacing between sections
    <div

      className=" pt-6 pb-4 relative w-full py-  max-w-7xl mx-auto">
      {/* Inner Container: Matches Topbar Alignment */}
      <div className="max-w-310 mx-auto px-0 md:px">

        {/* Header: Title and See All */}
        <div className="flex justify-between items-end mb-4">
          <h2 className="text-xl md:text-2xl font-bold text-gray-800">{title}</h2>
          <button
            onClick={() => navigate(`/movies/${city?.toLowerCase()}`)}
            className="text-sm font-medium text-[#DC3548] hover:underline transition-all">
            See All &gt;
          </button>
        </div>

        {/* Scroll Row */}
        {
          items.length === 0 ? (
            <div className="text-center py-5 md:py-8 xl:py-12">
              No movie available
            </div>
          ) : (
            <HorizontalRow items={items} city={city} />
          )
        }


      </div>

    </div>
  );
};

export default Section;
