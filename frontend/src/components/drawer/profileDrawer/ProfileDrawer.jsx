

import ProfileHeader from "./ProfileHeader";
import ProfileMenu from "./ProfileMenu";
import ProfileActions from "./ProfileActions";

import { PROFILE_MENU } from "./profileMenu.config";
import Drawer from "@/components/shared/Drawer/Drawer";
import DrawerBody from "@/components/shared/Drawer/DrawerBody";

const ProfileDrawer = ({
  open,
  onClose,
  user,
  onLogout,
}) => {

  return (

    <Drawer

      open={open}

      onClose={onClose}

    >

      <DrawerBody>

        <ProfileHeader

          user={user}

          purpose={'Edit profile'}

          action={'/my-profile'}

          onClose={onClose}

        />

        <ProfileMenu

          user={user}

          items={PROFILE_MENU}

          onClose={onClose}

        />

      </DrawerBody>

      {
        user && (
          <ProfileActions

            onLogout={onLogout}

          />
        )
      }

    </Drawer>

  );

};

export default ProfileDrawer;