import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "@/utils/axios";
import { fetchBannersAPI } from "./homeAPI";

export const fetchBanners = createAsyncThunk(
  "banner/fetch",
  async () => {
    const res = await fetchBannersAPI()
    return res.banners;
  }
);