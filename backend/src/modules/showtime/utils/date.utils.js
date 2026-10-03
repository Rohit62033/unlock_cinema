import { fromZonedTime, toZonedTime } from "date-fns-tz";
import { DEFAULT_TIMEZONE } from "../../../config/timezone.js";

const getDateParts = (date, timezone = DEFAULT_TIMEZONE) => {
  const parts = new Intl.DateTimeFormat("en-CA", {
    timeZone: timezone,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).formatToParts(new Date(date));

  return Object.fromEntries(
    parts
      .filter((part) => part.type !== "literal")
      .map(({ type, value }) => [type, value])
  );
};

// Returns the calendar date in the specified timezone.
export const formatDateKey = (
  date,
  timezone = DEFAULT_TIMEZONE
) => {
  if (!date || isNaN(new Date(date).getTime())) {
    return null;
  }

  const { year, month, day } = getDateParts(date, timezone);
  return `${year}-${month}-${day}`;
};

// Converts a calendar date key into midnight in the given timezone.
export const parseDateKey = (
  dateString,
  timezone = DEFAULT_TIMEZONE
) => {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(dateString ?? "")) {
    throw new Error("Invalid date key. Expected YYYY-MM-DD.");
  }

  const [year, month, day] = dateString.split("-").map(Number);
  const check = new Date(Date.UTC(year, month - 1, day));

  if (
    check.getUTCFullYear() !== year ||
    check.getUTCMonth() !== month - 1 ||
    check.getUTCDate() !== day
  ) {
    throw new Error("Invalid calendar date.");
  }

  return fromZonedTime(`${dateString}T00:00:00`, timezone);
};

// Returns the instant at midnight at the start of the business date.
export const startOfDay = (
  date,
  timezone = DEFAULT_TIMEZONE
) => {
  const dateKey = formatDateKey(date, timezone);
  if (!dateKey) return null;

  return parseDateKey(dateKey, timezone);
};

// Returns the last millisecond of the business date.
export const endOfDay = (
  date,
  timezone = DEFAULT_TIMEZONE
) => {
  const start = startOfDay(date, timezone);
  if (!start) return null;

  const nextDay = addDays(start, 1, timezone);
  return new Date(nextDay.getTime() - 1);
};

// Adds calendar days in the specified timezone, not fixed 24-hour periods.
export const addDays = (
  date,
  days,
  timezone = DEFAULT_TIMEZONE
) => {
  if (!date || !Number.isInteger(days)) {
    throw new Error("A valid date and integer day offset are required.");
  }

  const zonedDate = toZonedTime(new Date(date), timezone);
  zonedDate.setDate(zonedDate.getDate() + days);

  return fromZonedTime(zonedDate, timezone);
};

// Generates a range of business-day start instants.
export const generateDateRange = ({
  startDate,
  numberOfDays = 7,
  timezone = DEFAULT_TIMEZONE,
}) => {
  if (!startDate || numberOfDays < 0) return [];

  const firstDay = startOfDay(startDate, timezone);

  return Array.from({ length: numberOfDays }, (_, index) =>
    addDays(firstDay, index, timezone)
  );
};

// Filters shows by the selected business date.
export const filterShowsByDate = (
  shows = [],
  selectedDate,
  timezone = DEFAULT_TIMEZONE
) => {
  if (!selectedDate) return shows;

  return shows.filter(
    (show) =>
      formatDateKey(show.startTime, timezone) === selectedDate
  );
};