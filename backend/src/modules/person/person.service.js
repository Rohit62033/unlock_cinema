import * as personRepository
  from "./person.repo.js";

export const createPersonService =
  async (payload) => {

    return personRepository
      .createPerson(payload);
  };

export const getPersonsService =
  async () => {

    return personRepository
      .getPersons();
  };

export const getPersonByIdService =
  async (personId) => {

    return personRepository
      .getPersonById(personId);
  };

export const updatePersonService =
  async (
    personId,
    payload
  ) => {

    return personRepository
      .updatePerson(
        personId,
        payload
      );
  };

export const deletePersonService =
  async (personId) => {

    return personRepository
      .deletePerson(personId);
  };

export const searchPersonsService =
  async (
    search,
    page,
    limit
  ) => {

    return personRepository
      .searchPersons(
        search,
        page,
        limit
      );
  };