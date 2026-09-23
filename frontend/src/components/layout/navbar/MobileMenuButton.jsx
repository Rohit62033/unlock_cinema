import React from "react";
import { TextAlignJustify } from "lucide-react";

const MobileMenuButton = ({ onMenuClick }) => {
  return (


    <button
      onClick={onMenuClick}
      className="md:hidden text-slate-600">
      <TextAlignJustify className="w-5 h-5" />
    </button>
  );
};

export default MobileMenuButton;