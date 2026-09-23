import api from "@/config/axios"


export const searchMoviesAPI =
  async (query) => {

    const response =
      await api.get(

        '/api/movies/search',

        {
          params: {
            q: query
          }
        }
      )

    return response.data.data
  }