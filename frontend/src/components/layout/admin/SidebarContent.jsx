// src/components/admin/SidebarContent.jsx

import { NavLink } from "react-router-dom";

import { adminSidebarNavigation } from '../../../constants/admin/navigation/adminSidebarNavigation.js'

const SidebarContent = ({
  collapsed,
  closeMobileSidebar,
}) => {
  return (
    <nav className="flex-1 p-3 space-y-1">
      {adminSidebarNavigation.map((item) => {
        const Icon = item.icon;

        return (
          <NavLink
            key={item.path}
            to={item.path}
            end={item.path === "/admin"}
            onClick={closeMobileSidebar}
            className={({ isActive }) => `
              group
              relative

              w-full

              flex items-center

              ${collapsed
                ? "justify-center"
                : "gap-3"
              }

              px-4 py-3

              rounded-lg

              transition-all duration-200

              ${isActive
                ? `
                    bg-linear-to-r
                    from-rose-500
                    to-red-500

                    text-white

                    shadow-lg
                    shadow-rose-500/20
                  `
                : `
                    text-slate-300

                    hover:bg-slate-800
                    hover:text-white
                  `
              }
            `}
          >
            {/* ICON */}
            <Icon className="w-5 h-5 shrink-0" />

            {/* LABEL */}
            {!collapsed && (
              <span className="text-sm font-medium">
                {item.label}
              </span>
            )}

            {/* TOOLTIP */}
            {collapsed && (
              <div
                className="
                  absolute left-18.75

                  opacity-0 invisible

                  group-hover:opacity-100
                  group-hover:visible

                  transition-all duration-200

                  whitespace-nowrap

                  bg-slate-900
                  text-white

                  text-sm

                  px-3 py-2

                  rounded-lg

                  shadow-xl
                "
              >
                {item.label}
              </div>
            )}
          </NavLink>
        );
      })}
    </nav>
  );
};

export default SidebarContent;