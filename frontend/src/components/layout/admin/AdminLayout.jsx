import { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import MobileSidebar from "./MobileSidebar";
import Header from "./Header";


const AdminLayout = () => {
  const [collapsed, setCollapsed] =
    useState(false);

  const [mobileOpen, setMobileOpen] =
    useState(false);

  return (
    <div className="min-h-screen bg-slate-100">
      <Sidebar
        collapsed={collapsed}
        setCollapsed={setCollapsed}
      />

      <MobileSidebar
        mobileOpen={mobileOpen}
        setMobileOpen={setMobileOpen}
      />

      {/* MAIN SECTION */}
      <div
        className={`
          transition-all duration-300

          ${
            collapsed
              ? "md:ml-20"
              : "md:ml-64"
          }
        `}
      >
        <Header
          setMobileOpen={setMobileOpen}
        />

        <main className="">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;