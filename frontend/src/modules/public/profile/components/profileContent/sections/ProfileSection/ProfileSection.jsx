import { useEffect, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";

import ProfileHeader from "./ProfileHeader";
import ProfileForm from "./ProfileForm";
import { profileSchema } from "./schemas/profile.schema";

import {
  useProfile,
  useUpdateProfile,
  useUpdateAvatar,
} from "./hooks/useProfile";

import { useCloudinaryUpload } from "@/modules/upload/hooks/useCloudinaryUpload";

const ProfileSection = () => {
  const {
    data: profile,
    isLoading,
  } = useProfile();

  /*
   * Temporary avatar state.
   * Nothing here is uploaded yet.
   */
  const [avatarFile, setAvatarFile] =
    useState(null);

  const [avatarPreview, setAvatarPreview] =
    useState(null);

  /*
   * ONE react-hook-form instance.
   */
  const methods = useForm({
    resolver: zodResolver(profileSchema),

    defaultValues: {
      firstName: "",
      lastName: "",
      dob: null,
      gender: undefined,
      married: false,

      preferences: {
        languages: [],
        favouriteGenres: [],
      },
    },

    mode: "onBlur",
  });

  const {
    reset,
    formState: {
      isDirty,
    },
  } = methods;

  /*
   * Personal information mutation
   *
   * PATCH /api/profile
   */
  const {
    mutateAsync: updateProfile,
  } = useUpdateProfile();

  /*
   * Avatar database mutation
   *
   * PATCH /api/profile/avatar
   */
  const {
    mutateAsync: updateAvatar,
  } = useUpdateAvatar();

  /*
   * Cloudinary upload
   *
   * Signature + Cloudinary upload
   */
  const {
    upload,
    isUploading,
  } = useCloudinaryUpload();

  /*
   * Populate RHF when profile arrives.
   */
  useEffect(() => {
    if (!profile) return;

    reset({
      firstName:
        profile.firstName ?? "",

      lastName:
        profile.lastName ?? "",

      dob: profile.dob
        ? new Date(profile.dob)
        : null,

      gender:
        profile.gender ?? undefined,

      married:
        profile.married ?? false,

      preferences: {
        languages:
          profile.preferences?.languages ?? [],

        favouriteGenres:
          profile.preferences?.favouriteGenres ?? [],
      },
    });
  }, [profile, reset]);

  /*
   * User selects a new avatar.
   *
   * IMPORTANT:
   * No API request happens here.
   */
  const handleAvatarChange = (file) => {
    if (!file) return;

    setAvatarFile(file);

    setAvatarPreview((previousPreview) => {
      if (previousPreview) {
        URL.revokeObjectURL(previousPreview);
      }

      return URL.createObjectURL(file);
    });
  };

  /*
   * Save everything.
   */
  const handleSave = async (data) => {
    try {
      /*
       * 1. Personal information
       */
      if (isDirty) {
        await updateProfile(data);
      }

      /*
       * 2. Avatar
       */
      if (avatarFile) {
        /*
         * Get signature + upload to Cloudinary.
         */
        const cloudinaryResult =
          await upload({
            file: avatarFile,
            type: "avatar",
          });

        console.log(
          "Cloudinary result:",
          cloudinaryResult
        );

        /*
         * Save Cloudinary information
         * in our database.
         */
        await updateAvatar({
          url: cloudinaryResult.url,
          public_id:
            cloudinaryResult.public_id,
        });
      }

      /*
       * Clear temporary state.
       */
      setAvatarFile(null);

      setAvatarPreview((previousPreview) => {
        if (previousPreview) {
          URL.revokeObjectURL(previousPreview);
        }

        return null;
      });

      /*
       * Refresh/reset RHF state.
       */
      reset();

      toast.success(
        "Profile updated successfully"
      );

    } catch (error) {
      console.error(
        "Failed to update profile:",
        error
      );

      toast.error(
        error?.response?.data?.message ||
        error?.message ||
        "Failed to update profile"
      );

      throw error;
    }
  };

  /*
   * Cancel all unsaved changes.
   */
  const handleCancel = () => {
    reset();

    setAvatarFile(null);

    setAvatarPreview((previousPreview) => {
      if (previousPreview) {
        URL.revokeObjectURL(previousPreview);
      }

      return null;
    });
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  /*
   * Save button should appear when:
   *
   * - form changed
   * OR
   * - avatar changed
   */
  const hasChanges =
    isDirty || Boolean(avatarFile);

  return (
    <FormProvider {...methods}>
      <div className="space-y-10 bg-white px-4 rounded-md">

        <ProfileHeader
          user={profile}
          previewUrl={avatarPreview}
          onAvatarChange={handleAvatarChange}
        />

        <ProfileForm
          profile={profile}
          onSubmit={methods.handleSubmit(
            handleSave
          )}
          hasChanges={hasChanges}
          isSaving={
            methods.formState.isSubmitting ||
            isUploading
          }
          onCancel={handleCancel}
        />

      </div>
    </FormProvider>
  );
};

export default ProfileSection;