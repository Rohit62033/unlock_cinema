import api from "../../../../config/axios.js"

export const getMovieShowtimes = async ({
  movieId,
  city,
  date
}) => {

  const response = await api.get(
    `/api/movies/${movieId}/showtimes`,
    {
      params: {
        city,
        ...(date ? { date } : {}),
      },
    }
  );

  return response.data;
}