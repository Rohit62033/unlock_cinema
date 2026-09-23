import ProfileSidebarItem from "./ProfileSidebarItem";

const ProfileSidebarMenu = ({ items,isSidebarOpen }) => {

  return (

    <nav className="sm:space-y-1 md:space-y-2 lg:space-y-3 overflow-y-auto">

      {

        items.map((item) => (

          <ProfileSidebarItem
            key={item.id}
            item={item}
            isSidebarOpen={isSidebarOpen}
          />

        ))

      }

    </nav>

  );

};

export default ProfileSidebarMenu;