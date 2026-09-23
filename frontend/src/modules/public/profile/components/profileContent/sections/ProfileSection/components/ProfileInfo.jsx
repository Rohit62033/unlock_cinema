const ProfileInfo = ({ user }) => {

    return (

        <div className="space-y-2">

            <h1 className="text-4xl font-semibold">

                {user?.firstName} {user?.lastName}

            </h1>

            {/* <p className="text-gray-500">

                {user.email}

            </p> */}

            <p className="text-sm text-gray-400">

                Member since{" "}
                {new Date(user?.createdAt).toLocaleDateString()}

            </p>

        </div>

    );

};

export default ProfileInfo;