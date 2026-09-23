import { HTTP_STATUS } from "../../constants/httpStatus.js";
import * as castService
  from "./cast.service.js";

export const createMovieCast =
  async (
    req,
    res,
    next
  ) => {

    try {

      const cast =
        await castService
          .createMovieCastService(
            req.body
          );

      res.status(HTTP_STATUS.CREATED).json({
        success: true,
        cast,
      });

    } catch (error) {
      next(error);
    }
  };

export const updateMovieCast =
  async (
    req,
    res,
    next
  ) => {

    try {

      const cast =
        await castService
          .updateMovieCastService(
            req.params.castId,
            req.body
          );

      res.status(200).json({
        success: true,
        cast,
      });

    } catch (error) {
      next(error);
    }
  };

export const getMovieCast =
  async (
    req,
    res,
    next
  ) => {

    try {

      const cast =
        await castService
          .getMovieCastService(
            req.params.movieId
          );

      res.status(200).json({
        success: true,
        cast,
      });

    } catch (error) {
      next(error);
    }
  };

export const deleteMovieCast =
  async (
    req,
    res,
    next
  ) => {

    try {

      await castService
        .deleteMovieCastService(
          req.params.castId
        );

      res.status(200).json({
        success: true,
        message:
          "Cast deleted successfully",
      });

    } catch (error) {
      next(error);
    }
  };