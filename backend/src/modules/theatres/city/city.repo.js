import { HTTP_STATUS } from "../../../constants/httpStatus.js";
import { AppError } from "../../../errors/AppErrors.js";
import { ERROR_CODES } from "../../../errors/errorCodes.js";
import { City } from "./city.model.js";

export const cityRepo = {
  async createCity(data) {
    try {
      return await City.create(data)
    } catch (error) {
      throw new AppError(
        "Failed to create",
        HTTP_STATUS.CONFLICT,
        ERROR_CODES.DATABASE_ERROR
      )
    }
  },
  async findCityByName(name) {
    try {
      return await City.findOne({ name })
    } catch (error) {
      throw new AppError(
        "Failed to find city",
        HTTP_STATUS.NOT_FOUND,
        ERROR_CODES.DATABASE_ERROR
      )
    }
  },
  async getAllActiveCities() {
    try {
      return await City.find({ isActive: true }).lean()
    } catch (error) {
      AppError(
        "Failed to fetch city",
        HTTP_STATUS.NOT_FOUND,
        ERROR_CODES.DATABASE_ERROR
      )
    }
  },
  async findCityById(id) {
    try {
      return await City.findById(id)

    } catch (error) {
      AppError(
        "Failed to fetch city by id",
        HTTP_STATUS.NOT_FOUND,
        ERROR_CODES.DATABASE_ERROR
      )
    }
  },

  async getCitiesWithTheatre(q) {

    try {
      return await City.aggregate([
      {
        $match: {
          name: { $regex: q, $options: "i" }
        }
      },
      {
        $lookup: {
          from: "theatres",
          localField: "_id",
          foreignField: "city",
          as: "theatres"
        }
      },
      {
        $project: {
          name: 1,
          theatreCount: { $size: "$theatres" }
        }
      },
      {
        $match: {
          theatreCount: { $gt: 0 }
        }
      },
      { $limit: 5 }
    ]);
    } catch (error) {
      AppError(
        "Failed to fetch city status",
        HTTP_STATUS.BAD_REQUEST,
        ERROR_CODES.DATABASE_ERROR
      )
    }
  }
}