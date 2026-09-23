import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { Link } from "react-router-dom";

const DrawerHeader = ({
  user,
  onClose,
}) => {


  return (

    <header

      className="
        flex
        items-center
        justify-between
        border-b
        px-5
        py-4
        
    "

    >

      <div>
        <h2
          className="
          text-xl
          font-bold
          text-gray-800
        "
        >

          {user?.username}

        </h2>

        <Link
          to={'/edit-profile'}
          className="text-gray-400 whitespace-nowrap tracking-tighter text-sm"
        >
          Edit profile <ChevronRight /></Link>
      </div>

      <button

        onClick={onClose}

        className="
          rounded-full
          p-2
          hover:bg-gray-100
        "

      >

      </button>

    </header>

  );

};

export default DrawerHeader;