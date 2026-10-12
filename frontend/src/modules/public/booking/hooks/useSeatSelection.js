import { useQuery } from "@tanstack/react-query";

import {
  getShowById,
  getShowSeats,
  getSeatLayoutByScreen,
} from "../api/seat.api";

import { mapSeatLayout } from "../utils/seatMap.utils.js"

export const useSeatLayoutData = (showId) => {
  const showQuery = useQuery({
    queryKey: ["show", showId],
    queryFn: () => getShowById(showId),
    enabled: Boolean(showId),
  });

  const showSeatsQuery = useQuery({
    queryKey: ["show-seats", showId],
    queryFn: () => getShowSeats(showId),
    enabled: Boolean(showId),
  });

  const screenId =
    showQuery.data?.screen?._id;

  const layoutQuery = useQuery({
    queryKey: ["seat-layout", screenId],
    queryFn: () =>
      getSeatLayoutByScreen(screenId),
    enabled: Boolean(screenId),
  });

  const seats =
    layoutQuery.data &&
      showSeatsQuery.data
      ? mapSeatLayout(
        layoutQuery.data,
        showSeatsQuery.data
      )
      : [];

  return {
    show: showQuery.data,
    showSeats:
      showSeatsQuery.data ?? [],
    layout: layoutQuery.data,
    seats,

    isLoading:
      showQuery.isLoading ||
      showSeatsQuery.isLoading ||
      layoutQuery.isLoading,

    isError:
      showQuery.isError ||
      showSeatsQuery.isError ||
      layoutQuery.isError,

    error:
      showQuery.error ||
      showSeatsQuery.error ||
      layoutQuery.error,
  };
};