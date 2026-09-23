export const serializeCast =
  (castMember) => {

    return {
      id: castMember._id,

      characterName:
        castMember.characterName,

      rolePriority:
        castMember.rolePriority,

      person: {
        id:
          castMember.person?._id,

        name:
          castMember.person?.name,

        profileImage:
          castMember.person
            ?.profileImage || null
      }
    };
  };