const ProfileActions = ({
  onLogout,
}) => {

  return (

    <div className="border-t p-4 shadow-md">

      <button

        onClick={onLogout}

        className="
          w-full
          rounded-lg
          py-3
          text-primary
          transition
          border
          border-primary
          shadow
          hover:
        "

      >

        Sign out

      </button>

    </div>

  );

};

export default ProfileActions;