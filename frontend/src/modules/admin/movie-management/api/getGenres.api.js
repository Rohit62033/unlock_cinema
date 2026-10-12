import api from "@/config/axios"

export const getGenresAPI = async () => {
  const response = await api.get('/api/genres')  

  return response.data.data
}