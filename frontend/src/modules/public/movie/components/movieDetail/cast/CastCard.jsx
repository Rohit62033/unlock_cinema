const CastCard = ({ castMember }) => {

  return (

    <div className="min-w-35">

      <img
        src={
          castMember?.person.profileImage
        }

        alt={
          castMember?.person.name
        }

        className="
          w-36
          h-36
          rounded-full
          object-cover
        "
      />

      <h3 className="font-semibold mt-3">

        {castMember?.person.name}

      </h3>

      <p className="text-gray-500 text-sm">

        {castMember.characterName}

      </p>

    </div>
  );
};

export default CastCard;