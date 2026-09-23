import api from "@/config/axios"

export const globalSearchAPI =
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