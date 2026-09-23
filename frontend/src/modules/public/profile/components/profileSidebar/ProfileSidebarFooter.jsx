import { LogOut, X } from "lucide-react";

const ProfileSidebarFooter = ({ onLogout, isSidebarOpen }) => {

  return (
    <>
      <button

        onClick={onLogout}

        className={`
          w-full
         flex
        items-center
        gap-3
        px-4
        py-3
        rounded-xl
        text-red-600
        hover:bg-primary/7
        
        ${isSidebarOpen ? 'justify-start' : 'justify-center'}
        whitespace-nowrap
        shrink-0
        `}

      >

       <LogOut className="shrink-0 " size={18} />
        {isSidebarOpen && (<span>

          Sign Out

        </span>)}



      </button>
      
    </>

  );

};

export default ProfileSidebarFooter;