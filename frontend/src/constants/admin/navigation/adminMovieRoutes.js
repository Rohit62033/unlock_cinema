export const MOVIE_ROUTES = {
  ROOT: '/admin/movies',

  CREATE: '/admin/movies/create',

  DETAILS: (movieId) =>
    `/admin/movies/${movieId}`,

  EDIT: (movieId) =>
    `/admin/movies/${movieId}/edit`,
}