import api from "@/config/axios"


export const updateMovieAPI =
  async ({
    movieId,
    payload
  }) => {

    const response =
      await api.patch(

        `/api/movies/${movieId}`,

        payload
      )

    return response.data.data
  }