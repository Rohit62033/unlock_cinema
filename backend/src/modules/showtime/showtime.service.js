import { DEFAULT_TIMEZONE } from '../../config/timezone.js';
import { movieRepository } from '../movies/movie.repo.js'
import { serializeShowtimePage } from "./serializers/showtime.serializer.js";
import { findMovieShowtimes } from "./showtime.repo.js";
import { parseDateKey } from "./utils/date.utils.js";
import { getShowtimeDateRange } from './utils/showtime-date.service.js';


export const getMovieShowtimes =
  async ({
    movieId,
    city,
    selectedDate = null,
  }) => {

    const {
      dates,
      startDate,
      endDate,
      todayKey,
      lastDateKey,
    } = getShowtimeDateRange();


    // Only allow dates within the fixed seven-day window.
    if (
      selectedDate &&
      (selectedDate < todayKey || selectedDate > lastDateKey)
    ) {
      const error = new Error(
        `Date must be between ${todayKey} and ${lastDateKey}.`
      );
      error.statusCode = 400;
      throw error;
    }


    // Validate the date format and calendar date.
    if (selectedDate) {
      parseDateKey(selectedDate, DEFAULT_TIMEZONE);

    }

    const movie =
      await movieRepository.findActiveMovieById(
        movieId
      );

    if (!movie) throw errorFactory.movie.movieNotFound();

    const shows =
      await findMovieShowtimes({
        movieId,
        city,
        startDate,
        endDate,
      });

    // console.log("SHOWTIME REPOSITORY RESULT:");
    // console.log(JSON.stringify(shows, null, 2));

    return serializeShowtimePage({
      movie,
      shows,
      startDate,
      selectedDate,
      timezone: DEFAULT_TIMEZONE,
    });

  };