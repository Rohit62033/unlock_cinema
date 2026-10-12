import ShowtimeButton from
  "./ShowtimeButton";

const ShowtimeGrid = ({
  shows,
  onShowClick,
}) => {




  return (
    <div
      className="
        flex-1

        flex
        flex-wrap
        gap-4
      "
    >
      {
        shows.map((show) => (

          <ShowtimeButton
            key={show.id}
            show={show}
            onClick={onShowClick}
          />

        ))
      }
    </div>
  );
};

export default ShowtimeGrid;