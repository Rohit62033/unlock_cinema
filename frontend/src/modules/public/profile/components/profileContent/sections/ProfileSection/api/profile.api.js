import api from "@/config/axios";

export const getProfile = async () => {
  const response = await api.get("/api/profile")
  console.log('proifle data',response.data.data);
  
  return response.data.data
}

export const updateProfile = async (data) => {
  const response = await api.patch('/api/profile', data
  )

  return response.data.data
}

export const updateAvatar = async ({url, public_id}) => {
  const response = await api.patch('/api/profile/avatar',
    {
      url,
      public_id,
    }
  )

  return response.data.data
}