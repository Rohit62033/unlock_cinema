const ProfileFormFooter = ({
  hasChanges,
  isSaving,
  onCancel,
}) => {
  if (!hasChanges) {
    return null;
  }

  return (
    <div
      className="
        sticky
        bottom-0
        z-20
        flex
        justify-start
        gap-4
        border-t
        bg-white/90
        px-8
        py-4
        backdrop-blur
        rounded
      "
    >
      <button
        type="button"
        onClick={onCancel}
        disabled={isSaving}
        className="
          rounded-lg
          border
          px-5
          py-2
          disabled:opacity-50
        "
      >
        Cancel
      </button>

      <button
        type="submit"
        disabled={isSaving}
        className="
          rounded-lg
          bg-primary
          px-5
          py-2
          text-white
          disabled:opacity-50
        "
      >
        {isSaving
          ? "Saving..."
          : "Save Changes"}
      </button>
    </div>
  );
};

export default ProfileFormFooter;