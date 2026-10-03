import { useQuery } from "@tanstack/react-query"
import { getMovieShowtimes } from "../api/showtime.api.js"

export const useMovieShowtimes = ({
  movieId,
  city,
  date
}) => {
  return useQuery({
    queryKey: [
      "movie-showtimes",
      movieId,
      city,
      date
    ],

    queryFn: () => getMovieShowtimes({
      movieId,
      city,
      date
    }),

    enabled:
      Boolean(movieId) &&
      Boolean(city),
    

    staleTime: 30 * 1000
  })
}