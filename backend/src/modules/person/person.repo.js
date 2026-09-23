import { Person }
  from "./person.model.js";

export const createPerson =
  async (payload) => {

    try {
      return Person.create(payload);
    } catch (error) {
      throw AppError('Failed to create people', HTTP_STATUS.BAD_REQUEST, ERROR_CODES.DATABASE_ERROR)
    }
  };

export const getPersons =
  async () => {

    return Person.find({
      isActive: true,
    }).sort({
      createdAt: -1,
    }).limit(10);
  };

export const getPersonById =
  async (personId) => {

    return Person.findById(personId);
  };

export const updatePerson =
  async (
    personId,
    payload
  ) => {

    return Person.findByIdAndUpdate(
      personId,
      payload,
      {
        new: true,
      }
    );
  };

export const deletePerson =
  async (personId) => {

    return Person.findByIdAndUpdate(
      personId,
      {
        isActive: false,
      },
      {
        new: true,
      }
    );
  };

export const searchPersons =
  async (
    search = "",
    page = 1,
    limit = 10
  ) => {

    const skip =
      (page - 1) * limit;

    const query = {
      isActive: true,
    };

    if (search) {

      query.name = {
        $regex: search,
        $options: "i",
      };
    }

    const persons =
      await Person.find(query)
        .select(
          "name profileImage professions"
        )
        .sort({
          name: 1,
        })
        .skip(skip)
        .limit(limit);

    const total =
      await Person.countDocuments(
        query
      );

    return {
      persons,
      pagination: {
        total,
        page,
        limit,
        totalPages:
          Math.ceil(total / limit),
      },
    };
  };