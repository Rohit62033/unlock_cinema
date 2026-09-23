import api from "@/config/axios"


export const getUploadSignature =
  async (type) => {

    const response =
      await api.post(

        '/api/uploads/signature',

        { type }
      )

    return response.data.data
  }