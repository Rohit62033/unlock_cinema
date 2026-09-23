import { ChevronDown } from "lucide-react";

const FilterButton = ({
  label,
}) => {

  return (
    <button
      className="
       h-5

        px-2
        md:px-5

        flex
        items-center
        gap-1 md:gap-2

        border-r

        text-[10px]
        md:text-[12px]
        text-gray-700

        whitespace-nowrap

        hover:bg-gray-50

        transition-colors
      "
    >
      <span>
        {label}
      </span>

      <ChevronDown
        size={12}
        className="
          text-[#f84464]
        "
      />
    </button>
  );
};

export default FilterButton;