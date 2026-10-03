import {
  addDays,
  formatDateKey,
  startOfDay,
} from "../utils/date.utils.js";

import { DEFAULT_TIMEZONE } from "../../../config/timezone.js";

const VISIBLE_DAYS = 7;

export const getShowtimeDateRange = () => {
  const today = startOfDay(new Date(), DEFAULT_TIMEZONE);

  const dates = Array.from({ length: VISIBLE_DAYS }, (_, index) => {
    const date = addDays(today, index, DEFAULT_TIMEZONE);

    return {
      date,
      id: formatDateKey(date, DEFAULT_TIMEZONE),
    };
  });

  const startDate = dates[0].date;
  const endDate = addDays(
    startDate,
    VISIBLE_DAYS,
    DEFAULT_TIMEZONE
  );

  return {
    dates,
    startDate,
    endDate,
    todayKey: dates[0].id,
    lastDateKey: dates.at(-1).id,
  };
};