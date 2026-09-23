export const serializeReview =
  (review) => {

    return {
      id: review._id,

      user: {
        id: review.user?._id,

        name:
          review.user?.name
          || "Anonymous",

        avatar:
          review.user?.avatar
          || null
      },

      rating: review.rating,

      title: review.title,

      comment: review.comment,

      likesCount:
        review.likesCount || 0,

      tags: review.tags || [],

      createdAt:
        review.createdAt
    };
  };