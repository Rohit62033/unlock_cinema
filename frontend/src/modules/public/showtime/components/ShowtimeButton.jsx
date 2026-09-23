const ShowtimeButton = ({
  show,
}) => {

  const isFastFilling =
    show.status ===
    "FAST_FILLING";

  return (
    <button
      className="
        relative

        w-[125px]
        h-[52px]

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
          w-[4px]

          ${
            isFastFilling
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