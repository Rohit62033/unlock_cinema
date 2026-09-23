import { createSlice } from "@reduxjs/toolkit";
import { searchCity } from "./locationThunk";

const initialState = {
  city: null,
  isDrawerOpen: false,
  suggestions: [],
  loading: false
};

const locationSlice = createSlice({
  name: "location",
  initialState,
  reducers: {
    setLocation: (state, action) => {
      state.city = action.payload;
      state.isDrawerOpen = false;
    },
    openDrawer: (state) => {
      state.isDrawerOpen = true;
    },
    closeLocationDrawer: (state) => {
      state.isDrawerOpen = false
    }

  },
  extraReducers: (builder) => {
    builder
      .addCase(searchCity.pending, (state) => {
        state.loading = true;
      })
      .addCase(searchCity.fulfilled, (state, action) => {
        state.loading = false;
        state.suggestions = action.payload;
      })
      .addCase(searchCity.rejected,(state)=>{
        state.loading = false
      })
  }
});

export const { setLocation, openDrawer, closeLocationDrawer } = locationSlice.actions;
export default locationSlice.reducer;