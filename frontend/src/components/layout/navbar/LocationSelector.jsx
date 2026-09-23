import { openDrawer } from "@/store/location/locationSlice";
import React from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";

const LocationSelector = () => {

  const dispatch = useDispatch()

  const { city, isDrawerOpen } = useSelector((state) => state.location)

  const handleLocation = () => {    

    if (!isDrawerOpen) {      
      dispatch(openDrawer())
    }
  }
  return (
    <button 
    onClick={()=>handleLocation()}
    className="flex items-center gap-1 text-slate-600 hover:text-[#DC3548] transition-colors overflow-x-auto no-scrollbar">
      {city}<MdKeyboardArrowDown/>
    </button>
  );
};

export default LocationSelector;