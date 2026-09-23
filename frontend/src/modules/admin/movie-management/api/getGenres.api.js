import api from "@/config/axios"

export const getGenresAPI = async () => {
  const response = await api.get('/api/genres')

  console.log(response.data.data);
  

  return response.data.data
}