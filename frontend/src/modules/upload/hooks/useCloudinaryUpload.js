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

          console.log(signatureData);
          

        const result =
          await uploadToCloudinary(
            {file,
            signatureData}
          );

          console.log("use cloudinary upload result", result);
          

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