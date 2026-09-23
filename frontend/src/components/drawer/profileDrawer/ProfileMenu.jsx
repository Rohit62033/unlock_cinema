import { useNavigate } from "react-router-dom";

import ProfileMenuItem from "./ProfileMenuItem";

const ProfileMenu = ({
  user,
  items,
  onClose,
}) => {

  const navigate = useNavigate();

  return (

    <div className=" flex-1 
    min-h-0
        overflow-y-auto
        no-scrollbar">

      {

        items.map((item) => (

          <ProfileMenuItem

            user={user}

            icon={item.icon}

            menuItem={item}

            onClose={onClose}

          />

        ))

      }

    </div>

  );

};

export default ProfileMenu;