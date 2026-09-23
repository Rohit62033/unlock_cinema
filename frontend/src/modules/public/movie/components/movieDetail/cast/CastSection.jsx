import CastCard from "./CastCard";

const CastSection = ({ cast }) => {


  return (
    <section className="mt-14">

      <h2 className="text-3xl font-bold mb-6">
        Cast
      </h2>

      <div className="flex gap-6 overflow-x-auto scrollbar-hide">

        {
          cast.map((castMember) => (

            <CastCard
              key={castMember.id}
              castMember={castMember}
            />

          ))
        }

      </div>

    </section>
  );
};

export default CastSection;