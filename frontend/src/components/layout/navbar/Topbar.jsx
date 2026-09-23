import React, { useState } from "react";

import LocationSelector from "./LocationSelector";
import UserMenu from "./UserMenu";
import MobileMenuButton from "./MobileMenuButton";
import SearchBar from "./SearchBar";
import { Search } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { openSearchDrawer } from "@/store/search/searchSlice";
import { Link } from "react-router-dom";
import ProfileDrawer from "@/components/drawer/profileDrawer";
import { logoutUser } from "@/store/auth/authThunks";

const Topbar = () => {

  const dispatch = useDispatch();

  const [isProfileDrawerOpen, setIsProfileDrawerOpen] = useState(false);

  const { user } = useSelector((state) => state.auth)


  const handleLogout = () => {
    dispatch(logoutUser())
  };

  return (
    <>
      {/* existing topbar */}

      <div className="flex flex-col w-full py-3 gap-4 px-3 md:px-6 lg:px-8">

        <div className="flex items-center justify-between gap-8 w-full mx-auto max-w-7xl">

          {/* Left */}
          <div className="flex items-center gap-8 flex-1">

            <Link
              to="/"
              className="md:text-xl whitespace-nowrap font-black tracking-tighter text-[#DC3548] uppercase"
            >
              unlock cinema
            </Link>

            <SearchBar />

          </div>

          {/* Right */}

          <div className="flex items-center gap-4">

            <button
              className="md:hidden"
              onClick={() => dispatch(openSearchDrawer())}
            >
              <Search className="text-slate-400 w-4 h-4" />
            </button>

            <LocationSelector />

            <UserMenu
              onProfileClick={() =>
                setIsProfileDrawerOpen(true)
              }
            />

            <MobileMenuButton
              onMenuClick={() =>
                setIsProfileDrawerOpen(true)} />

          </div>

        </div>

      </div>

      <ProfileDrawer
        open={isProfileDrawerOpen}
        onClose={() =>
          setIsProfileDrawerOpen(false)
        }
        user={user}
        onLogout={handleLogout}
      />

    </>
  );
};

export default Topbar