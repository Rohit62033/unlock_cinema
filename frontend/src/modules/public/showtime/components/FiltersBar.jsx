import {
  Search,
} from "lucide-react";
import FilterButton from "./FilterButton";



const FiltersBar = () => {

  return (
    <div
      className="
        border-t
        bg-white
        px-4
        overflow-x-auto
      "
    >
      <div
        className="
          max-w-7xl
          mx-auto

          flex
          items-center

          overflow-x-auto
          no-scrollbar
        "
      >
        {/* FILTERS */}

        <div
          className="
            flex
            items-center
            min-w-max
          "
        >
          <FilterButton
            label="Hindi · 2D"
          />

          <FilterButton
            label="Price Range"
          />

          <FilterButton
            label="Other Filters"
          />

          <FilterButton
            label="Preferred Time"
          />

          <FilterButton
            label="Sort By"
          />
        </div>

        {/* SEARCH */}

        <button
          className="
            h-8.5
            w-15

            flex
            items-center
            justify-center

            border-r

            shrink-0

            hover:bg-gray-50

            transition-colors
          "
        >
          <Search
            size={15}
            className="
              text-gray-700
            "
          />
        </button>
      </div>
    </div>
  );
};

export default FiltersBar;