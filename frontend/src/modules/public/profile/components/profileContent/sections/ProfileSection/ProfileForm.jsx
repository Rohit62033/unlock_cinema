import AccountSection from "./sections/AccountSection";
import PersonalSection from "./sections/PersonalSection";
import ProfileFormFooter from "./components/ProfileFormFooter";

const ProfileForm = ({
  profile,
  onSubmit,
  hasChanges,
  isSaving,
  onCancel,
}) => {
  return (
    <form
      onSubmit={onSubmit}
      className="space-y-10"
    >
      <AccountSection
        profile={profile}
      />

      <PersonalSection />

      <ProfileFormFooter
        hasChanges={hasChanges}
        isSaving={isSaving}
        onCancel={onCancel}
      />
    </form>
  );
};

export default ProfileForm;