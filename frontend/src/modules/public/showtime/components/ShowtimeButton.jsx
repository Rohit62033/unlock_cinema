const ShowtimeButton = ({
  show,
   onClick
}) => {

  const isFastFilling =
    show.status ===
    "FAST_FILLING";
    

  return (
    <button
      onClick={() =>  onClick(show)}
      className="
        relative

        w-31.25
        h-13

        border
        rounded-sm

        flex
        items-center
        justify-center

        bg-white

        transition-all

        hover:bg-green-50
      "
    >
      {/* STATUS BAR */}

      <div
        className={`
          absolute
          left-0
          top-0
          bottom-0
          w-1

          ${isFastFilling
            ? "bg-yellow-500"
            : "bg-green-500"
          }
        `}
      />

      {/* TIME */}

      <span
        className="
          text-[15px]
          font-medium

          text-green-700
        "
      >
        {show.time}
      </span>

    </button>
  );
};

export default ShowtimeButton;