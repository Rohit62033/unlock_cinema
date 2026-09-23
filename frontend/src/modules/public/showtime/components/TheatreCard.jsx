import ShowtimeGrid from "./showtimeGrid";
import TheatreInfo from "./TheatreInfo";



const TheatreCard = ({
  theatre,
}) => {

  return (
    <article
      className="
        bg-white
        border
        rounded-sm

        px-5
        py-6
      "
    >
      <div
        className="
          flex
          flex-col
          lg:flex-row
          gap-6
        "
      >
        <TheatreInfo
          theatre={theatre}
        />

        <ShowtimeGrid
          shows={theatre.shows}
        />
      </div>
    </article>
  );
};

export default TheatreCard;