export const MOVIE_DETAILS_POPULATE =
[
  {
    path: 'genres',

    select:
      'name slug color',
  },

  {
    path: 'cast.person',

    select:
      'name profileImage professions',
  },

  {
    path: 'crew.person',

    select:
      'name profileImage professions',
  },
]