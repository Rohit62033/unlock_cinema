import api from "@/config/axios"

export const fetchMoviesAPI = async (params) => {

  const response = await api.get('/api/movies/', { params })


  return response.data.data

  
}

export const fetchRecommendedMoviesAPI = async (city) => {


  const response = await api.get('/api/movies', {

    params: {
      city

    }
  })
  
  return response.data.data
}

export const fetchMovieDetailsAPI = async (movieId) => {
  const response = await api.get(`/api/movies/${movieId}/details`)
  console.log(response.data.data);

  return response.data.data
}