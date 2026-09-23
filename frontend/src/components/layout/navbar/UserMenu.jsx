import React, { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useDispatch, useSelector } from "react-redux";
import { openAuthModal } from "@/store/uiSlice";

const UserMenu = ({onProfileClick}) => {

  const dispatch = useDispatch()

  const [isAuthOpen, setIsAuthOpen] = useState(false);

  const { user } = useSelector(
    (state) => state.auth
  );
  const avatarUrl = user?.avatar?.url?.trim();


  return (

    user ? (
      <button 
      onClick={onProfileClick}
      className="hidden md:flex items-center gap-2 text-slate-600 font-semibold px-4 py-1.5 rounded text-xs active:scale-[0.98] transition-transform" >

        <Avatar className="h-8 w-8">
          <AvatarImage
            key={avatarUrl}   // important
            src={avatarUrl || "https://github.com/shadcn.png"} />
          <AvatarFallback delayMs={600}>{user?.avatar?.url}</AvatarFallback>
        </Avatar>

        {user?.username ? `${user?.username}` : 'Hii Guest'}
      </button >
    )
      : (
        <>
          <button
            onClick={() => { dispatch(openAuthModal()) }}
            className="bg-primary/96  text-white text-sm font-medium py-0.5 px-2.5 rounded shadow whitespace-nowrap"
          >Sign in </button>

        </>
      )



  );
};

export default UserMenu;