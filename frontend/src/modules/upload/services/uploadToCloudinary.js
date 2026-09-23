import axios from "axios";

export const uploadToCloudinary = async ({
  file,
  signatureData,
}) => {
  if (!file) {
    throw new Error(
      "No file provided for Cloudinary upload"
    );
  }

  if (!signatureData) {
    throw new Error(
      "Cloudinary signature data is missing"
    );
  }

  const {
    apiKey,
    timestamp,
    signature,
    folder,
    cloudName,
  } = signatureData;

  const formData = new FormData();

  formData.append(
    "file",
    file
  );

  formData.append(
    "api_key",
    apiKey
  );

  formData.append(
    "timestamp",
    timestamp
  );

  formData.append(
    "signature",
    signature
  );

  formData.append(
    "folder",
    folder
  );

  try {
    const response = await axios.post(
      `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
      formData
    );

    return {
      public_id:
        response.data.public_id,

      url:
        response.data.secure_url,
    };

  } catch (error) {
    console.error(
      "Cloudinary error:",
      error.response?.data
    );

    throw error;
  }
};