import ProfileSidebarHeader from "./ProfileSidebarHeader";
import ProfileSidebarMenu from "./ProfileSidebarMenu";
import ProfileSidebarFooter from "./ProfileSidebarFooter";

import { PROFILE_SIDEBAR_MENU } from "./profileSidebar.config";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { logoutUser } from "@/store/auth/authThunks";
import { useNavigate } from "react-router-dom";

const ProfileSidebar = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)

  const onLogout = () => {
    dispatch(logoutUser())
    navigate('/')
  }

  return (

    <aside

      className={`
        hidden md:block
         ${isSidebarOpen ? 'w-full md:w-60' : ' w-16'}
        shrink-0
        rounded-2xl
        bg-white
        border
        flex
        flex-col
        p-4
        h-[calc(100vh-6rem)]
        sticky
        top-24
        overflow-hidden
        transition-all
        duration-1000
        `}

    >

      <ProfileSidebarHeader
        isSidebarOpen={isSidebarOpen}
        onOpen={() => setIsSidebarOpen(true)}
        onClose={() => setIsSidebarOpen(false)}
      />

      <ProfileSidebarMenu
        items={PROFILE_SIDEBAR_MENU}
        isSidebarOpen={isSidebarOpen}
      />

      <div className="mt-auto border-t pt-4" />

      <ProfileSidebarFooter
        onLogout={onLogout}
        isSidebarOpen={isSidebarOpen}
      />

    </aside>

  );

};

export default ProfileSidebar;