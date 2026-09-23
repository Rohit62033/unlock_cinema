import api from "@/config/axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const searchCity = createAsyncThunk(
  "location/search",
  async (query) => {

    const res = await api.post(
      "/api/location/search",
      { q: query }
    );

    return res.data.cities;
  }
);