// import api from '@/config/axios'
// import { fakeDelay } from '../data/fakeDelay.js'
// import { moviesDummyData } from '../data/moviesDummyData.js'

// // export const fetchMoviesAPI = async (params) => {
// //   const response = await api.get(
// //     '/api/admin/movies',
// //     {
// //       params,
//     }
// //   )

// //   return response.data
// // }

// // export const fetchMovieAPI = async (
// //   movieId
// // ) => {
// //   const response = await api.get(
// //     `/api/admin/movies/${movieId}`
// //   )

// //   return response.data
// // }

// // export const updateMovieAPI = async ({
// //   movieId,
// //   payload,
// // }) => {
// //   const response = await api.patch(
// //     `/api/admin/movies/${movieId}`,
// //     payload
// //   )

// //   return response.data
// // }

// // export const createMovieAPI = async (
// //   payload
// // ) => {
// //   const response = await api.post(
// //     '/api/admin/movies',
// //     payload
// //   )

// //   return response.data
// // }

// export const fetchMoviesAPI =
//   async (filters) => {
//     await fakeDelay()

//     let filteredMovies = [
//       ...moviesDummyData,
//     ]

//     // SEARCH

//     if (filters.search) {
//       filteredMovies =
//         filteredMovies.filter((movie) =>
//           movie.title
//             .toLowerCase()
//             .includes(
//               filters.search.toLowerCase()
//             )
//         )
//     }

//     // STATUS FILTER

//     if (
//       filters.status &&
//       filters.status !== 'ALL'
//     ) {
//       filteredMovies =
//         filteredMovies.filter(
//           (movie) =>
//             movie.status ===
//             filters.status
//         )
//     }

//     // GENRE FILTER

//     if (
//       filters.genre &&
//       filters.genre !== 'ALL'
//     ) {
//       filteredMovies =
//         filteredMovies.filter((movie) =>
//           movie.genres.some(
//             (genre) =>
//               genre.name ===
//               filters.genre
//           )
//         )
//     }

//     return {
//       success: true,

//       data: {
//         movies: filteredMovies,

//         pagination: {
//           page: 1,
//           limit: 10,
//           totalPages: 1,
//           totalMovies:
//             filteredMovies.length,
//         },
//       },
//     }
//   }

// export const fetchMovieAPI =
//   async (movieId) => {
//     await fakeDelay()

//     const movie =
//       moviesDummyData.find(
//         (movie) => movie.id === movieId
//       )

//     if (!movie) {
//       throw new Error('Movie not found')
//     }

//     return {
//       success: true,
//       data: movie,
//     }
//   }

//   export const createMovieAPI =
//   async (payload) => {
//     await fakeDelay()

//     const newMovie = {
//       ...payload,

//       id: crypto.randomUUID(),
//     }

//     moviesDummyData.unshift(newMovie)

//     return {
//       success: true,

//       message:
//         'Movie created successfully',

//       data: newMovie,
//     }
//   }

//   export const updateMovieAPI =
//   async ({
//     movieId,
//     payload,
//   }) => {
//     await fakeDelay()

//     moviesDummyData =
//       moviesDummyData.map((movie) => {
//         if (movie.id === movieId) {
//           return {
//             ...movie,
//             ...payload,
//           }
//         }

//         return movie
//       })

//     return {
//       success: true,

//       message:
//         'Movie updated successfully',
//     }
//   }

//   // export const deleteMovieAPI =
//   // async (movieId) => {
//   //   await fakeDelay()

//   //   moviesDummyData =
//   //     moviesDummyData.filter(
//   //       (movie) => movie.id !== movieId
//   //     )

//   //   return {
//   //     success: true,
//   //   }
//   // }