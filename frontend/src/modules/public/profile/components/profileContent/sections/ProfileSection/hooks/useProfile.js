import {
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";

import {
  getProfile,
  updateAvatar,
  updateProfile,
} from "../api/profile.api.js";

export const profileKeys = {
  all: ["profile"],

  detail: () => [
    "profile",
    "detail",
  ],
};

export const useProfile = () => {
  return useQuery({
    queryKey: profileKeys.detail(),
    queryFn: getProfile,
  });
};

export const useUpdateProfile = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateProfile,

    onSuccess: (updatedProfile) => {
      queryClient.setQueryData(
        profileKeys.detail(),
        updatedProfile
      );
    },
  });
};

export const useUpdateAvatar = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateAvatar,

    onSuccess: (updatedProfile) => {
      queryClient.setQueryData(
        profileKeys.detail(),
        updatedProfile
      );
    },
  });
};