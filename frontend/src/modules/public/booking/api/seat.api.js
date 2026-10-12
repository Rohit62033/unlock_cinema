import api from "@/config/axios";

export const getShowById = async (showId) => {
  const response = await api.get(`/api/shows/${showId}`);

  return response.data.data;
};

export const getShowSeats = async (showId) => {
  const response = await api.get(
    `/api/show-seat/${showId}`
  );

  return response.data.data;
};

export const getSeatLayoutByScreen = async (screenId) => {
  const response = await api.get(
    `/api/seat-layouts/screen/${screenId}`
  );

  return response.data.data;
};