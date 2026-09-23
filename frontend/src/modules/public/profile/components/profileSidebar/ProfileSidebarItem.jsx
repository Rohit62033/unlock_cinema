import { NavLink, useSearchParams } from "react-router-dom";
import { ChevronRight } from "lucide-react";

const ProfileSidebarItem = ({ item, isSidebarOpen }) => {

  const Icon = item.icon;

   const [searchParams, setSearchParams] =
        useSearchParams();

    const activeTab =
        searchParams.get("tab") || "profile";

    const isActive =
        activeTab === item.id;

    const handleClick = () => {

        const next =
            new URLSearchParams(searchParams);

        next.set("tab", item.id);

        setSearchParams(next);

    };

  return (
<button
    type="button"
    onClick={handleClick}
    className="w-full flex items-center justify-between rounded-xl px-4 py-3 hover:bg-gray-50"
>

    <div className="flex items-center gap-3 min-w-0">

        <Icon
            size={18}
            className="shrink-0"
        />

        <span className="truncate">

            {item.label}

        </span>

    </div>

    <ChevronRight
        size={16}
        className="shrink-0"
    />

</button>

  );

};

export default ProfileSidebarItem;