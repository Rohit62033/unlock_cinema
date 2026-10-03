import {
  addDays,
  filterShowsByDate,
  formatDateKey,
  generateDateRange,
} from "../utils/date.utils.js";

import { getShowAvailabilityStatus } from "../utils/show-status.utils.js";

import { DEFAULT_TIMEZONE } from "../../../config/timezone.js";

const VISIBLE_DAYS = 7;

export const serializeDates = ({
  startDate,
  shows = [],
  timezone = DEFAULT_TIMEZONE,
}) => {
  return Array.from({ length: VISIBLE_DAYS }, (_, index) => {
    const date = addDays(startDate, index, timezone);
    const id = formatDateKey(date, timezone);

    const hasShows = shows.some(
      (show) =>
        formatDateKey(show.startTime, timezone) === id
    );

    const parts = new Intl.DateTimeFormat("en-US", {
      timeZone: timezone,
      weekday: "short",
      day: "numeric",
      month: "short",
    }).formatToParts(date);

    const values = Object.fromEntries(
      parts
        .filter((part) => part.type !== "literal")
        .map(({ type, value }) => [type, value])
    );

    return {
      id,
      day: values.weekday.toUpperCase(),
      displayDate: Number(values.day),
      month: values.month.toUpperCase(),
      hasShows,
    };
  });
};

export const serializeShowtimePage = ({
  movie,
  shows = [],
  startDate,
  selectedDate = null,
  timezone = DEFAULT_TIMEZONE,
}) => {
  const dates = serializeDates({
    startDate,
    shows,
    timezone,
  });

  const effectiveSelectedDate =
    selectedDate ??
    dates.find((date) => date.hasShows)?.id ??
    dates[0]?.id ??
    null;

  const selectedShows = filterShowsByDate(
    shows,
    effectiveSelectedDate,
    timezone
  );

  return {
    movie: serializeMovie(movie, selectedShows),
    dates,
    selectedDate: effectiveSelectedDate,
    theatres: serializeTheatres(selectedShows),
  };
};


export const serializeMovie = (movie, shows = []) => {
  if (!movie) return null;

  const uniqueLanguages = shows.reduce((acc, show) => {
    if (show?.language) {
      acc.add(show.language);
    }

    return acc;
  }, new Set());

  const languages = Array.from(uniqueLanguages);

  return {
    id: movie._id?.toString() ?? "",

    title: movie.title ?? "",

    language:
      languages.length === 1
        ? languages[0]
        : languages.join(", "),

    duration: formatDuration(movie.duration),

    certification: movie.certification ?? "",

    genres:
      movie.genres?.map((genre) =>
        typeof genre === "string"
          ? genre
          : genre?.name ?? ""
      ) ?? [],
  };
};


export const formatDuration = (minutes) => {
  if (!minutes || isNaN(minutes)) {
    return null;
  }

  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;

  if (hours === 0) {
    return `${remainingMinutes}m`;
  }

  if (remainingMinutes === 0) {
    return `${hours}h`;
  }

  return `${hours}h ${remainingMinutes}m`;
};


export const formatShowTime = (date) => {
  if (!date) return "";

  return new Date(date).toLocaleTimeString("en-IN", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,

    // Important for your Ranchi/India theatre data
    timeZone: "Asia/Kolkata",
  });
};


export const serializeTheatres = (shows = []) => {
  const theatreMap = new Map();

  for (const show of shows) {
    if (!show?.theatre?._id) {
      continue;
    }

    const theatreId = show.theatre._id.toString();

    let theatre = theatreMap.get(theatreId);

    if (!theatre) {
      theatre = {
        id: theatreId,

        name: show.theatre.name ?? "Unknown Theatre",

        amenities: show.theatre.amenities ?? [],

        theatreLogo: show.theatre?.theatreLogo?.url,

        shows: [],
      };

      theatreMap.set(theatreId, theatre);
    }

    theatre.shows.push({
      id: show._id?.toString() ?? "",

      time: formatShowTime(show.startTime),

      price: show.basePrice ?? 0,

      status: getShowAvailabilityStatus({
        totalSeats: show.totalSeats,
        availableSeats: show.availableSeats,
      }),
    });
  }

  return Array.from(theatreMap.values());
};