import api from "@/config/axios"


export const getMovieAPI =
  async (movieId) => {
    
    const response =
      await api.get(

        `/api/movies/${movieId}`
      )

      

    return response.data.data
  }