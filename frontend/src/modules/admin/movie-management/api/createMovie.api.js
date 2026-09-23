import api from "@/config/axios"


export const createMovieAPI =
  async (payload) => {

    const response =
      await api.post(

        '/api/movies',

        payload
      )

    return response.data.data
  }