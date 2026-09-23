import api from "@/config/axios"


export const getMoviesAPI =
  async (params) => {

    const response =
      await api.get(

        '/api/movies'
      )


    return response.data
  }