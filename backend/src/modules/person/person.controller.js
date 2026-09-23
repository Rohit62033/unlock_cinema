import * as personService
  from "./person.service.js";

export const createPerson =
  async (
    req,
    res,
    next
  ) => {

    try {

      const person =
        await personService
          .createPersonService(
            req.body
          );

      res.status(201).json({
        success: true,
        person,
      });

    } catch (error) {
      next(error);
    }
  };

export const getPersons =
  async (
    req,
    res,
    next
  ) => {

    try {

      const persons =
        await personService
          .getPersonsService();

      res.status(200).json({
        success: true,
        persons,
      });

    } catch (error) {
      next(error);
    }
  };

export const getPersonById =
  async (
    req,
    res,
    next
  ) => {

    try {

      const person =
        await personService
          .getPersonByIdService(
            req.params.personId
          );

      res.status(200).json({
        success: true,
        person,
      });

    } catch (error) {
      next(error);
    }
  };

export const updatePerson =
  async (
    req,
    res,
    next
  ) => {

    try {

      const person =
        await personService
          .updatePersonService(
            req.params.personId,
            req.body
          );

      res.status(200).json({
        success: true,
        person,
      });

    } catch (error) {
      next(error);
    }
  };

export const deletePerson =
  async (
    req,
    res,
    next
  ) => {

    try {

      await personService
        .deletePersonService(
          req.params.personId
        );

      res.status(200).json({
        success: true,
        message:
          "Person deleted successfully",
      });

    } catch (error) {
      next(error);
    }
  };

export const searchPersons =
  async (
    req,
    res,
    next
  ) => {

    try {

      const {
        search = "",
        page = 1,
        limit = 10,
      } = req.query;

      const result =
        await searchPersonsService(
          search,
          Number(page),
          Number(limit)
        );

      res.status(200).json({
        success: true,
        ...result,
      });

    } catch (error) {
      next(error);
    }
  };