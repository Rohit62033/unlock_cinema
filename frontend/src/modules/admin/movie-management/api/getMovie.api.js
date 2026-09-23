import api from "@/config/axios"


export const getMovieAPI =
  async (movieId) => {

    console.log("get movie api called");
    
    const response =
      await api.get(

        `/api/movies/${movieId}`
      )

      console.log(response.data.data);
      

    return response.data.data
  }