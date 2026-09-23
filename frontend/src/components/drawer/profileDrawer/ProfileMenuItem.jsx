import { openAuthModal } from "@/store/uiSlice";
import { ChevronRight, Lock } from "lucide-react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const ProfileMenuItem = ({
  user,
  icon: Icon,
  menuItem,
  onClose
}) => {
  

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const isLocked = menuItem.requiresAuth && !user;

  return (

    <button

      onClick={() => {
        if (isLocked) {
          dispatch(openAuthModal());
          return;
        }

        navigate(menuItem.path);
        onClose()
      }}

      className="
        flex
        w-full
        items-center
        justify-between
        px-5
        py-4
        transition
        hover:bg-gray-50
        overflow-y-auto
      "

    >

      <div className="flex items-center gap-4">

        <Icon size={20} />

        <div
          onClick={()=>onclose}
          className="flex flex-col items-start justify-center">
          <span className={`text-sm font-medium ${isLocked ? 'text-gray-400' : 'text-sm'}`}>

            {menuItem.label}

          </span>
          {menuItem.description && (
            <p className="text-xs text-gray-400">{menuItem.description}</p>
          )}
        </div>

      </div>

      {isLocked && menuItem.showLockIcon
        ? <Lock className="text-gray-400" size={14} />
        : <ChevronRight size={16} />
      }

    </button>

  );

};

export default ProfileMenuItem;