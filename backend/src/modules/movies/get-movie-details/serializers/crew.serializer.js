export const serializeCrew =
  (crewMember) => {

    return {

      id: crewMember._id,

      department:
        crewMember.department,

      job:
        crewMember.job,

      person: {

        id:
          crewMember.person?._id,

        name:
          crewMember.person?.name,

        profileImage:
          crewMember.person
            ?.profileImage || null,
      }
    }
  }