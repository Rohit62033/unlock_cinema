import api from "@/config/axios"

export const fetchBannersAPI =async()=>{
  const response = await api.get('/api/movie/banners')
  return response.data
}