import {
  LucidePanelLeftClose,
} from "lucide-react";

import { AiFillCopyrightCircle } from "react-icons/ai";

import SidebarContent from "./SidebarContent";

const Sidebar = ({
  collapsed,
  setCollapsed,
}) => {
  return (
    <aside
      className={`
        hidden md:flex

        fixed top-0 left-0
        z-30

        h-screen

        flex-col

        bg-[#111827]
        text-white

        border-r border-slate-800

        transition-all duration-300

        ${
          collapsed
            ? "w-20"
            : "w-64"
        }
      `}
    >
      {/* HEADER */}
      <div
        className={`
          relative

          h-16

          border-b border-slate-800

          flex items-center

          ${
            collapsed
              ? "justify-center px-2"
              : "justify-between px-5"
          }
        `}
      >
        {!collapsed ? (
          <div className="flex flex-row justify-between items-center w-full">
            <div>
              <h1 className="text-xl font-bold">
                CineManage
              </h1>

              <p className="text-xs text-slate-400">
                Cinema Operations
              </p>
            </div>

            <button
              onClick={() =>
                setCollapsed(!collapsed)
              }
            >
              <LucidePanelLeftClose size={25} />
            </button>
          </div>
        ) : (
          <div
            className="
              w-11 h-11
              rounded-xl

              flex items-center justify-center

              font-bold text-lg
            "
          >
            <button
              onClick={() =>
                setCollapsed(!collapsed)
              }
            >
              <AiFillCopyrightCircle size={30} />
            </button>
          </div>
        )}
      </div>

      {/* REUSABLE NAVIGATION */}
      <SidebarContent collapsed={collapsed} />
    </aside>
  );
};

export default Sidebar;