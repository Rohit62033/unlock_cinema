import mongoose from "mongoose";
import { HTTP_STATUS } from "../../../constants/httpStatus.js";
import { AppError } from "../../../errors/AppErrors.js";
import { ERROR_CODES } from "../../../errors/errorCodes.js";
import { ShowSeat } from "../showSeat/showSeat.model.js";
import { Show } from "./show.model.js"
import { movieRepository } from "../../movies/movie.repo.js";
import { seatLayoutRepo } from "../../theatres/seatLayout/seatLayout.repo.js"
import * as showRepo from "../show/show.repo.js"
import * as showSeatRepo from "../showSeat/showSeat.repo.js"


export const createShowService = async (payload) => {
  const session = await mongoose.startSession()

  try {
    session.startTransaction();

    //1. Validate movie 
    const movie = await movieRepository.findSchedulableMovie(
      payload.movie,
      session
    );

    if (!movie) {
      throw new AppError(
        "Movie is not available for scheduling",
        HTTP_STATUS.BAD_REQUEST,
        ERROR_CODES.BAD_REQUEST
      );
    }

    // 2. Validate seat layout
    const layout = await seatLayoutRepo.findByScreen(
      payload.screen,
      session
    );

    if (!layout) {
      throw new AppError(
        "Seat layout not found for this screen",
        HTTP_STATUS.NOT_FOUND,
        ERROR_CODES.NOT_FOUND
      );
    }

    // 3. Create show
    const show =
      await showRepo.create(
        payload,
        session
      );

    // 4. Generate show seats
    const showSeats = [];


    const calculatePrice = (category, basePrice) => {

      const multiplierMap = {
        Silver: 1,
        Gold: 1.5,
        Platinum: 2
      };

      const multiplier = multiplierMap[category] || 1;

      return Math.round(basePrice * multiplier);
    };

    for (const row of layout.rows) {
      for (const seat of row.seats) {

        showSeats.push({
          show: show._id,
          seat: seat._id,
          seatNumber: seat.seatNumber,
          row: row.rowName,
          category: seat.category,
          price: calculatePrice(
            seat.category,
            payload.basePrice
          ),
          status: "available",
        });

      }
    }


    // 5. Create show seats
    await showSeatRepo.createMany(
      showSeats,
      session
    );

    await session.commitTransaction();

    return show;

  } catch (error) {

    await session.abortTransaction();

    throw error;

  } finally {

    await session.endSession();

  }
}

export const getShowByIdService = async (id) => {
  return await Show.findById(id).populate("movie theatre screen")
}

export const getShowsByMovieService = async (movieId) => {
  return await Show.find({ movie: movieId }).populate("theatre screen")
}

export const deleteShowService = async (showId) => {

  const show = await Show.findById(showId)
  if (!show) throw new AppError("Show not found", HTTP_STATUS.NOT_FOUND, ERROR_CODES.NOT_FOUND)

  await ShowSeat.deleteMany({
    show: showId
  })

  await Show.findByIdAndDelete(showId)
}