export const UPLOAD_TYPES = {

  moviePoster: {

    folder: 'movies/posters',

    allowedFormats: [
      'jpg',
      'jpeg',
      'png',
      'webp'
    ],

    transformation: [

      {
        width: 500,
        height: 700,
        crop: 'limit',
      },
    ],

    roles: ["admin"],
  },

  movieBanner: {

    folder: 'movies/banners',

    allowedFormats: [
      'jpg',
      'jpeg',
      'png',
      'webp'
    ],

    transformation: [

      {
        width: 1920,
        height: 1080,
        crop: 'limit',
      },
    ],
    roles: ["admin"],
  },

  avatar: {

    getFolder: ({ user }) =>
      `users/avatar`,

    allowedFormats: [
      'jpg',
      'jpeg',
      'png',
      'webp'
    ],
    roles: ["user", "admin"],
  },
}