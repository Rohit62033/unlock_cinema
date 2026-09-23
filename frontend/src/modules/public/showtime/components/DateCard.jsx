const DateCard = ({ date, isSelected, setSelectedDate }) => {
  const disabled = !date.hasShows;

  return (
    <button
      disabled={disabled}
      onClick={() => setSelectedDate(date.id)}
      className={`
        relative
        shrink-0
        flex
        flex-col
        items-center
        justify-center
        border-r
        transition-all
        duration-200
        rounded-md

      
        w-12
        h-15.25

      
        md:w-15
        md:h-17.5

        ${
          disabled
            ? "bg-white text-gray-400 cursor-not-allowed opacity-70"
            : "cursor-pointer hover:bg-red-50"
        }
        ${
          isSelected 
            ? "bg-[#f84464] text-white" 
            : "bg-white text-gray-600"
        }
      `}
    >
      {/* DAY */}
      <span
        className="
          text-[11px]
          md:text-[13px]
          font-medium
          uppercase
          leading-none
        "
      >
        {date.day}
      </span>

      {/* DATE */}
      <span
        className="
          mt-1
          text-[14px] 
          md:text-[20px] 
          font-bold
          leading-none
        "
      >
        {date.displayDate}
      </span>

      {/* MONTH */}
      <span
        className="
          mt-1
          text-[11px]
          md:text-[13px]
          uppercase
          font-medium
        "
      >
        {date.month}
      </span>

      {/* ACTIVE BOTTOM BORDER */}
      {/* {isSelected && (
        <div
          className="
            absolute
            bottom-0
            left-0
            w-full
            h-[3px]
            bg-[#f84464]
          "
        />
      )} */}
    </button>
  );
};

export default DateCard;