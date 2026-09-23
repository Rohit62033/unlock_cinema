import { Menu } from "lucide-react";

const Header = ({
  setMobileOpen,
}) => {
  return (
    <header
      className="
       md:hidden sticky top-0 z-20

        h-16

        bg-white

        border-b border-slate-200

        flex items-center justify-between

        px-4 md:px-6 sm:mb-4 md:mb-0
      "
    >
      {/* LEFT */}
      <div className="flex items-center gap-3">
        {/* MOBILE HAMBURGER */}
        <button
          onClick={() =>
            setMobileOpen(true)
          }
          className="
            md:hidden

            w-10 h-10

            rounded-lg

            hover:bg-slate-100

            flex items-center justify-center
          "
        >
          <Menu className="w-6 h-6" />
        </button>

        <h2
          className="
            text-lg md:text-xl
            font-semibold
            text-slate-800
          "
        >
          Dashboard
        </h2>
      </div>

      {/* RIGHT */}
      <img
        src="https://i.pravatar.cc/100"
        alt="admin"
        className="
          w-10 h-10
          rounded-full
          object-cover
        "
      />
    </header>
  );
};

export default Header;