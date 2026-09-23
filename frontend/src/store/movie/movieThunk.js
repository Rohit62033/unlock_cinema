import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchMovieDetailsAPI, fetchMoviesAPI, fetchRecommendedMoviesAPI } from "./movieAPI";

export const fetchMovies = createAsyncThunk(
  'movies/fetchMovies',
  async (Params, { rejectWithValue }) => {
    try {
      return await fetchMoviesAPI(Params)
    } catch (error) {
      return rejectWithValue(error.res?.data || "Error while fetching recommended movie")
    }
  }
)

export const fetchRecommendedMovies = createAsyncThunk(
  'movies/fetchrecommendedMovies',
  async (city, { rejectWithValue }) => {
    try {
      return await fetchRecommendedMoviesAPI(city)
    } catch (error) {
      return rejectWithValue(error.res?.data || "Error while fetching recommended movie")
    }
  }
)

export const fetchMovieDetails = createAsyncThunk(
  'movies/movieDetails',
  async (movieId, { rejectWithValue }) => {
    try {
      const response = await fetchMovieDetailsAPI(movieId)

      console.log("in movie thunk", response);

      return response

    } catch (error) {
      return rejectWithValue(error.res?.data || "Error while fetching movie details")
    }
  }
)