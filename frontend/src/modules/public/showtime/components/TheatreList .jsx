import TheatreCard from "./TheatreCard";

const TheatreList = ({
  theatres,
  onShowClick,
}) => {
  return (
    <section
      className="
        max-w-7xl
        mx-auto

        py-5
        space-y-4
      "
    >
      {theatres.map((theatre) => (
        <TheatreCard
          key={theatre.id}
          theatre={theatre}
          onShowClick={onShowClick}
        />
      ))}
    </section>
  );
};

export default TheatreList;