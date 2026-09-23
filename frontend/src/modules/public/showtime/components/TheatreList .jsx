import TheatreCard from "./TheatreCard";

const TheatreList = ({
  theatres,
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
      {
        theatres.map((theatre) => (

          <TheatreCard
            key={theatre.id}
            theatre={theatre}
          />

        ))
      }
    </section>
  );
};

export default TheatreList;