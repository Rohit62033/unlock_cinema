import { Menu, X } from "lucide-react";

const ProfileSidebarHeader = ({ isSidebarOpen, onOpen, onClose }) => {

  console.log(onclick, onclose);


  return (

    <div className="pb-6 flex items-center justify-between">

      <h2 className="text-2xl font-bold">

        {isSidebarOpen ? ' My Account' : (<button onClick={onOpen}><Menu /></button>)}

      </h2>

      {isSidebarOpen && <button onClick={onClose}><X className="hidden md:block " /></button>}

    </div>

  );

};

export default ProfileSidebarHeader;