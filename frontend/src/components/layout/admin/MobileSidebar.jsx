import { X } from "lucide-react";

import SidebarContent from "./SidebarContent";

const MobileSidebar = ({
  mobileOpen,
  setMobileOpen,
}) => {
  return (
    <>
      {/* OVERLAY */}
      {mobileOpen && (
        <div
          onClick={() =>
            setMobileOpen(false)
          }
          className="
            fixed inset-0
            bg-black/40
            z-40
            md:hidden
          "
        />
      )}

      {/* SIDEBAR */}
      <aside
        className={`
          fixed top-0 left-0
          z-50

          h-screen
          w-64

          bg-[#111827]
          text-white

          border-r border-slate-800

          transition-transform duration-300

          md:hidden

          ${
            mobileOpen
              ? "translate-x-0"
              : "-translate-x-full"
          }
        `}
      >
        {/* HEADER */}
        <div
          className="
            h-16
            px-5

            border-b border-slate-800

            flex items-center justify-between
          "
        >
          <div>
            <h1 className="text-xl font-bold">
              CineManage
            </h1>
          </div>

          <button
            onClick={() =>
              setMobileOpen(false)
            }
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* ACTUAL SIDEBAR CONTENT */}
        <SidebarContent
          collapsed={false}
          closeMobileSidebar={() =>
            setMobileOpen(false)
          }
        />
      </aside>
    </>
  );
};

export default MobileSidebar;