import { createSlice } from "@reduxjs/toolkit"
import { fetchMovieDetails, fetchMovies, fetchRecommendedMovies } from "./movieThunk.js"

const initialState = {
  filteredMovies: [],
  recommendedMovies: [],
  movieDetails: null,
  movieDetailsLoading: false,
  recommendedMoviesLoading: false,
  loading: false,
  error: null,

  totalPages: 0,
  totalMovies: 0,
  page: 1
}

const movieSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder

      .addCase(fetchMovies.pending, (state) => {
        state.loading = true
        state.error = null
      })

      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.loading = false
        state.filteredMovies =
          action.payload.movies;

          console.log(state.filteredMovies);
          

        state.totalMovies =
          action.payload.totalMovies;

        state.totalPages =
          action.payload.totalPages;

        state.page =
          action.payload.page;
      })

      .addCase(
        fetchMovies.rejected,
        (state, action) => {

          state.loading = false;

          state.error = action.payload;
        }
      )

      .addCase(fetchRecommendedMovies.pending, (state) => {
        state.recommendedMoviesLoading = true
        state.error = null
      })

      .addCase(fetchRecommendedMovies.fulfilled, (state, action) => {
        state.recommendedMoviesLoading = false
        state.recommendedMovies = action.payload.movies
      })

      .addCase(fetchRecommendedMovies.rejected, (state, action) => {
        state.recommendedMoviesLoading = false
        state.error = action.payload
      })

      .addCase(fetchMovieDetails.pending, (state) => {
        state.movieDetailsLoading = true
        state.error = null
      })

      .addCase(fetchMovieDetails.fulfilled, (state, action) => {
        state.movieDetailsLoading = false
        state.movieDetails = action.payload
      })

      .addCase(fetchMovieDetails.rejected, (state, action) => {
        state.movieDetailsLoading = false,
          state.error = action.error
      })

  }
})

export default movieSlice.reducer;