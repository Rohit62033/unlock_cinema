import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";
import { openAuthModal } from "@/store/uiSlice";

import { ChevronRight, X } from "lucide-react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const ProfileHeader = ({
  user,
  purpose,
  action,
  onClose
}) => {

  const dispatch = useDispatch()

  const avatarUrl = user?.avatar?.url?.trim();



  return (
    <>

      {user && (
        <header
          className="
        md:hidden
        flex
        items-center
        justify-between
        px-4
        py-3
        border-b
        shrink-0
    "
        >

          <button
            onClick={onClose}
            className="
            rounded-full
            p-2
            hover:bg-gray-100
            active:scale-95
        "
          >
            <X size={22} />
          </button>

          <h2 className="font-semibold">
            Profile
          </h2>

          <div className="w-10" />

        </header>
      )}

      <header className="border-b shrink-0 py-2 md:py-2.5 ">

        <div className="flex items-center justify-between px-5 gap-4">

          <div className="w-full">

            <div className="flex items-center justify-between w-full">
              <h2 className="text-lg font-semibold ">

                {user?.username || "Hey!"}

              </h2>
              {!user && (
                <button
                  onClick={onClose}
                  className="md:hidden"><X /></button>)}
            </div>

            {purpose && action && user && (

              <Link
                to={action}
                className="flex items-center text-sm text-gray-500 hover:text-red-600"
              >
                {purpose}
                <ChevronRight size={16} />
              </Link>

            )}

          </div>
          {user &&
            <Avatar className="h-14 w-14">

              <AvatarImage src={avatarUrl} />

              <AvatarFallback>
                {user?.username
                  ? user.username.charAt(0).toUpperCase()
                  : "G"}
              </AvatarFallback>

            </Avatar>}

        </div>

      </header>

      {!user && <div className="w-full flex items-center justify-between shadow-md px-3 py-2.5" >

        <div className="flex items-center gap-2">
          <img src="https://assets-in.bmscdn.com/webin/movies/superstar/rewards_login.png" width={40}
            height={50} alt="" />
          <p className="text-gray-400 text-sm  ">Unlock special offers & great benifits</p>
        </div>

        <div>
          <button
            onClick={() => dispatch(openAuthModal())}
            className="text-primary text-xs font-medium border border-primary rounded-md px-2 py-2 shadow-md ">Login/Register</button>
        </div>
      </div>}
    </>

  );

};

export default ProfileHeader;