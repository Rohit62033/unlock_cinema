export let moviesDummyData = [
  {
    id: 'movie_1',

    title: 'Galactic Odyssey',

    description:
      'A sci-fi survival movie.',

    duration: 142,

    language: 'English',

    releaseDate: '2025-10-10',

    status: 'LIVE',

    certification: 'UA',

    genres: [
      {
        id: 'genre_1',
        name: 'Sci-Fi',
      },
      {
        id: 'genre_2',
        name: 'Action',
      },
    ],

    poster: {
      preview:
        'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba',
    },

    banner: {
      preview:
        'https://images.unsplash.com/photo-1440404653325-ab127d49abc1',
    },

    cast: [
      {
        id: 'cast_1',

        personName: 'Ethan Huntly',

        characterName:
          'Commander Kael',

        roleType: 'LEAD',
      },
    ],
  },

  {
    id: 'movie_2',

    title: 'Crimson Horizon',

    description:
      'Epic interstellar thriller.',

    duration: 156,

    language: 'Hindi',

    releaseDate: '2025-12-20',

    status: 'COMING_SOON',

    certification: 'A',

    genres: [
      {
        id: 'genre_3',
        name: 'Thriller',
      },
    ],

    poster: {
      preview:
        'https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c',
    },

    banner: {
      preview:
        'https://images.unsplash.com/photo-1485846234645-a62644f84728',
    },

    cast: [],
  },
]