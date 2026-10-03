import {
  Heart,
  Info,
} from "lucide-react";

const TheatreInfo = ({
  theatre,
}) => {

  const defaultIcon = " https://assets-in.bmscdn.com/moviesmaster/movies-showtimes/v4/cinema-icon/default.png"
  
  return (
    <div
      className="
        w-full
        lg:w-85

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

          <img
            className="
              w-11
              h-11
              rounded-md
              bg-gray-100
              shrink-0
            "
            src={theatre?.theatreLogo|| defaultIcon}
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
                mt-
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


                      <span
                        className="
                          text-sm
                          text-gray-500
                        "
                      >
                        {item}
                      </span>

                      <Info
                        size={13}
                        className="
                          text-gray-500
                        "
                      />
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