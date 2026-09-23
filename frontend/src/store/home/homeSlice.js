import { createSlice } from "@reduxjs/toolkit";
import { fetchBanners } from "./homeThunk";

const initialState = {
  sections: {
    trending: [],
    nowPlaying: [],
    banners: []
  },
  loading: false
};

const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBanners.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchBanners.fulfilled, (state, action) => {
        state.loading = false;
        state.banners = action.payload;
      });

  }}
)

export default homeSlice.reducer