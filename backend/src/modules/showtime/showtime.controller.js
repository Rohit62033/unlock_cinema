import * as showtimeService from "./showtime.service.js";

export const getMovieShowtimes =
  async (req, res, next) => {

    try {
      const {
        movieId,
      } = req.params;

      const {
        city,
        date,
      } = req.query;

      const data =
        await showtimeService.getMovieShowtimes({
          movieId,
          city,
          selectedDate: date || null,
        });

      return res.status(200).json({
        success: true,
        data,
      });

    } catch (error) {
      next(error);
    }
  };