import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "./search/searchSlice";
import authReducer from './auth/authSlice.js'
import uiReducer from './uiSlice.js'
import LocationReducer from './location/locationSlice.js'
import movieReducer from './movie/movieSlice.js'

export const store = configureStore({
  reducer: {
    search: searchReducer,
    auth: authReducer,
    ui: uiReducer,
    location: LocationReducer,
    movies: movieReducer
  }
});