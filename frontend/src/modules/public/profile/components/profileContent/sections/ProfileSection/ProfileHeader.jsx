import AvatarUploader from "./components/AvatarUploader";
import ProfileInfo from "./components/ProfileInfo";

const ProfileHeader = ({
  user,
  previewUrl,
  onAvatarChange,
}) => {
  return (
    <section
      className="
        rounded-2xl
        bg-white
        px-2
        py-5
      "
    >
      <div className="flex items-center gap-6">

        <AvatarUploader
          user={user}
          previewUrl={previewUrl}
          onFileChange={onAvatarChange}
        />

        <ProfileInfo user={user} />

      </div>
    </section>
  );
};

export default ProfileHeader;