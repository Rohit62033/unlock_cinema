import { useMutation } from '@tanstack/react-query';
import {
  getUploadSignature
} from '../api/upload.api.js'
import { uploadToCloudinary } from '../services/uploadToCloudinary.js'

export const useCloudinaryUpload =
  () => {

    const mutation = useMutation({
      mutationFn: async ({ file, type }) => {
        const signatureData =
          await getUploadSignature(type);

          

        const result =
          await uploadToCloudinary(
            {file,
            signatureData}
          );          

        return result;
      },
    });

    return {
      upload: mutation.mutateAsync,
      isUploading: mutation.isPending,
      error: mutation.error,
      reset: mutation.reset,
    };
  }