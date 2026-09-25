

export const cleanupCloudinaryImage = async (req, res) => {
  const { publicId } = req.body;

  if (!publicId) {
    return res.status(400).json({
      message: "publicId is required",
    });
  }

  await cloudinaryService.deleteImage(publicId);

  return res.status(200).json({
    success: true,
  });
};