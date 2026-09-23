import { useRef } from "react";
import ProfileAvatar from "./ProfileAvatar";

const AvatarUploader = ({
  user,
  previewUrl,
  onFileChange,
}) => {
  const inputRef = useRef(null);

  const displayUser = {
    ...user,

    avatar: previewUrl
      ? {
          url: previewUrl,
        }
      : user?.avatar,
  };

  const handleSelect = (event) => {
    const file =
      event.target.files?.[0];

    if (!file) return;

    onFileChange(file);

    event.target.value = "";
  };

  return (
    <div className="relative">

      <ProfileAvatar
        user={displayUser}
        className="h-28 w-28"
      />

      <button
        type="button"
        onClick={() =>
          inputRef.current?.click()
        }
        className="
          absolute
          bottom-0
          right-0
          flex
          h-9
          w-9
          items-center
          justify-center
          rounded-full
          border
          bg-white
          shadow
          transition
          hover:bg-gray-50
        "
      >
        ✎
      </button>

      <input
        ref={inputRef}
        type="file"
        accept="
          image/jpeg,
          image/png,
          image/webp
        "
        onChange={handleSelect}
        className="hidden"
      />

    </div>
  );
};

export default AvatarUploader;