import {
  Heart,
  Info,
} from "lucide-react";

const TheatreInfo = ({
  theatre,
}) => {

  return (
    <div
      className="
        w-full
        lg:w-[340px]

        shrink-0
      "
    >
      <div
        className="
          flex
          items-start
          justify-between
          gap-4
        "
      >
        {/* LEFT */}

        <div className="flex gap-3">

          {/* LOGO */}

          <div
            className="
              w-11
              h-11
              rounded-md
              bg-gray-100
              shrink-0
            "
          />

          {/* INFO */}

          <div>

            <h2
              className="
                text-[18px]
                font-medium
                text-gray-800
              "
            >
              {theatre.name}
            </h2>

            <div
              className="
                mt-3
                flex
                flex-col
                gap-2
              "
            >
              {
                theatre.amenities.map(
                  (item) => (

                    <div
                      key={item}
                      className="
                        flex
                        items-center
                        gap-2
                      "
                    >
                      <Info
                        size={14}
                        className="
                          text-gray-500
                        "
                      />

                      <span
                        className="
                          text-sm
                          text-gray-500
                        "
                      >
                        {item}
                      </span>
                    </div>

                  )
                )
              }
            </div>

          </div>
        </div>

        {/* FAVORITE */}

        <button>
          <Heart
            size={22}
            className="
              text-gray-400
            "
          />
        </button>
      </div>
    </div>
  );
};

export default TheatreInfo;